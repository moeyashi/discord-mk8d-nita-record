import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import parse_qs, unquote, urlparse

class LeaderBoard:

    sheet_url = r"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBXBdqpurvBmR--bzj9RJmgr7HxAoWVZmlwmhaBK-LYf_BbXn8iAPdH-ogBtXiAwxlTkQgn45PkeRW/pubhtml/sheet?headers=false&gid=0"
    all_time_column = 4
    vs_time_column = 10

    def __init__(self):
        response = requests.get(self.sheet_url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, "html.parser")
        rows = [row.find_all(["th", "td"]) for row in soup.find_all("tr")]
        self.track_records = self._parse_track_records(rows)

    def _parse_track_records(self, rows):
        track_header_indexes = [
            index for index, row in enumerate(rows)
            if len(row) > self.all_time_column
            and re.fullmatch(r"[A-Za-z][A-Za-z0-9]*", self._get_cell_text(row, 1))
            and ":" not in self._get_cell_text(row, self.all_time_column)
        ]
        records = []

        for position, header_index in enumerate(track_header_indexes):
            next_header_index = track_header_indexes[position + 1] if position + 1 < len(track_header_indexes) else len(rows)
            track_rows = rows[header_index + 1:next_header_index]
            records.append({
                "all": self._find_first_time(track_rows, self.all_time_column),
                "vs": self._find_first_time(track_rows, self.vs_time_column),
                "vs_url": self._find_first_url(track_rows, self.vs_time_column),
            })

        return records

    def _get_cell_text(self, row, column_index):
        if len(row) <= column_index:
            return ""

        return row[column_index].get_text(" ", strip=True)

    def _find_first_time(self, rows, column_index):
        for row in rows:
            cell = self._get_cell_text(row, column_index)
            if cell and ":" in cell:
                return cell.strip('*').replace(':', '').replace('.', '')

        raise ValueError(f"time not found in column {column_index}")

    def _find_first_url(self, rows, column_index):
        for row in rows:
            if len(row) <= column_index:
                continue

            anchor = row[column_index].find("a")
            if not anchor:
                continue

            href = anchor.get("href")
            if not href:
                continue

            parsed = urlparse(href)
            query = parse_qs(parsed.query)
            if "q" in query and query["q"]:
                return unquote(query["q"][0])

            return href

        return ""

    def _get_record(self, trackID):
        record_index = trackID - 1
        if record_index < 0 or record_index >= len(self.track_records):
            raise IndexError(f"trackID {trackID} is out of range")

        return self.track_records[record_index]

    # VSカスタムのWRを取得
    def getVSWR(self, trackID): # trackIDはMKS=1からbRRw=96までの整数
        return self._get_record(trackID)["vs"]

    # VSカスタムのWRのyoutubeリンクを取得
    def get_vswr_url(self, trackID):
        return self._get_record(trackID)["vs_url"]

    # VSカスタムのランカーレコードを取得
    def getVSRR(self, trackID):
        return self._get_record(trackID)["vs"]

    # ALLカスタムのWRを取得
    def getAllWR(self, trackID):
        return self._get_record(trackID)["all"]

    # ALLカスタムのランカーレコードを取得
    def getAllRR(self, trackID):
        return self._get_record(trackID)["all"]
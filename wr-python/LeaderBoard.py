import requests
from bs4 import BeautifulSoup

class LeaderBoard:

    # スプレッドシートのURL
    url = r"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBXBdqpurvBmR--bzj9RJmgr7HxAoWVZmlwmhaBK-LYf_BbXn8iAPdH-ogBtXiAwxlTkQgn45PkeRW/pubhtml?gid=0&single=true"

    def __init__(self):
        response = requests.get(self.url)
        htmlContent = response.content
        self.soup = BeautifulSoup(htmlContent, "html.parser")
        self.WRElements = self.soup.find_all("td", {"class": "s34"})
        self.RRElements = self.soup.find_all("td", {"class": "s42"})

    def __gettime(self, elements, index):
        return f"{elements[index].text.strip().strip("*").replace(":","").replace(".","")}"
    
    
    # VSカスタムのWRを取得
    def getVSWR(self, trackID): # trackIDはMKS=1からbRRw=96までの整数
        index = 50*trackID-49
        return self.__gettime(self.WRElements,index)

    # VSカスタムのランカーレコードを取得
    def getVSRR(self, trackID):
        index = 6*trackID-3
        return self.__gettime(self.RRElements,index)

    # ALLカスタムのWRを取得
    def getAllWR(self, trackID):
        index = 50*trackID-50
        return self.__gettime(self.WRElements,index)

    # ALLカスタムのランカーレコードを取得
    def getAllRR(self, trackID):
        index = 6*trackID-4
        return self.__gettime(self.RRElements,index)
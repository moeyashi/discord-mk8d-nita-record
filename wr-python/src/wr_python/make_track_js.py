from wr_python.LeaderBoard import LeaderBoard
from jinja2 import Environment, PackageLoader, select_autoescape

env = Environment(
    loader=PackageLoader("wr_python"),
    autoescape=select_autoescape(),
)

template = env.get_template("track.js.template")

trackList = [
    "MKS",
    "WP",
    "SSC",
    "TR",
    "MC",
    "TH",
    "TM",
    "SGF",
    "SA",
    "DS",
    "Ed",
    "MW",
    "CC",
    "BDD",
    "BC",
    "RR",
    "rMMM",
    "rMC",
    "rCCB",
    "rTT",
    "rDDD",
    "rDP3",
    "rRRy",
    "rDKJ",
    "rWS",
    "rSL",
    "rMP",
    "rYV",
    "rTTC",
    "rPPS",
    "rGV",
    "rRRd",
    "dYC",
    "dEA",
    "dDD",
    "dMC",
    "dWGM",
    "dRR",
    "dIIO",
    "dHC",
    "dBP",
    "dCL",
    "dWW",
    "dAC",
    "dNBC",
    "dRiR",
    "dSBS",
    "dBB",
    "bPP",
    "bTC",
    "bCMo",
    "bCMa",
    "bTB",
    "bSR",
    "bSG",
    "bNH",
    "bNYM",
    "bMC3",
    "bKD",
    "bWP",
    "bSS",
    "bSL",
    "bMG",
    "bSHS",
    "bLL",
    "bBL",
    "bRRM",
    "bMT",
    "bBB",
    "bPG",
    "bMM",
    "bRR7",
    "bAD",
    "bRP",
    "bDKS",
    "bYI",
    "bBR",
    "bMCd",
    "bWS",
    "bSSy",
    "bAtD",
    "bDC",
    "bMH",
    "bSCS",
    "bLAL",
    "bSW",
    "bKC",
    "bVV",
    "bRA",
    "bDKM",
    "bDCt",
    "bPPC",
    "bMD",
    "bRIW",
    "bBC3",
    "bRRw",
]

MyLB = LeaderBoard()

trackList.insert(0, "")
# WRList = ["VSWR"]
# RRList = ["VSRK"]
# AllWRList = ["AllWR"]
# AllRRList = ["AllRR"]

wr = dict()
for i in range(1, 97):
    trackID = i

    WRTime = MyLB.getVSWR(trackID)
    AllWRTime = MyLB.getAllWR(trackID)

    wr[trackList[i]] = {
        "vs": WRTime,
        "all": AllWRTime,
    }


print(template.render(wr=wr))

# with open("data.csv", "w", newline="") as f:
#     writer = csv.writer(f)

#     writer.writerow(trackList)
#     writer.writerow(WRList)
#     writer.writerow(RRList)
#     writer.writerow(AllWRList)
#     writer.writerow(AllRRList)
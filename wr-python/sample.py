import LeaderBoard
import csv

trackList = ["MKS","WP","SSC","TR",
             "MC","TH","TM","SGF",
             "SA","DS","Ed","MW",
             "CC","BDD","BC","RR",
             "rMMM","rMC","rCCB","rTT",
             "rDDD","rDP3","rRRy","rDKJ",
             "rWS","rSL","rMP","rYV",
             "rTTC","rPPS","rGV","rRRd",
             "dYC","dEA","dDD","dMC",
             "dWGM","dRR","dIIO","dHC",
             "dBP","dCL","dWW","dAC",
             "dNBC","dRiR","dSBS","dBB",
             "bPP","bTC","bCMo","bCMa",
             "bTB","bSR","bSG","bNH",
             "bNYM","bMC3","bKD","bWP",
             "bSS","bSL","bMG","bSHS",
             "bLL","bBL","bRRM","bMT",
             "bBB","bPG","bMM","bRR7",
             "bAD","bRP","bDKS","bYI",
             "bBR","bMCd","bWS","bSSy",
             "bAtD","bDC","bMH","bSCS",
             "bLAL","bSW","bKC","bVV",
             "bRA","bDKM","bDCt","bPPC",
             "bMD","bRIW","bBC3","bRRw"]
MyLB = LeaderBoard.LeaderBoard()

trackList.insert(0,"")
WRList = ["VSWR"]
RRList = ["VSRK"]
AllWRList = ["AllWR"]
AllRRList = ["AllRR"]

for i in range(1,97):
    trackID = i

    WRTime = MyLB.getVSWR(trackID)
    RRTime = MyLB.getVSRR(trackID)
    AllWRTime = MyLB.getAllWR(trackID)
    AllRRTime = MyLB.getAllRR(trackID)

    WRList.append(WRTime)
    RRList.append(RRTime)
    AllWRList.append(AllWRTime)
    AllRRList.append(AllRRTime)

with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)

    writer.writerow(trackList)
    writer.writerow(WRList)
    writer.writerow(RRList)
    writer.writerow(AllWRList)
    writer.writerow(AllRRList)
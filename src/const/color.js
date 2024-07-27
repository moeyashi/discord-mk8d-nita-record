// @ts-check
export const RED = 13632027;
export const ORANGE = 16098851;
export const YELLOW = 16312092;
export const GREEN = 8311585;
export const BLUE = 4886754;
export const PURPLE = 12390624;

/** @param {number} rank */
export const colorByTimeRank = (rank) => {
  switch (rank) {
    case 1:
      return RED;
    case 2:
      return YELLOW;
    case 3:
      return GREEN;
    case 4:
      return BLUE;
    case 5:
      return PURPLE;
    default:
      return undefined;
  }
};

// @ts-check
/**
 * @param {number} inputTime 1:53.053の場合は153053
 */
export const toMilliseconds = (inputTime) => {
  const inputMilliseconds = inputTime % 1000;
  const inputSeconds = Math.floor(inputTime / 1000) % 100;
  const inputMinutes = Math.floor(inputTime / 100000);
  return inputMilliseconds + inputSeconds * 1000 + inputMinutes * 60 * 1000;
};

/**
 * @param {number} wr milliseconds
 * @param {number} time milliseconds
 * @returns {number} seconds
 */
export const ceilDiff = (wr, time) => {
  return Math.ceil((time - wr) / 1000);
};

/**
 * @param {number} milliseconds
 * @returns {string} 1:53.053
 */
export const displayMilliseconds = (milliseconds) => {
  const millisecondsStr = Math.floor(milliseconds % 1000)
    .toString()
    .padStart(3, '0');
  const seconds = Math.floor(milliseconds / 1000);
  const secondsStr = (seconds % 60).toString().padStart(2, '0');
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${secondsStr}.${millisecondsStr}`;
};

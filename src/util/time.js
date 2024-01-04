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

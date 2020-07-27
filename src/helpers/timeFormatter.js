export default function formatToHHmmSS(timeInSeconds) {
  function addZeroOnTheLeft(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }
  let remainder = timeInSeconds % 3600;
  let hours = (timeInSeconds - remainder) / 3600;
  timeInSeconds -= hours * 3600;

  remainder = timeInSeconds % 60;
  let minutes = (timeInSeconds - remainder) / 60;
  timeInSeconds -= minutes * 60;

  return `${addZeroOnTheLeft(hours)}:${addZeroOnTheLeft(
    minutes
  )}:${addZeroOnTheLeft(timeInSeconds)}`;
}
5400;

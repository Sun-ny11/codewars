// Task
// You've purchased a ready-meal from the supermarket.

// The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

// Oh no, your microwave is 800W! How long should you cook this for?!

// Solution:
function cookingTime(neededPower, minutes, seconds, power) {
  const powerPercentage = (parseInt(neededPower) / parseInt(power)) * 100;
  const timeInSeconds = 60 * minutes + seconds;
  const secondNeed = Math.ceil(timeInSeconds * (timeInSeconds / ((timeInSeconds / powerPercentage) * 100)));
  const resSec = secondNeed % 60;
  const resMin = (secondNeed - resSec) / 60;
  return `${resMin} minutes ${resSec} seconds`;
}

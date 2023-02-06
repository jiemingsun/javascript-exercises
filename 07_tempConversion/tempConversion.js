const convertToCelsius = function(tempInput) {
  return Math.round((tempInput - 32) / 1.8 * 10) / 10
};

const convertToFahrenheit = function(tempInput) {
  return Math.round((tempInput * 1.8 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

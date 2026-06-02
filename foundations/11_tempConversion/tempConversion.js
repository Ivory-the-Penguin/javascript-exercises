function roundDecimal(num, digits) {
  pow = Math.pow(10, digits);
  return Math.round(num * pow) / pow;
}

const convertToCelsius = function (num) {
  return roundDecimal((num - 32) * (5 / 9), 1);
};

const convertToFahrenheit = function (num) {
  return roundDecimal(num * (9 / 5) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  if (num === 0) {
    return "";
  }

  let out = "";
  for (i = 0; i < num; i++) {
    out += string;
  }
  return out;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function (string) {
  let out = "";
  for (i = string.length - 1; i >= 0; i--) {
    out += string[i];
  }
  return out;
};

// Do not edit below this line
module.exports = reverseString;

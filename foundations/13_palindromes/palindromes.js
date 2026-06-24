const palindromes = function (str) {
  let strarr = Array.from(str)
    .filter((c) => !/[^A-Za-z0-9]/.test(c))
    .map((c) => c.toLowerCase());
  console.log(strarr);

  let reversed = strarr.slice().reverse();
  console.log(reversed);

  return strarr.every((val, index) => val === reversed[index]);
};

// Do not edit below this line
module.exports = palindromes;

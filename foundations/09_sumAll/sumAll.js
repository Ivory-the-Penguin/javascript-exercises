const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  let smaller, bigger;

  if (num1 >= num2) {
    bigger = num1;
    smaller = num2;
  } else {
    bigger = num2;
    smaller = num1;
  }

  let sum = 0;
  for (i = smaller; i <= bigger; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

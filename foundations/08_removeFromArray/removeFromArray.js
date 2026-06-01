const removeFromArray = function (arr, ...args) {
  return arr.filter((num) => {
    for (let item of args) {
      if (num === item) {
        return false;
      }
    }

    return true;
  });
};

// Do not edit below this line
module.exports = removeFromArray;

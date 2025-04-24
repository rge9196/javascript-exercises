const removeFromArray = function (...params) {
  let myArray = params;
  let firstArray = myArray.shift();
  for (const item of myArray) {
    firstArray = firstArray.filter((rem) => rem !== item);
  }
  return firstArray;
};

// Do not edit below this line
module.exports = removeFromArray;

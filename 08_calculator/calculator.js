const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let result = 0;
  for (const num of arr) {
    result = result + num;
    console.log(result);
  }
  return result;
};

const multiply = function (arr) {
  let result = 1;
  for (const num of arr) {
    result = result * num;
    console.log(result);
  }
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

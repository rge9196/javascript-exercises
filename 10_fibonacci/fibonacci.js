const fibonacci = function (input) {
  let num = Number(input); // → 2

  // Step 1: Check if num is negative
  if (num < 0) {
    return "OOPS";
  }

  if (num == 0) {
    return 0;
  }

  // Step 2: If num is 1 or 2, return 1
  if (num === 1 || num === 2) {
    return 1;
  }
  let last = 1;
  let current = 1;
  let temp = 0;

  // Step 3: Loop from 3 to num
  for (let i = 3; i <= num; i++) {
    temp = current;
    current = current + last;
    last = temp;
  }
  return current;
};
// Do not edit below this line
module.exports = fibonacci;

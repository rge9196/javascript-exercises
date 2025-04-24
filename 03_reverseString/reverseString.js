const reverseString = function (string) {
  const myArray = string.split("");
  let len = myArray.length;
  let reverseString = "";
  while (len > 0) {
    reverseString += myArray[len - 1];
    len--;
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

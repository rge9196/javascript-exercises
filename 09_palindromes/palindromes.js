const palindromes = function (input) {
  let lowercased = input.toLowerCase();

  let noSpaces = "";
  for (let i = 0; i < lowercased.length; i++) {
    if (lowercased[i] !== " ") {
      noSpaces += lowercased[i];
    }
  }
  let cleaned = "";
  for (let i = 0; i < noSpaces.length; i++) {
    let char = noSpaces[i];
    // Check if character is a letter or digit
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleaned += char;
    }
  }

  let reversed = "";
  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;

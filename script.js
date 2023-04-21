const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const specialEl = document.getElementById("special");
const lengthEl = document.getElementById("length");

generateBtn.addEventListener("click", () => {
  const includeLowercase = lowercaseEl.checked;
  const includeUppercase = uppercaseEl.checked;
  const includeNumbers = numbersEl.checked;
  const includeSpecialChars = specialEl.checked;
  const length = lengthEl.value;

  const password = generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecialChars
  );

  passwordEl.textContent = password;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {

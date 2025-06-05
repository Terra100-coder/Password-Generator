const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");

const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const generateBtn = document.getElementById("generate");
const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy");

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let chars = "";

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{};:,.<>?";

  if (lowercaseCheckbox.checked) chars += lowercase;
  if (uppercaseCheckbox.checked) chars += uppercase;
  if (numbersCheckbox.checked) chars += numbers;
  if (symbolsCheckbox.checked) chars += symbols;

  if (chars.length === 0) {
    alert("Veuillez sélectionner au moins un type de caractère.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }

  passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (!passwordField.value) return;
  passwordField.select();
  document.execCommand("copy");
  alert("Mot de passe copié !");
});

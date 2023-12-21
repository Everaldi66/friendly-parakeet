// Assignment code here
function generatePassword() {

  const passwordLength = prompt("How many characters for password [8 - 128]");

  // check edge case for user closing prompt without entering information
  if (passwordLength === "") return "Please enter a password length";
  // check edge case for user entering password length <8 or >128
  if (passwordLength < 8 || passwordLength > 128) return "Please enter a number between 8 and 128";
  // check edge case for user entering characters
  if (isNaN( Number(passwordLength))) return "Please enter only numbers";


  const passwordLowercase = prompt("Use lowercase (Y/n)");

  // do edge cases here

  const passwordUppercase = prompt("Use uppercase (Y/n)");

  // do edge cases here

  const passwordNumeric = prompt("Use numeric (Y/n)");

  // do edge cases here

  const passwordSpecialCharacters  = prompt("Special Characters (Y/n)");

  // do edge cases here




}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

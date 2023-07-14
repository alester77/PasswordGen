// Assignment Code
// Assign variables
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var specialCharacters = '!@#$%^&*()';


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generate password function


// validate password length


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





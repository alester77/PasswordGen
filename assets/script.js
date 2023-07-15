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
function generatePassword () {
  var passwordLength = prompt("Enter the desired password length between 8 and 128");

  // while loop to check for length
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must between between 8 and 128 characters.")
    passwordLength = prompt("Please choose a number between 8 and 128");
  }

  // password options

  var password = "";
  var characters = ""
  var includeLowerCase = false;
  var includeUpperCase = false;
  var includeNumbers = false;
  var includeSpecialCharacters = false;

  while (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
    includeLowerCase = confirm ("Include lowercase letters?");
    includeUpperCase = confirm ("Include uppercase?");
    includeNumbers = confirm ("Include numbers?");
    includeSpecialCharacters = confirm ("Include special characters?");

    // must choose at least one type
    if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
      alert("Please pick at least one character type.")
    }
  }
  // if chosen add to character
  if (includeLowerCase) {
    characters += lowerCaseLetters;
  }
  if (includeUpperCase) {
    characters += upperCaseLetters;
  }
  if (includeNumbers) {
    characters += includeNumbers;
  }
  if (includeSpecialCharacters) {
    characters = includeSpecialCharacters
  }

  // 
  for (var i = 0; i <passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);

  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





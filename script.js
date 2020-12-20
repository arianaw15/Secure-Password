var generateBtn = document.querySelector("#generate");

//Prompt the user to select a password length between 8 and 128 characters
var passwordLength = prompt("Select the length of your password (must be between 8-128 characters)")
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength)
} else {
  alert("That is not a valid length, please select a number between 8 and 128")
}

//Prompt the user to confirm whether they'd like lower case letters included in their password
var lowerCase= confirm("Would you like to include lower case letters in your password?")

//Prompt the user to confirm whether they'd like upper case letters included in their password
var upperCase= confirm("Would you like to include upper case letters in your password?")

//Prompt the user to confirm whether they'd like numbers included in their password
var num= confirm("Would you like to include numbers in your password?")

//Prompt the user to confirm whether they'd like special characters included in their password
var specialChar= confirm("Would you like to include special characters in your password?")

//Variables included in functions to create passwords
var result           = '';
  var specialCharacters       = '!@#$%&';
  var numCharacters = '0123456789'
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
  var upperCaseCharacters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//Function if user selects all options to be included
function makeid(length) {
  if (lowerCase === true && upperCase === true && num === true && specialChar === true){
  var charactersLength = (specialCharacters + numCharacters + lowerCaseCharacters + upperCaseCharacters).length;
  for ( var i = 0; i < length; i++ ) {
     result += (specialCharacters + numCharacters + lowerCaseCharacters + upperCaseCharacters).charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//Function if user doesn't select any of the options to be included
else {
  alert("You can not have a password without uppercase, lowercase, numbers and special characters. Please select at least 1.")
  }
}

console.log(makeid(passwordLength));

var password = makeid();
  var passwordText = document.querySelector("#password");
  passwordText.value = makeid(passwordLength);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  //Prompt the user to select a password length between 8 and 128 characters
  function generatePassword(){
  var passwordLength = prompt("Select the length of your password (must be between 8-128 characters)")
  if (passwordLength <= 8 || passwordLength >= 128){
    confirm("That is not a valid length, please click the 'Generate Password' button and select a number between 8 and 128");
    if (true || false) return;
  }

  //Prompt the user to confirm whether they'd like lower case letters included in their password
  var lowerCase = confirm("Would you like to include lower case letters in your password?")

  //Prompt the user to confirm whether they'd like upper case letters included in their password
  var upperCase = confirm("Would you like to include upper case letters in your password?")

  //Prompt the user to confirm whether they'd like numbers included in their password
  var num = confirm("Would you like to include numbers in your password?")

  //Prompt the user to confirm whether they'd like special characters included in their password
  var specialChar = confirm("Would you like to include special characters in your password?")

  //If user selects "False" for all options, inform them they must click "Generate Password" again and select at least 1 option

  if (lowerCase === false && upperCase === false && num === false && specialChar === false) {
    alert("You must make at least 1 selection. Please click the 'Generate Password' button and try again.")
  }

  //Variables included in functions to create passwords
  var result = '';
  var specialCharacters = '!@#$%&';
  var numCharacters = '0123456789'
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var totalCharacters = ""

  if (lowerCase === true) {
    totalCharacters = totalCharacters + lowerCaseCharacters
  }

  if (upperCase === true) {
    totalCharacters = totalCharacters + upperCaseCharacters
  }

  if (num === true) {
    totalCharacters = totalCharacters + numCharacters
  }

  if (specialChar === true) {
    totalCharacters = totalCharacters + specialCharacters
  }


  //Function based on users selections
  
    for (var i = 0; i < passwordLength; i++) {
      result += totalCharacters.charAt(Math.floor(Math.random() * totalCharacters.length));
    };
    return result;
}
  

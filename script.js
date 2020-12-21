//When the user clicks 'Generate Password' it triggers the prompts to obtain the criteria for their password

// var generateBtn = document.getElementById("#generate").addEventListener("click", generateLength);

  //Prompt the user to select a password length between 8 and 128 characters
  // function generateLength(){
  var passwordLength = prompt("Select the length of your password (must be between 8-128 characters)")
  if (passwordLength <= 8 && passwordLength >= 128) {
    alert("That is not a valid length, please click the 'Generate Password' button and select a number between 8 and 128")
    result = passwordLength;
  }
// };

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
  function makeid(length) {
    for (var i = 0; i < length; i++) {
      result += totalCharacters.charAt(Math.floor(Math.random() * totalCharacters.length));
    };
    return result;
  }

  console.log(makeid(passwordLength));

  //Generate User's password and display it in the #password field
  var password = makeid();
  var passwordText = document.querySelector("#password");
  passwordText.value = makeid(passwordLength);

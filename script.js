// Assignment code here


function generatePassword() {
  var characters = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');

  // validate prompt text
  if (characters === "" || characters === null) {
    window.alert("That character length isn't in the specified range, please try again.");
    // Call it again
    return generatePassword()
  }

  console.log(characters);
  return characters;

};

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

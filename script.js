// Assignment code here

var randomPW = 0;

function generatePassword() {
  var characters = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');
  
  validateInput(characters); 

  var rand = "0"

  for (let i = 0; i < characters - 2; i++) {
    rand += "0";
  } 

  rand = "1" + rand;
  console.log(rand);

  randomPW = Math.floor(1 + Math.random() * (9 * rand));
  console.log(randomPW);

  return randomPW;

};

function validateInput(characters) {
  // validate prompt text
  if (characters === "" || characters === null) {
    window.alert("Hmmmm. Looks like nothing was entered, please try again.");
    return generatePassword();
  }
  else if (isNaN(characters)) {
    window.alert("That character isn't a number. Please enter a number.");
    return generatePassword();
  }
  else if (characters < 8 || characters > 128) {
    window.alert("That number isn't within the specified range. Please try again.");
    return generatePassword();
  }
  // return true;
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

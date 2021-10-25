// Assignment code here

// Turn this into an object?
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '_-+=`"!@#$%^&*[](){}';
var randomPassword = "";
var finalPassword = "";

function generatePassword() {
  // set final password back to empty, in case user hits enter after 1st pw is generated (this was adding second pw to first)
  finalPassword = "";
  var characterQuantity = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');
  // console.log("characters: ", characterQuantity);
  
  var characterQuantity = parseInt(characterQuantity);
  // console.log("It converts now: ", typeof(characterQuantity));

  // Send it to validation function
  validateInput(characterQuantity); 
  return finalPassword;
};

function validateInput(characterQuantity) {
  // validate prompt text
  if (characterQuantity === "" || characterQuantity === null) {
    window.alert("Hmmmm. Looks like nothing was entered, please try again.");
    return generatePassword();
  }
  else if (isNaN(characterQuantity)) {
    window.alert("That character isn't a number. Please enter a number.");
    return generatePassword();
  }
  else if (characterQuantity < 8 || characterQuantity > 128) {
    window.alert("That number isn't within the specified range. Please try again.");
    return generatePassword();
  }

  randomGenerate(characterQuantity);
  return finalPassword;
};

function randomGenerate(characterQuantity) {
  console.log("how broken is characterQuantity?", characterQuantity);
  var lowercaseYes = window.confirm('Do you want to include lowercase letters?');
  var uppercaseYes = window.confirm('Do you want to include uppercase letters?');
  var numbersYes = window.confirm('Do you want to include numbers?');
  var symbolsYes = window.confirm('Do you want to include symbols?');

  if (!lowercaseYes && !uppercaseYes && !numbersYes && !symbolsYes) {
    alert("Please pick one or more character option");
    randomGenerate();
  }
  else {
    if (lowercaseYes) {
      randomPassword += lowercase;
    }
    if (uppercaseYes) {
      randomPassword += uppercase;
    }
    if (numbersYes) {
      randomPassword += numbers;
    }
    if (symbolsYes) {
      randomPassword += symbols;
    } 
    console.log(characterQuantity);

    for (var i = 0; i < characterQuantity; i++) {
      finalPassword = finalPassword + randomPassword[Math.floor(Math.random() * randomPassword.length)];
    }
    console.log("final PW:", finalPassword);
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

// Password Object
var pw = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase:  'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '_-+=`"!@#$%^&*[](){}~><:'
}

var randomPassword = "";
var finalPassword = "";

var lowercaseYes,uppercaseYes,numbersYes,symbolsYes = false;

function generatePassword() {
  // set final password back to empty, in case user hits enter after 1st pw is generated (this was adding second pw to first)
  finalPassword = "";

  // if one pw has been generated and user click to do another, reset the randomGenerate prompts so their new choices come through, still doesn't work perfectly but it's close.
  lowercaseYes,uppercaseYes,numbersYes,symbolsYes = false;

  // Grab the number from the user (prompt is string format)
  var characterQuantity = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');

  //convert string to integer
  var characterQuantity = parseInt(characterQuantity);

  // Send it to validation function
  validateInput(characterQuantity); 

  // We have our final PW!
  return finalPassword;
};

// validate prompt text, run generate PW again if not valid, blank or cancel (null), not a number NaN, Out of range numbers
function validateInput(characterQuantity) {
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

  // Send to randomGenerate to build with different options picked by the user
  randomGenerate(characterQuantity);
  return finalPassword;
};

// Ask user the options they want to include
function randomGenerate(characterQuantity) {
  console.log("characterQuantity:", characterQuantity);
  lowercaseYes = window.confirm('Do you want to include lowercase letters?');
  uppercaseYes = window.confirm('Do you want to include uppercase letters?');
  numbersYes = window.confirm('Do you want to include numbers?');
  symbolsYes = window.confirm('Do you want to include symbols?');

  // If none are picked, alert, and then run function again to ask again
  if (!lowercaseYes && !uppercaseYes && !numbersYes && !symbolsYes) {
    alert("Please pick one or more character option");
    randomGenerate();
  }
  // building the set of characters to use based on responses
  else {
    if (lowercaseYes) {
      randomPassword += pw.lowercase;
    }
    if (uppercaseYes) {
      randomPassword += pw.uppercase;
    }
    if (numbersYes) {
      randomPassword += pw.numbers;
    }
    if (symbolsYes) {
      randomPassword += pw.symbols;
    } 
 
    // looping through and picking a random character each time from the character types chosen, until we reach the number of characters requested
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
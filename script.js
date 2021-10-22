// Assignment code here
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '_-+=`"!@#$%^&*[](){}';

function generatePassword() {
  var characterQuantity = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');
  console.log("characters: ", characterQuantity);
  
  var characterQuantity = parseInt(characterQuantity);
  console.log("It converts now: ", typeof(characterQuantity));

  validateInput(characterQuantity); 

  var randomPWString = Array.apply(null, Array(characterQuantity)).map(randomGenerate).join('');

  console.log("rand: ", randomPWString);
  return randomPWString;
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
  else if (characterQuantity < 8 || characterQuantity > 129) {
    window.alert("That number isn't within the specified range. Please try again.");
    return generatePassword();
  }

}

function randomGenerate() {
 
    var randomPassword = "";
    
    // var lowercaseYes = window.prompt('Do you want lowercase letters?');
    // var uppercaseYes = window.prompt('Do you want uppercase letters?');
    // var numbersYes = window.prompt('Do you want numbers?');
    // var symbolsYes = window.prompt('Do you want numbers?');

    // if (lowercaseYes === "yes") {
    //   randomPassword += lowercase;
    //   console.log(randomPassword);
    // }
    // if (uppercaseYes === "yes") {
    //   randomPassword += uppercase;
    //   console.log(randomPassword);
    // }
    // if (numbersYes === "yes") {
    //   randomPassword += numbers;
    //   console.log(randomPassword);
    // }
    // if (symbolsYes === "yes") {
    //   randomPassword += symbols;
    //   console.log(randomPassword);
    // }

    randomPassword = uppercase + lowercase + numbers + symbols;
    return randomPassword[Math.floor(Math.random() * randomPassword.length)];
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

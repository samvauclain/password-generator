// Assignment code here
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '_-+=`"!@#$%^&*[](){}';
// var randomPW = 0;

function generatePassword() {
  var characterQuantity = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');
  console.log("characters: ", characterQuantity);
  
  var characterQuantity = parseInt(characterQuantity);
  console.log("It converts now: ", typeof(characterQuantity));

  validateInput(characterQuantity); 

  var randomPWString = Array.apply(null, Array(characterQuantity)).map(RandomGenerate).join('');

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
  // return true;
}

function RandomGenerate() {
    var random = uppercase + lowercase + numbers + symbols;
    return random[Math.floor(Math.random() * random.length)];
}


// function randNums(characters) {
//   rand = [];
  
  // loop through as many times as set by the prompt number and add a random number each time to the rand array, parse to sting so we can join the items after. 
  // for (let i = 0; i < characters; i++) {
  //   rand[i] = Math.floor(Math.random() * 10);
  //   rand[i] = rand[i].toString();
    // console.log(typeof rand[i]);
    // console.log(rand[i]);
//   } 
// }

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

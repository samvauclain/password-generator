// Assignment code here

var randomPW = 0;

function generatePassword() {
  var characters = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');
  console.log("characters: ", characters);
  
  validateInput(characters); 
  var pwNumbers = randNums(characters);

  pwNumbers = rand.join("");

  console.log("rand: ", pwNumbers);
  return pwNumbers;
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

function randNums(characters) {
  rand = [];
  
  // loop through as many times as set by the prompt number and add a random number each time to the rand array, parse to sting so we can join the items after. 
  for (let i = 0; i < characters; i++) {
    rand[i] = Math.floor(Math.random() * 10);
    rand[i] = rand[i].toString();
    console.log(typeof rand[i]);
    console.log(rand[i]);
  } 
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

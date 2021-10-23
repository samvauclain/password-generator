// Assignment code here

// Turn this into an object?
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '_-+=`"!@#$%^&*[](){}';
var randomPassword = "";
var finalPassword = "";

function generatePassword() {
  var characterQuantity = window.prompt('Choose a length of at least 8 characters and no more than 128 characters');
  // console.log("characters: ", characterQuantity);
  
  var characterQuantity = parseInt(characterQuantity);
  // console.log("It converts now: ", typeof(characterQuantity));

  // Send it to validation function
  validateInput(characterQuantity); 
  // randomPWString = randomGenerate(characterQuantity);

  // randomPassword = randomGenerate();

  console.log("how broken is randomPassword?", randomPassword);
  console.log("how broken is characterQuantity?", characterQuantity);


    var lowercaseYes = window.confirm('Do you want lowercase letters?');
    var uppercaseYes = window.confirm('Do you want uppercase letters?');
    var numbersYes = window.confirm('Do you want numbers?');
    var symbolsYes = window.confirm('Do you want numbers?');

    if (!lowercaseYes && !uppercaseYes && !numbersYes && symbolsYes) {
      alert("Please pick one or more character option");
    }
    else {
        if (lowercaseYes) {
          randomPassword += lowercase;
          console.log('Random PW:', randomPassword);
        }
        if (uppercaseYes) {
          randomPassword += uppercase;
          console.log('Random PW:', randomPassword);
        }
        if (numbersYes) {
          randomPassword += numbers;
          console.log('Random PW:', randomPassword);
        }
        if (symbolsYes) {
          randomPassword += symbols;
          console.log('Random PW:', randomPassword);
        } 
        console.log(characterQuantity);
        // randomPassword = randomPassword[Math.floor(Math.random() * characterQuantity)];
        console.log("final PW", randomPassword);

        for (var i = 0; i < characterQuantity; i++) {
          console.log(randomPassword)
          finalPassword = finalPassword + randomPassword[Math.floor(Math.random() * randomPassword.length)];
        }

        return finalPassword;
    }

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
};

// function randomGenerate() {
 
//     var lowercaseYes = window.prompt('Do you want lowercase letters?');
//     var uppercaseYes = window.prompt('Do you want uppercase letters?');
//     var numbersYes = window.prompt('Do you want numbers?');
//     var symbolsYes = window.prompt('Do you want numbers?');

//     if (!lowercaseYes && !uppercaseYes && !numbersYes && symbolsYes) {
//       alert("Please pick one or more character option");
//     }
//     else {
//         if (lowercaseYes === "yes") {
//           randomPassword += lowercase;
//           console.log('Random PW:',randomPassword);
//         }
//         if (uppercaseYes === "yes") {
//           randomPassword += uppercase;
//           console.log('Random PW:',randomPassword);
//         }
//         if (numbersYes === "yes") {
//           randomPassword += numbers;
//           console.log('Random PW:',randomPassword);
//         }
//         if (symbolsYes === "yes") {
//           randomPassword += symbols;
//           console.log('Random PW:',randomPassword);
//         } 
//     }
//     // // console.log(lowercaseYes, uppercaseYes, numbersYes, symbolsYes);

//     // randomPassword = uppercase + lowercase + numbers + symbols;
//     return randomPassword[Math.floor(Math.random() * randomPassword.length)];
// };

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





    // switch(randomPassword) {
    //   case lowercaseYes === "yes":
    //     randomPassword += lowercase;
    //     break;
    //   case uppercaseYes === "yes":
    //     randomPassword += uppercase;
    //     break;
    //   case numbersYes === "yes":
    //     randomPassword += numbers;
    //     break;
    //   case symbolsYes === "yes":
    //       randomPassword += symbols;
    //       break;
    //   default:
    //     // code block
    //     console.log("switch default");
    // }

    // return randomPassword;


        // if (randomPassword === "" || randomPassword === null) {
    //     if (lowercaseYes === "yes") {
    //       randomPassword += lowercase;
    //       console.log('Random PW:',randomPassword);
    //     }
    //     if (uppercaseYes === "yes") {
    //       randomPassword += uppercase;
    //       console.log('Random PW:',randomPassword);
    //     }
    //     if (numbersYes === "yes") {
    //       randomPassword += numbers;
    //       console.log('Random PW:',randomPassword);
    //     }
    //     if (symbolsYes === "yes") {
    //       randomPassword += symbols;
    //       console.log('Random PW:',randomPassword);
    //     } 
    //     // return true;
    //   }
    //   else {
    //     console.log("why is it looping?", randomPassword);
    //     randomPassword = uppercase + lowercase + numbers + symbols;
    //     return randomPassword[Math.floor(Math.random() * randomPassword.length)];
    //   }
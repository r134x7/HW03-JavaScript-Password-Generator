// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { // function
  var password = generatePassword(); { // function expression stored in a variable
  
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    // console.log(passwordText.value)
  };
}

 // cannot seach numbers for some reason

// idea, make for loop that iterates from 8 to 128 and then turn the array numbers into string

var options = []; // creates empty array

for (var i = 8; i < 129; i++) {
    // options = options + i; this is wrong because it somehow created a 277 length array when i = 0
    options.push(i); // this is right, creates a 120 length array
}

function generatePassword() {
  var userChoice = Number(prompt("How many characters do you want your password to have?"));
  //userChoice.

  if (!options.includes(userChoice)) {
    alert("Pick between 8 to 128 characters not " + userChoice)
    generatePassword();
    return;
  }

  if (confirm("Do you want special characters in your password?")) {
    return 
  }

// var index = Math.floor(Math.random() * options.length);
// var computerChoice = options[index]

  return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// first error found in browser: 
// Uncaught ReferenceError: generatePassword is not defined
//    at HTMLButtonElement.writePassword (script.js:6:18)
// solution: it seems the solution was to call the function

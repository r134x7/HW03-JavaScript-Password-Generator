// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { // function
  var password = generatePassword(); // function expression stored in a variable
    console.log("test");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// first error found in browser: 
// Uncaught ReferenceError: generatePassword is not defined
//    at HTMLButtonElement.writePassword (script.js:6:18)

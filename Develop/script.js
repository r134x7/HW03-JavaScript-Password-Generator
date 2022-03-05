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

// idea, make for loop that iterates from 8 to 128 and then turn the array numbers into string

var options = []; // creates empty array

// var a1 = 0; // lowercase confirm
// var a2 = 0; // uppercase confirm
// var a3 = 0; // numeric confirm
// var a4 = 0; // special confirm

var ok = { // decided to try out making an object since it's in the course material
  lowercase: 0,
  uppercase: 0,
  numeric: 0,
  special: 0,
};

var b1 = "byouldwvzcieahtsnqgxjkrmfp"; // lowercase string
var b1 = b1.split(""); // splits each character into an array, source recommends not using this method for unicode characters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

var b2 = "byouldwvzcieahtsnqgxjkrmfp"; // lowercase string
var b2 = b2.toUpperCase(); // uppercase string, applying method to an array doesn't work for some reason
var b2 = b2.split(""); // splits each character into an array

var b3 = [1,2,3,4,5,6,7,8,9,0]; // numeric array

var b4 = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // special string, source: https://owasp.org/www-community/password-special-characters
var b4 = b4.split(""); // splits each charcter into an array

for (var i = 8; i < 129; i++) {
    // options = options + i; this is wrong because it somehow created a 277 length array when i = 0
    options.push(i); // this is right, creates a 120 length array
}

//var index = Math.floor(Math.random() * userChoice.length);

var capture = [];

function generatePassword() {
  var userChoice = Number(prompt("How many characters do you want your password to have?"));
  // found solution to the problem where prompt turns a number into a string from https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt 
  
  // console.log(userChoice) // used to confirm local variable is holding number picked

  if (!options.includes(userChoice)) { 
    alert("Pick between 8 to 128 characters not " + userChoice)
    generatePassword();
    return;
  }

  if (confirm("Do you want lowercase characters in your password?")) {
    // a1 = 1;
    ok.lowercase++;
  }

  if (confirm("Do you want uppercase characters in your password?")) {
    // a2 = 1;
    ok.uppercase++;
  }

  if (confirm("Do you want numeric characters in your password?")) {
    // a3 = 1;
    ok.numeric++;
  }

  if (confirm("Do you want special characters in your password?")) {
    // a4 = 1;
    ok.special++;
  }

  if (ok.lowercase === 0 && ok.uppercase === 0 && ok.numeric === 0 && ok.special === 0) { // forgot to change variables here from a1-a4 to ok
    alert("You chose no characters for your password.")
    generatePassword();
    return;
  }

  if (ok.lowercase === 0 && ok.uppercase === 0 && ok.numeric === 1 && ok.special === 0) {
    
    for (var i = 0; i < userChoice; i++) {

      var test = Math.floor(Math.random() * b3.length);
      capture.push(b3[test]);
      // console.log(test) // checks that it works
      // console.log(capture) // checks that it works
    }
    
    
  }

  capture = capture.join("") // joins the array elements and turns it into a string, the opposite of split. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/joinhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return capture;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// first error found in browser: 
// Uncaught ReferenceError: generatePassword is not defined
//    at HTMLButtonElement.writePassword (script.js:6:18)
// solution: it seems the solution was to call the function

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { // function
  var password = generatePassword(); { // function expression stored in a variable
  
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  };
}

// idea, make for loop that iterates from 8 to 128 and then turn the array numbers into string

// var a1 = 0; // lowercase confirm
// var a2 = 0; // uppercase confirm
// var a3 = 0; // numeric confirm
// var a4 = 0; // special confirm

// var ok = { // decided to try out making an object since it's in the course material
//   lowercase: 0,
//   uppercase: 0,
//   numeric: 0,
//   special: 0,
// };
// commented out for debugging since I noticed I was shadowing

var b1 = "byouldwvzcieahtsnqgxjkrmfp"; // lowercase string
var b1 = b1.split(""); // splits each character into an array, source recommends not using this method for unicode characters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

var b2 = "byouldwvzcieahtsnqgxjkrmfp"; // lowercase string
var b2 = b2.toUpperCase(); // uppercase string, applying method to an array doesn't work for some reason
var b2 = b2.split(""); // splits each character into an array

var b3 = [1,2,3,4,5,6,7,8,9,0]; // numeric array

var b4 = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // special string, source: https://owasp.org/www-community/password-special-characters
var b4 = b4.split(""); // splits each charcter into an array

var options = []; // creates empty array

for (var i = 8; i < 129; i++) {
    // options = options + i; this is wrong because it somehow created a 277 length array when i = 0
    options.push(i); // this is right, creates a 121 length array containing the numbers 8 to 128
}

// var capture = []; // array for password output
// commented out for debugging since I noticed I was shadowing

function generatePassword() {
  var userChoice = Number(prompt("How many characters do you want your password to have?")); // prompt creates strings, must convert to number
  // found solution to the problem where prompt turns a number into a string from https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt 

  // console.log(userChoice) // used to confirm local variable is holding the number picked

  capture = []; // to reset if generating another password
  // console.log(capture); // used for debugging

  var ok = { // decided to try out making an object since it's in the course material
    lowercase: 0,
    uppercase: 0,
    numeric: 0,
    special: 0,
  };
  // console.log(ok); // used for debugging

  if (!options.includes(userChoice)) { 
    alert("Pick between 8 to 128 characters not " + userChoice) //occurs when you don't pick 8 to 128
    generatePassword();
    return capture; // return statement needs capture otherwise bug occurs 
                    //where this event occuring causes "undefined" when resetting to input a password correctly 
  }

  if (confirm("Select OK if you want lowercase characters in your password.")) {
    // a1 = 1;
    ok.lowercase++; // creating true or false statements with 1s and 0s
  } 

  if (confirm("Select OK if you want uppercase characters in your password.")) {
    // a2 = 1;
    ok.uppercase++; // creating true or false statements with 1s and 0s
  }

  if (confirm("Select OK if you want numeric characters in your password.")) {
    // a3 = 1;
    ok.numeric++; // creating true or false statements with 1s and 0s
  }

  if (confirm("Select OK if you want special characters in your password.")) {
    // a4 = 1;
    ok.special++; // creating true or false statements with 1s and 0s
  }

  if (ok.lowercase === 0 && ok.uppercase === 0 && ok.numeric === 0 && ok.special === 0) { // forgot to change variables here from a1-a4 to ok
    alert("You have chosen no character types to use for your password.") // occurs when no character types are chosen
    generatePassword();
    return capture; // return statement needs capture otherwise bug occurs 
                    //where this event occuring causes "undefined" when resetting to input a password correctly
  }

// one characters chosen, four combinations possible++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
  if (ok.lowercase === 0 && ok.uppercase === 0 && ok.numeric === 1 && ok.special === 0) { // if numeric only
                                                                                          // FFTF
    for (var i = 0; i < userChoice; i++) {
      var index = Math.floor(Math.random() * b3.length); // gives random rounded number to use as an index on an array
          capture.push(b3[index]); // pushes the value from B(n) array into the capture array
      //  console.log(index) // checks that it works
      //  console.log(capture) // checks that it works
    } 
  } else if (ok.lowercase === 1 && ok.uppercase === 0 && ok.numeric === 0 && ok.special === 0) { // if lowercase only
      for (var i = 0; i < userChoice; i++) {                                                     // TFFF
        var index = Math.floor(Math.random() * b1.length); // gives random rounded number to use as an index on an array
            capture.push(b1[index]); // pushes the value from b(n) array into the capture array
      }
    } else if (ok.lowercase === 0 && ok.uppercase === 1 && ok.numeric === 0 && ok.special === 0) { // if uppercase only
        for (var i = 0; i < userChoice; i++) {                                                     // FTFF
          var index = Math.floor(Math.random() * b2.length); // gives random rounded number to use as an index on an array
          capture.push(b2[index]); // pushes the value from b(n) array into the capture array
        }
      } else if (ok.lowercase === 0 && ok.uppercase === 0 && ok.numeric === 0 && ok.special === 1) { // if uppercase only
            for (var i = 0; i < userChoice; i++) {                                                   // FFFT
                var index = Math.floor(Math.random() * b4.length); // gives random rounded number to use as an index on an array
                capture.push(b4[index]); // pushes the value from b(n) array into the capture array
            }
        } // Do not use else return statements here otherwise the function stops if conditions not fulfilled
    
// two characters chosen, six combinations possible+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++        
  if (ok.lowercase === 1 && ok.uppercase === 1 && ok.numeric === 0 && ok.special === 0) { // if lCase and uCase
                                                                                          // TTFF
    for (var i = 0; i < userChoice; i++) {
      if (Math.floor(Math.random() * 2) === 0){ // Math.random * 2 gives 0 or 1
        var index = Math.floor(Math.random() * b1.length); // gives random rounded number to use as an index on an array
        capture.push(b1[index]); // pushes the value from b(n) array into the capture array
      } else {
        var index = Math.floor(Math.random() * b2.length); // gives random rounded number to use as an index on an array
        capture.push(b2[index]); // pushes the value from b(n) array into the capture array
            }
      } 
  } else if (ok.lowercase === 1 && ok.uppercase === 0 && ok.numeric === 1 && ok.special === 0) { // if lCase and num
      for (var i = 0; i < userChoice; i++) {                                                     // TFTF
        if (Math.floor(Math.random() * 2) === 0){ // Math.random * 2 gives 0 or 1
          var index = Math.floor(Math.random() * b1.length); // gives random rounded number to use as an index on an array
          capture.push(b1[index]); // pushes the value from b(n) array into the capture array
        } else {
        var index = Math.floor(Math.random() * b3.length); // gives random rounded number to use as an index on an array
        capture.push(b3[index]); // pushes the value from b(n) array into the capture array
            }
      }
  } else if (ok.lowercase === 1 && ok.uppercase === 0 && ok.numeric === 0 && ok.special === 1) { // if lCase and special
      for (var i = 0; i < userChoice; i++) {                                                     // TFFT
        if (Math.floor(Math.random() * 2) === 0){ // Math.random * 2 gives 0 or 1
          var index = Math.floor(Math.random() * b1.length);
          capture.push(b1[index]); // pushes the value from b(n) array into the capture array
        } else {
        var index = Math.floor(Math.random() * b4.length);
        capture.push(b4[index]); // pushes the value from b(n) array into the capture array
            }
      }
  } else if (ok.lowercase === 0 && ok.uppercase === 1 && ok.numeric === 1 && ok.special === 0) { // if uCase and num
      for (var i = 0; i < userChoice; i++) {                                                     // FTTF
        if (Math.floor(Math.random() * 2) === 0){ // Math.random * 2 gives 0 or 1
          var index = Math.floor(Math.random() * b2.length);
          capture.push(b2[index]);
        } else {
          var index = Math.floor(Math.random() * b3.length);
          capture.push(b3[index]);
        }
      }
  } else if (ok.lowercase === 0 && ok.uppercase === 1 && ok.numeric === 0 && ok.special === 1) { // if uCase and special
      for (var i = 0; i < userChoice; i++) {                                                     // FTFT
        if (Math.floor(Math.random() * 2) === 0){ // Math.random * 2 gives 0 or 1
          var index = Math.floor(Math.random() * b2.length);
          capture.push(b2[index]);
        } else {
          var index = Math.floor(Math.random() * b4.length);
          capture.push(b4[index]);
        }
      }
  } else if (ok.lowercase === 0 && ok.uppercase === 0 && ok.numeric === 1 && ok.special === 1) { // if num and special
        for (var i = 0; i < userChoice; i++) {                                                   // FFTT
          if (Math.floor(Math.random() * 2) === 0){ // Math.random * 2 gives 0 or 1
            var index = Math.floor(Math.random() * b3.length);
            capture.push(b3[index]);
          } else {
            var index = Math.floor(Math.random() * b4.length);
            capture.push(b4[index]);
            }
        }
  } // Do not use else return statements here otherwise the function stops if conditions not fulfilled

// three characters chosen, four combinations possible++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
if (ok.lowercase === 1 && ok.uppercase === 1 && ok.numeric === 1 && ok.special === 0) { // if lCase, uCase and num
                                                                                        // TTTF
  for (var i = 0; i < userChoice; i++) {
    if (Math.floor(Math.random() * 3) === 0){ // Math.random * 3 gives 0, 1 or 2
      var index = Math.floor(Math.random() * b1.length);
      capture.push(b1[index]);
    } else if (Math.floor(Math.random() * 3) === 1) { // Math.random * 3 gives 0, 1 or 2
      var index = Math.floor(Math.random() * b2.length);
      capture.push(b2[index]);
      } else { 
          var index = Math.floor(Math.random() * b3.length);
          capture.push(b3[index]);
        }
  } 
} else if (ok.lowercase === 1 && ok.uppercase === 1 && ok.numeric === 0 && ok.special === 1) { // if lCase, uCase and special
                                                                                               // TTFT
    for (var i = 0; i < userChoice; i++) {
      if (Math.floor(Math.random() * 3) === 0){ // Math.random * 3 gives 0, 1 or 2
        var index = Math.floor(Math.random() * b1.length);
        capture.push(b1[index]);
      } else if (Math.floor(Math.random() * 3) === 1) { // Math.random * 3 gives 0, 1 or 2
        var index = Math.floor(Math.random() * b2.length);
        capture.push(b2[index]);
        } else { 
            var index = Math.floor(Math.random() * b4.length);
            capture.push(b4[index]);
          }
    } 
  } else if (ok.lowercase === 1 && ok.uppercase === 0 && ok.numeric === 1 && ok.special === 1) { // if lCase, num and special
                                                                                                 // TFTT
      for (var i = 0; i < userChoice; i++) {
        if (Math.floor(Math.random() * 3) === 0){ // Math.random * 3 gives 0, 1 or 2
          var index = Math.floor(Math.random() * b1.length);
          capture.push(b1[index]);
        } else if (Math.floor(Math.random() * 3) === 1) { // Math.random * 3 gives 0, 1 or 2
            var index = Math.floor(Math.random() * b3.length);
            capture.push(b3[index]);
          } else { 
                  var index = Math.floor(Math.random() * b4.length);
                  capture.push(b4[index]);
                }
      } 
  } else if (ok.lowercase === 0 && ok.uppercase === 1 && ok.numeric === 1 && ok.special === 1) { // if uCase, num and special
                                                                                                 // FTTT
        for (var i = 0; i < userChoice; i++) {
            if (Math.floor(Math.random() * 3) === 0){ // Math.random * 3 gives 0, 1 or 2
              var index = Math.floor(Math.random() * b2.length);
              capture.push(b2[index]);
            } else if (Math.floor(Math.random() * 3) === 1) { // Math.random * 3 gives 0, 1 or 2
                var index = Math.floor(Math.random() * b3.length);
                capture.push(b3[index]);
            } else { 
                    var index = Math.floor(Math.random() * b4.length);
                    capture.push(b4[index]);
                }
          } 
      } // Do not use else return statements here otherwise the function stops if conditions not fulfilled

      //reminder: have to check and confirm that else if statement isn't re-rolling as it jumps to each else if statement in one loop
      //trying to store the math.random in a variable causes the result to be static for all loops e.g. all characters are 1 character type
      //trying to print inside the if conditions does not work and causes similar problems especially because of the comparison operators
      //solution: the variable was supposed to be placed inside the for loop before the if statement, else if statements weren't rerolling dice

// four characters chosen, two combinations possible++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (ok.lowercase === 1 && ok.uppercase === 1 && ok.numeric === 1 && ok.special === 1) { // if all is true
                                                                                            // TTTT
        for (var i = 0; i < userChoice; i++) {
          var dice = Math.floor(Math.random() * 4); // was used to check whether or not the roll is reset during any if statements
            // if (Math.floor(Math.random() * 4) === 0){ // Math.random * 4 gives 0, 1, 2 or 3
              if (dice === 0){ // Math.random * 4 gives 0, 1, 2 or 3
                // console.log(dice + " lowercase"); // was used to check whether or not the roll is reset during any if statements
                var index = Math.floor(Math.random() * b1.length);
                capture.push(b1[index]);
                // } else if (Math.floor(Math.random() * 4) === 1) { // Math.random * 4 gives 0, 1, 2 or 3
              } else if (dice === 1) { // Math.random * 4 gives 0, 1, 2 or 3
                // console.log(dice + " uppercase"); // was used to check whether or not the roll is reset during any if statements
                var index = Math.floor(Math.random() * b2.length);
                capture.push(b2[index]);
                  // } else if (Math.floor(Math.random() * 4) === 2) { // Math.random * 4 gives 0, 1, 2 or 3
              } else if (dice === 2) { // Math.random * 4 gives 0, 1, 2 or 3
                  // console.log(dice + " number"); // was used to check whether or not the roll is reset during any if statements
                  var index = Math.floor(Math.random() * b3.length);
                  capture.push(b3[index]);
                } else {
                    // console.log(dice + " special"); // was used to check whether or not the roll is reset during any if statements
                    var index = Math.floor(Math.random() * b4.length);
                    capture.push(b4[index]);
                  }
          } 
      } // Do not use else return statements here otherwise the function stops if conditions not fulfilled

// This was no longer needed since I the ok variable was changed from global to local+++++++++++++++++++++++
  // if (ok.lowercase !== 0) { // to reset variables
  //   ok.lowercase--;
  // }
  
  // if (ok.uppercase !== 0) { // to reset variables
  //   ok.uppercase--;
  // }

  // if (ok.numeric !== 0) { // to reset variables
  //   ok.numeric--;
  // }

  // if (ok.special !== 0) { // to reset variables
  //   ok.special--;
  // }

  // console.log(ok); // used for debugging
  // console.log(capture); // used for debugging
  capture = capture.join("") // joins the array elements and turns it into a string, the opposite of split. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/joinhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  // console.log(capture); // used for debugging
  return capture;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// first error found in browser: 
// Uncaught ReferenceError: generatePassword is not defined
//    at HTMLButtonElement.writePassword (script.js:6:18)
// solution: it seems the solution was to call the function

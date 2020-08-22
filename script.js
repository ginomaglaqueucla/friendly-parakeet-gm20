// Assignment code here

// global variables
// variable declaration for password length


// prompt user for Password Criteria
var generatePassword = function() {
  // Welcome user and prompt with Password Criteria
  window.alert("Welcome to Password Generator!\nPassword Criteria:\n1.) 8 character minimum 127 character maximum\n2.) MUST include at least one of the following character types:\nlowercase, uppercase, numeric, and/or special characters");
  
  // Prompt/ask user for character count and check if valid

  passLength();

  // Prompt/ask user for character types desired and check if valid
  // passCharType();

};

// function prompts user for charcater count and checks if valid
var passLength = function(){
  // pass or fail flag
  var valid = false;

  // while loop to prompt user for password length until validation passes
  while (!valid) {
    // prompt
    passwordCrit.charCount = window.prompt("Choose password length:");
  

    // check validation
    if (passwordCrit.charCount < 8 || passwordCrit.charCount > 127) {
      window.alert("INVALID input, please input a number between 8 - 127")
      valid = false;
    } else 
      valid = true;
  }
}

var passCharType = function(){
  // pass or fail flag
  var valid = false;
  var validCounter = 0;
  // user selection;
  var userSelection;

  // while loop to prompt user character type selection until validation passes
  while(!valid) {
    // for loop to cycle thru charType object
    for (var i=0; i <= passwordCrit.charType.length - 1; i++ ){
      // prompt
      userSelection = window.confirm(passwordCrit.charType[i].message)

      // assign value and check if valid
      if (i === 0){
        passwordCrit.charType.lowercase = userSelection;
      } else if (i === 1){
          passwordCrit.charType.uppercase = userSelection;
      } else if (i === 2) {
          passwordCrit.charType.numeric = userSelection;
      } else if (i === 3) {
          passwordCrit.charType.special = userSelection;
      }
      // check if at least one selection was made algorithm
      if (!userSelection) {
        validCounter++;
        if (validCounter === passwordCrit.charType.length){
          valid = false;
        }
      } else {
        valid = true;
      }
    }
    // alert if doesn't pass validation
    if (!valid) {
      window.alert("INVALID! You must select at least one of the character type options");
    }
  }
}

// object declaration, defaults to unvalid options
var passwordCrit = {
  charCount: 1,
  charType: [ 
            {lowercase: false,
             message: "Would you like to include lowercase characters in your password?"
            },
            {
             uppercase: false,
             message: "Would you like to include uppercase characters in your password?"
            },
            {
             numeric: false,
             message: "Would you like to include numeric characters in your password?"
            },
            {
             special: false,
             message: "Would you like to include special characters in your password?"
            }
          ]              
};

// var charTypePrompts = [
//     "Would you like to include lowercase characters in your password?",
//     "Would you like to include uppercase characters in your password?",
//     "Would you like to include numeric characters in your password?",
//     "Would you like to include special characters in your password?"
// ];
generatePassword();

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

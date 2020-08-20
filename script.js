// Assignment code here

// global variables
var passwordLength;

// prompt user for Password Criteria
var passCrit = function() {
  // Welcome user and prompt with Password Criteria
  window.alert("Welcome to Password Generator!\nPassword Criteria:\n1.) 8 character minimum 127 character maximum\n2.) MUST include at least one of the following character types:\nlowercase, uppercase, numeric, and/or special characters");

  // Prompt/ask user for character count and check if valid
  passLength();
};

// function prompts user for charcater count and checks if valid
var passLength = function(){
  // pass or fail flag
  var valid = false;

  // while loop to prompt user for password length until validation passes
  while (!valid) {
    // prompt
    passwordLength = window.prompt("Choose password length:");

    // check validation
    if (passwordLength < 8 || passwordLength > 127) {
      window.alert("INVALID input, please input a number between 8 - 127")
      valid = false;
    } else 
      valid = true;
  }

}
passCrit();

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

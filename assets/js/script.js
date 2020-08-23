// Assignment code here

var generatePassword = function() {
  // Welcome user and prompt with Password Criteria
  window.alert("Welcome to Password Generator!\nPassword Criteria:\n1.) 8 character minimum 127 character maximum\n2.) MUST include at least one of the following character types:\nlowercase, uppercase, numeric, and/or special characters");
  
  // Prompt/ask user for character count and check if valid
  passLength();

  // Prompt/ask user for character types desired and check if valid
  passCharType();

  // calls randomChar function to return random char and assembles the
  // password according to user specifics
  var password = assemblePass();

  // return final generated password
  return password;
};

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
        passwordCrit.charType[i].lowercase = userSelection;
      } else if (i === 1){
          passwordCrit.charType[i].uppercase = userSelection;
      } else if (i === 2) {
          passwordCrit.charType[i].numeric = userSelection;
      } else if (i === 3) {
          passwordCrit.charType[i].special = userSelection;
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

var assemblePass = function(){
  // index of where the character will be placed
  var placement;
  // string password
  var password = "";
  // Array of characters declaration
  var arrayOfChar = [];

  // loop, adding random char to array for the user desired length
  for (var i = 0; i <= passwordCrit.charCount - 1; i++ ) {
      arrayOfChar[i] = randomChar();
  }
  // converted list of characters into string
  password = arrayOfChar.join("");
  return password;
};

var randomChar = function() {
  // random selector for each type
  var ranLC = Math.floor(Math.random() * 26);
  var ranUC = Math.floor(Math.random() * 26);
  var ranNumeric = Math.floor(Math.random() * 9);
  var ranSpecial = Math.floor(Math.random() * 31);

  // array declaration
  var randomCharArray = [];
  var i = 0;

  // following sequence adds random char to array depending on if user selected that option
  if(passwordCrit.charType[0].lowercase) {
    randomCharArray[i] = passwordCrit.charType[0].lcArray.charAt(ranLC);
    i++;
  }
  if (passwordCrit.charType[1].uppercase) {
    randomCharArray[i] = passwordCrit.charType[1].upArray.charAt(ranUC);
    i++;
  }
  if (passwordCrit.charType[2].numeric) {
    randomCharArray[i] = passwordCrit.charType[2].numArray.charAt(ranNumeric);
    i++
  }
  if (passwordCrit.charType[3].special) {
    randomCharArray[i] = passwordCrit.charType[3].specialArray.charAt(ranSpecial);
    i++
  }

  // select randomly from array
  var finalSelector = Math.floor(Math.random() * randomCharArray.length - 1) + 1;

  // return single random character
  return randomCharArray[finalSelector];
};

// object declaration
var passwordCrit = {
  charCount: 1,
  charType: [ 
            {lowercase: false,
             message: "Would you like to include lowercase characters in your password?",
             lcArray: "abcdefghijklmnopqrstuvwxyz"
            },
            {
             uppercase: false,
             message: "Would you like to include uppercase characters in your password?",
             upArray: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            },
            {
             numeric: false,
             message: "Would you like to include numeric characters in your password?",
             numArray: "0123456789"
            },
            {
             special: false,
             message: "Would you like to include special characters in your password?",
             specialArray: "!”#$%&’()*+,-./:;<=>?@[\\]^`{|}~"
            }]      
};

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

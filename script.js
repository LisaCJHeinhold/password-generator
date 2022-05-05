// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Assignment code here
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numChar = "1234567890";
var specialChar = "!@#$%^&*+=/?><~";
var passLength;
var chkUpper;
var chkSpecial;
var chkNum;

//determine password length
var chooseLength = function() {
  passLength = window.prompt('How long would you like your password to be? Please choose a value between 8 and 128.');
  if (passLength === "" || passLength === null) {
    window.alert('Please enter a number between 8-128.');
    return chooseLength();
  } else if (passLength < 8) {
    window.alert('Please enter a number between 8-128.');
    return chooseLength();
  } else if (passLength > 128) {
    window.alert('Please enter a number between 8-128.');
    return chooseLength();
  } else if (isNaN(passLength)) {
    window.alert('Please efhgcxdigfxcjhfween 8-128.');
    return chooseLength();
  } else {
    window.alert('Your password will be ' + passLength + ' characters long. You will now be asked if you want to include Uppercase Letters, Numbers, and Special Characters. If you respond no to all of these you will generate a password with only lowercase letters.');
  }
};

//ask if they want uppercase
var chooseUpper = function() {
  chkUpper = window.confirm('Would you like to use Uppercase letters in your password? If YES select OK.');
};

//ask if they want numbers
var chooseNum = function() {
  chkNum = window.confirm('Would you like to use Numbers in your password? If YES select OK.');
};

//ask if they want special characters
var chooseSpecial = function() {
  chkSpecial = window.confirm('Would you like to use Special Characters in your password? If YES select OK.');
};

//define generate password and call function
var generatePassword = function() {
  chooseLength();
  chooseUpper();
  chooseNum();
  chooseSpecial();
  //define characters and password
  var characters = lowerChar;
  var password = "";
  //check to see what they want in their password
  if (chkUpper && chkNum && chkSpecial) {
    characters += upperChar + numChar + specialChar;
  } else if (chkUpper && chkNum) {
    characters += upperChar + numChar;
  } else if (chkUpper && chkSpecial) {
    characters += upperChar + specialChar;
  } else if (chkNum && chkSpecial) {
    characters += numChar + specialChar;
  } else if (chkUpper) {
    characters += upperChar;
  } else if (chkNum) {
    characters += numChar;
  } else if (chkSpecial) {
    characters += specialChar;
  } else {
    characters === characters;
  }
//write password generator loop
  for(var i = 0; i < passLength; i++) {
    password += characters.charAt(Math.floor(Math.random()*characters.length + 1))
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

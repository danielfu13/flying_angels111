var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["&", "%", "!", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  

var passwordLength = "";
var upperCase;
var lowerCase;
var numbers;
var symbols;

function genPassword() {
  var passwordLength = (prompt("How many characters would you like your password to be?"));
      
  while (passwordLength <= 8 || passwordLength >= 128) {
    window.alert("Password length must be 8-128 characters. Please try again.");
    var passwordLength = (prompt("How many characters would you like your password to be?"));
    }
     
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  var numbers = window.confirm("Would you like to use numbers?");
  var symbols = window.confirm("Would you like to use special characters?");
      
  while(upperCase === false && lowerCase === false && numbers === false && symbols === false) {
    window.alert("You must choose at least one character type");
    var upperCase = window.confirm("Would you like to use uppercase letters?");
    var lowerCase = window.confirm("Would you like to use lowercase letters?");
    var numbers = window.confirm("Would you like to use numbers?");
    var symbols = window.confirm("Would you like to use special characters?");
  } 

    var password = []
    
  if (upperCase) {
    password = password.concat(upper)
  }

  if (lowerCase) {
    password = password.concat(lower)
  } 

  if (numbers) {
    password = password.concat(number)
  }

  if (symbols) {
    password = password.concat(special)
  }

    var createPassword = ""
      
    for (var i = 0; i < passwordLength; i++) {
      createPassword = createPassword + password[Math.floor(Math.random() * password.length)];
    }
    return createPassword;
}

function newPassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

document.querySelector("#generate").addEventListener("click", newPassword);
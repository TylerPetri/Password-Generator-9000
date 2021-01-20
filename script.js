// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charsLower = "abcdefghijklmnopqrstuvwxyz"
var charsUpper = charsLower.toUpperCase()
var charsNumbers = "012345679"
var charsSpecial = "!@#$%^&*()_+[]~"

function generatePassword () {
  
  var userLength = prompt("Length from 8-128")
 
if (userLength > 7 && userLength < 129) {
  
    userLower = confirm("Would you like to include lowercase?")
    userUpper = confirm("Would you like to include uppercase?")
    userNumbers = confirm("Would you like to include numbers?")
    userSpecial = confirm("Would you like to include special characters?")

    if(!userLower && !userUpper && !userNumbers && !userSpecial) {
     return `User of the dark arts I see`
    }

  }  else {
    return "virus activated"
  }

    var charSet =( this.userLower ? charsLower : '' )
    +( this.userUpper ? charsUpper : '' )
    +( this.userNums  ? charsNumbers : '' )
    +( this.userSpecial ? charsSpecial : '' )

    var password1 = ""

    for (var i=0; i<userLength; i++) {
      var charPick = Math.floor(Math.random()*charSet.length)
      password1 += charSet[charPick]}
    
      return password1

}

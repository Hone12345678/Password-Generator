// Assignment code here


// Get user character lenth number


function gatherUserInput(){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "abcdefghijklmnopqrstuvwxyz"
  upperCase = upperCase.toUpperCase()
  var specChar = "!@#$%"
  var numChar = "1234567890"

  var caseCharCombined = ""


  var passwordLength = window.prompt(" Please select the disired lenght of your password (must be between 8 and 128 characters)");
    if (passwordLength >= 8 && passwordLength <= 128){
      alert("great")
    }else{
      alert("worng!")
      gatherUserInput()
    }

    // if user a value that meets the desired lenth
    
    // prompting the user for their requirments for the password
    var userLowerCase = window.confirm("Would you like to allow lowercase characters?");
    if (userLowerCase) {
    window.alert("lowercase WILL be included")
    caseCharCombined = caseCharCombined + lowerCase
    }

    var userUpperCase = window.confirm("Would you like to allow uppercase characters?");
    if (userUpperCase ) {
    window.alert("uppercase WILL be included")
    caseCharCombined = caseCharCombined + upperCase
    }

    var userSpecChar = window.confirm("Would you like to allow special characters?");
    if (userSpecChar) {
      winodw.alert("special characters WILL be included")
    caseCharCombined = caseCharCombined + specChar
    }

    var userNumChar = window.confirm ("Would you like to allow numeric characters?");
      if (userNumChar) {
        winodw.alert("numeric characters WILL be included")
      caseCharCombined = caseCharCombined + numChar
      
    }

    
    generatePassword(caseCharCombined, passwordLength) 
  

  }

function generatePassword(caseCharCombined, passwordLength) { 
  gatherUserInput();
  var endPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    var indexNum = Math.floor(Math.random() * caseCharCombined.length)
  endPassword =  endPassword + caseCharCombined[indexNum] 
  
  }
  return endPassword;
}

// End prompting the user for their requirments for the password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password =  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


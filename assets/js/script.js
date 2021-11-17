
//function to collect user input to determine password characteristics
function gatherUserInput(){

  //variables to string value of potential password configuration options
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "abcdefghijklmnopqrstuvwxyz"
  upperCase = upperCase.toUpperCase()
  var specChar = "!@#$%^&*()_+"
  var numChar = "1234567890"

  var caseCharCombined = ""

  // Get user character lenth number
  var passwordLength = window.prompt(" Please select the disired lenght of your password (must be between 8 and 128 characters)");
  // if user enters a value that meets the desired lenght the function continues
    if (passwordLength >= 8 && passwordLength <= 128){
      alert("your password wil be " + passwordLength + " characters long")
   // if user enters a value that does not meet the desired length the function will notify the user and restart the getUserInput function until the conditions are met.
    }else{
      alert("whoa whoa whoa, that's too many characters!\nplease enter a length value between 8 and 128.")
      return gatherUserInput()
    }
    
    // prompting the user for their requirments for the password

    // option to allow for Lowercase 
    var userLowerCase = window.confirm("Would you like to allow lowercase characters?");
      if (userLowerCase) {
    window.alert("lowercase WILL be included")
    caseCharCombined = caseCharCombined + lowerCase
      }else{
    window.alert("lowercase WILL Not ot be included")
    }

    // option to allow for Uppercase
    var userUpperCase = window.confirm("Would you like to allow uppercase characters?");
      if (userUpperCase ) {
    window.alert("uppercase WILL be included")
    caseCharCombined = caseCharCombined + upperCase
      }else{
    window.alert("uppercase WILL Not ot be included")
    }

    // option to allow for Specail Characters
    var userSpecChar = window.confirm("Would you like to allow special characters?");
      if (userSpecChar) {
    window.alert("special characters WILL be included")
    caseCharCombined = caseCharCombined + specChar
      }else{
    window.alert("special characters WILL Not ot be included")
    }

    // option to allow for Numeric characters
    var userNumChar = window.confirm ("Would you like to allow numeric characters?");
      if (userNumChar) {
    window.alert("numeric characters WILL be included")
    caseCharCombined = caseCharCombined + numChar 
      }else{
    window.alert("numeric characters WILL Not ot be included")
    }

    return generatePassword(caseCharCombined, passwordLength); 
    

  }


// End function to collect user input to determine password characteristics


// generatePasword takes two variables one with a concatinated string of the password options from the user and the desired password length producing a password made of desired characters and the desired length
function generatePassword(caseCharCombined, passwordLength) { 
  var endPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    var indexNum = Math.floor(Math.random() * caseCharCombined.length)
  endPassword =  endPassword + caseCharCombined[indexNum] 
  console.log(endPassword)
  }
  return endPassword;
}
// End generate password function


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = gatherUserInput(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//END
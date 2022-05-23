// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var mystr = "";
  var characterLength = prompt("What is the length of your password?")
  if (characterLength < 8 || characterLength > 128) {
    alert("Password lenth should be between 8 - 128 characters")
  }
  var includeUpperCase = confirm("Would you want to include Upper case?")
  var includeLowerCase = confirm("Would you want to include Lower case?")
  var specialCharacters= confirm("Would you want to include special characters?")
  var number= confirm("Would you want to include any numbers?")
for(i=0; i<characterLength; i++) {


   
  console.log(includeUpperCase)
  if (includeUpperCase && mystr.length<characterLength) {
    var upperCaseAlphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    mystr= mystr + upperCaseAlphabet.charAt(Math.floor(Math.random() * upperCaseAlphabet.length));
  }
  

  
  if (includeLowerCase && mystr.length<characterLength) {
    var lowerCaseAlphabet= "abcdefghijklmnopqrstuvwxyz"
    mystr = mystr + lowerCaseAlphabet.charAt(Math.floor(Math.random() * lowerCaseAlphabet.length));
    }
    

  
  if (specialCharacters && mystr.length<characterLength){
    var spCharacters = "~!@#$%^&*()_-+={[}]|;'<,>.?/"
    mystr = mystr + spCharacters.charAt(Math.floor(Math.random() * spCharacters.length));
  }

  
  if (number && mystr.length<characterLength){
    mystr = mystr + Math.floor(Math.random() * 10);
  } }
  return mystr
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

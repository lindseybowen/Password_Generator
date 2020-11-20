// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwdLength = +(prompt("How long do you want your password to be?"));
var specialChar = confirm("Do you want special characters? i.e. ! ? etc");
var yesNumbers = confirm("Do you want numbers?")

var numbers = [1,2,3,4,5,6,7,8,9,10];
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('')
var special = "!@#$%^&&*!@#$)(".split('');

var selectedCharacters = [];
var finalCharacters=[];

function generatePassword(){
  if(specialChar){
    selectedCharacters = selectedCharacters.concat(special);
  }
  if(yesNumbers){
    selectedCharacters = selectedCharacters.concat(numbers);
  }

  var array = [1,2,3,4,5,6,7]

  for(i=(array.length-1);i>0;i--){
    array[i]=array[i]++
  }

  //write out rest of if statements
  for(i=0;i<=pwdLength;i++){
    finalCharacters.push(selectedCharacters[Math.floor(Math.random() * numbers.length)])
  }
  return finalCharacters.join('');
};



// numbers

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


document.querySelector("#test").innerHTML = "<h3>password generated</h3>"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("click",function(event){

})


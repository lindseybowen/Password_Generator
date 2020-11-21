// Assignment code 
var generateBtn = document.querySelector("#generate");

var pwdLength = +(prompt("How long do you want your password to be?"));
var specialChar = confirm("Do you want special characters? i.e. ! ? etc");
var yesNumbers = confirm("Do you want numbers?")
var yesupperCase = confirm("Do you want upper case letters?")
var yeslowerCase = confirm("Do you want lower case letters?")

var Numbers = [1,2,3,4,5,6,7,8,9,10];
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('')
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var special = "!@#$%^&&*!@#$)(".split('');


var selectedCharacters = [];
var finalCharacters= [];
var selectedNumbers = [];
var finalNumbers = [];
var selectedupperCase= [];
var finalupperCase= [];
var selectedlowerCase =[];
var finallowerCase =[];

function generatePassword(){
  if(specialChar){
    selectedCharacters = selectedCharacters.concat(special);
  }
  for(i=0;i<=pwdLength;i++){
    finalCharacters.push(selectedCharacters[Math.floor(Math.random() * numbers.length)])
  }
  return finalCharacters.join('');

  if (yesNumbers){
    selectedNumbers = selectedNumbers.concat(Numbers);
  }
  var array = [1,2,3,4,5,6,7,8,9]

for(i=(array.length-1);i>0;i--){
    array[i]=array[i]++
  }
  for(i=0;i<=pwdLength;i++){
    finalNumbers.push(selectedNumbers[Math.floor(Math.random() * numbers.length)])
  }
  return finalNumbers.join('');

  if(yesupperCase){
    selectedupperCase = selectedupperCase.concat(upperCase)
  }
  for(i=0;i<=pwdLength;i++){
    finalupperCase.push(selectedupperCase[Math.floor(Math.random() * numbers.length)])
  }
  return finalupperCase.join('');
   if (yeslowerCase){
     selectedlowerCase = selectedlowerCase.concat(lowerCase)
   }
   for(i=0;i<=pwdLength;i++){
    finallowerCase.push(selectedlowerCase[Math.floor(Math.random() * numbers.length)])
  }
  return finallowerCase.join('');
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


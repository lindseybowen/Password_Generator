// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwdLength = +(prompt("How long do you want your password to be?"));
var Numbers = confirm("Do you want numbers?");
var lowerCase = confirm("Do you want lower case letters?");
var upperCase = confirm("Do you want upper case letters?");
var specialChar = confirm("Do you want special characters? i.e. ! ? etc");

var numbers = [1,2,3,4,5,6,7,8,9];
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var special = "!@#$%^&&*!@#$)(".split('');

var selectednumbers = [];
var finalnumbers = [];
var selectedlowerCase = [];
var finallowerCase = [];
var selectedupperCase =[];
var finalupperCase =[];
var selectedCharacters = [];
var finalCharacters=[];

function generatePassword(){
  if(upperCase){
    selectedupperCase = selectedupperCase.concat(upperCase);
    return finalupperCase.join('');
  }
  if(specialChar){
    selectedCharacters = selectedCharacters.concat(special);
  
    return finalCharacters.join('');
  }
  if(numbers){
    selectedCharacters = selectedCharacters.concat(numbers);
    return finalnumbers.join('');
  }
  if(lowerCase){
    selectedlowerCase = selectedlowerCase.concat(lowerCase);
    return selectedlowerCase.join('');
  }
  var array = [1,2,3,4,5,6,7,8,9]

  for(i=(array.length-1);i>0;i--){
    array[i]=array[i]++
  }
  for(i=0;i<=pwdLength;i++){
    finalCharacters.push(selectedCharacters[Math.floor(Math.random() * numbers.length)])
};

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


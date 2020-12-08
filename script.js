// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabet 
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var choices;
// converts letters to uppercase found at stack overflow website https://stackoverflow.com/questions/29719329/convert-array-into-upper-case
var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password and if statments to prompt the user on how many characters they want. If they cancel they will be prompted that they need a value. Once value input I put a else block to continue on with the rest of the criteria. 
function generatePassword() {

  enter = parseInt(prompt("How many characters would you like your password? Please choose between 8 and 128"));

  if (!enter) {
      alert("You must input a value");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      confirmNumber = confirm("Do you want numbers?");
      confirmCharacter = confirm("Do you want special characters?");
      confirmUppercase = confirm("Do you want Uppercase letters?");
      confirmLowercase = confirm("Do you want Lowercase letters?");
  };

  //Line 49 is to make sure the user picks some criteria to be able to creat a password at the end. 
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = character.concat(number, alpha, alpha2);
  }
 
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
  }
  //Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
  }
 //Else if for 1 positive option 
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = alpha;
  }
  //upper case conversion 
  else if (confirmUppercase) {
      choices = space.concat(alpha2);
  };

  
  var password = [];

  // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  // This joins the password array and converts it to a string 
  
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
// puts passowrd value into textbox 
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});

// Found this demonstrated in a youtube video:  https://youtu.be/9sT03jEwcaw
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}






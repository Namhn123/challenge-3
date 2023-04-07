// Assignment Code
//initializing an array for each type of character
var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numCharacters = "0123456789".split("");
var specCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var checkAvailable = []; //array for placements

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatedPass = "";
  //asks for length and doesn't proceed if the user input isn't a number within range
  var passLength = Number(prompt("How many characters would you like your password to have? (8-128)"));
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    return("Invalid password length. Please try again.");
  }

  var allCharacters = []; //total character array that will change depending on user choice
  
  //placements within the length of the password, -1 as default
  var lowerCheck = -1;
  var upperCheck = -1;
  var numCheck = -1;
  var specCheck = -1;

  //for each confirm, if true adds the type of character into total array and sets the placement of the checks
  var passLower = confirm("Would you like include lowercase letters in your password?");
  if (passLower) {
    allCharacters = allCharacters.concat(lowerLetters);
    lowerCheck = randomCheck(passLength);
  }

  var passUpper = confirm("Would you like include uppercase letters in your password?");
  if (passUpper) {
    allCharacters = allCharacters.concat(upperLetters);
    upperCheck = randomCheck(passLength);

  }

  var passNumber = confirm("Would you like include numbers in your password?");
  if (passNumber) {
    allCharacters = allCharacters.concat(numCharacters);
    numCheck = randomCheck(passLength);
  }

  var passSpecial = confirm("Would you like include special characters in your password?");
  if (passSpecial) {
    allCharacters = allCharacters.concat(specCharacters);
    specCheck = randomCheck(passLength);
  }

  //doesn't proceed if none of the options were picked
  if (!passLower && !passUpper && !passNumber && !passSpecial) {
    return("Please select at least one character option.");
  }

  //randomizes each character of the password
  for (var i=0; i< passLength; i++)
  {
    var tempArray = allCharacters; //as default the total character array will be used for randomizing
    
    //if i matches the placement, change the array being used to ensure that one of each accepted type is used at least once
    //since default is -1, if option isn't picked, it will never be true
    if (i === lowerCheck) {
      tempArray = lowerLetters;
    } else if (i === upperCheck) {
      tempArray = upperLetters;
    } else if (i === numCheck) {
      tempArray = numCharacters;
    } else if (i === specCheck) {
      tempArray = specCharacters;
    }
    generatedPass += tempArray[Math.floor(Math.random() * tempArray.length)]; //randomizes a number from 0 to the array length and uses that for the array index for each character
  }
  checkAvailable = [];//empties the check array if the user decides to make another password
  return (generatedPass);//returns the fully generated password
}

//gives a random placement of the password length and checks if there's any overlapping placements. if so randomize again until new. pushes new number into array
function randomCheck(length) {
  check = Math.floor(Math.random() * length); //randomizes number from 0 to password length

  //checks if the given placement has already been taken, if not then skips the while loop, otherwise keep randomizing until new placement
  while (checkAvailable.includes(check)) {
    check = Math.floor(Math.random() * length);
  }
  checkAvailable.push(check); //adds the new placement into array to check for future overlaps
  return(check);//returns placement
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

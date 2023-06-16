// Assignment Code
// adding the array of numbers
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// adding the array of special characters
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
// adding the array of lower cased characters
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
// adding the array of upper cased characters
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

// options for the generated password
function getPasswordOptions() {
    var length = parseInt(prompt("How many characters would you like to have in your password?"));
    console.log(length)

    var specialCharacters = parseInt(confirm("Do you want your password to have special characters?"));

    var lowerCase = parseInt(confirm("Click to comfirm having lower case letters in your password"));

    var upperCase = parseInt(confirm("Click to confirm having upper case letters in your password"));

    var numbers = parseInt(confirm("Click to confirm having numbers in your password"));

    var passwordOptions = {
        length: length,
        specialCharacters: specialCharacters,
        lowerCase: lowerCasedCharacters,
        upperCase: upperCasedCharacters,
        numbers: numericCharacters,
    };
    return passwordOptions;
}

function generatePassword() {
    var options = getPasswordOptions();
    console.log(options);

    var selectedCharacters = [];

    if(options.specialCharacters) {
        selectedCharacters = selectedCharacters.concat(specialCharacters);
  };

    if(options.lowerCase) {
      selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  };

    if(options.upperCase) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  };

    if(options.numbers) {
  selectedCharacters = selectedCharacters.concat(numericCharacters);
  };

  console.log(selectedCharacters);

  var result = []

  for(let i = 0; i < options.length; i++) {
    var randomIndex = Math.floor(Math.random() + options.length);
    console.log(randomIndex);
    var possibleCharacter = selectedCharacters[randomIndex];
    result.push(possibleCharacter);
  }

  return result.join("");
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = ("");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

function getPasswordOptions() {
    var length = parseInt(prompt("How many characters would you like to have in your password?"));
    console.log(length)

    var specialCharacters = parseInt(confirm("Do you want your password to have special characters?"));

    var lowerCase = parseInt(confirm("Click to comfirm having lower case letters in your password"));

    var upperCase = parseInt(confirm("Click to confirm having upper case letters in your password"));

    var numbers = parseInt(confirm("Click to confirm having numbers letters in your password"));

    var passwordOptions = {
        length: length,
        specialCharacters: specialCharacters,
        lowerCase: lowerCasedCharacters,
        upperCase: upperCasedCharacters,
        numbers: numericCharacters,
    }
}

function generatePassword() {
    var options = getPasswordOptions();
    console.log(options);
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
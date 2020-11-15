// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var passwordLength = prompt("Enter password length (8 to 128 characters)");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("not within the approved range");
        return;
    } else if (isNaN(passwordLength)) {
        alert("Not a valid entry, please try again.");
        return;
    }

    console.log(passwordLength);

    var passwordLowercase = confirm("Include lowercase characters");
    console.log(passwordLowercase);
    var passwordUppercase = confirm("Include uppercase characters");
    console.log(passwordUppercase);
    var passwordNumeric = confirm("Include numeric characters");
    console.log(passwordNumeric);
    var passwordSpecial = confirm("Include special characters");
    console.log(passwordSpecial);

    if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) {
        alert("No character types were selected, please try again.");
        return;
    }

    var passwordSelections = {
        length: passwordLength,
        lowercase: passwordLowercase,
        uppercase: passwordUppercase,
        numeric: passwordNumeric,
        special: passwordSpecial
    };

    var passwordCharacters = "A length of " + passwordLength + " characters\n";
    var passwordString;

    if (passwordSelections.lowercase) {
        passwordCharacters += "lowercase characters\n";
        passwordString += "abcdefghijklmnopqrstuvwxyz"
    }
    if (passwordSelections.uppercase) {
        passwordCharacters += "uppercase characters\n";
        passwordString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (passwordSelections.numeric) {
        passwordCharacters += "numeric characters\n";
        passwordString += "0123456789"
    }
    if (passwordSelections.special) {
        passwordCharacters += "special characters\n";
        passwordString += "!#$%&()*+,-./:;'<=>?@[\]^_{|}~";
    }


    console.log(passwordSelections);

    var verifyPassword = confirm("The password needs to include:\n" + passwordCharacters);
    console.log(verifyPassword);
    if (verifyPassword) {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        // confirm critera selected is correct //
        passwordText.value = password;
    } else {
        alert("No password will be generated, please try again.");
        return;
    }

}

function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
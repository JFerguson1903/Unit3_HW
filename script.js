// setting HTML generate element to variable
var generateBtn = document.querySelector("#generate");


function writePassword() {
    // Variable to prompt for password length
    var passwordLength = prompt("Enter password length (8 to 128 characters)");
    // if cancel is selected for password length, alert message and start over
    if (passwordLength === null) {
        alert("No password will be generated, please try again.");
        return;
        // if password length isn't within range, alert message and start over 
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Value not within the approved range");
        return;
        // if a number ins't entered, alert message and start over
    } else if (isNaN(passwordLength)) {
        alert("Not a valid entry, please try again.");
        return;
    }

    // Variables to confirm individual selections needed in password
    var passwordLowercase = confirm("Include lowercase characters");
    var passwordUppercase = confirm("Include uppercase characters");
    var passwordNumeric = confirm("Include numeric characters");
    var passwordSpecial = confirm("Include special characters");

    // if no selections are chosen after length, alert message and start over
    if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) {
        alert("No character types were selected, please try again.");
        return;
    }

    // object to store selections
    var passwordSelections = {
        length: passwordLength,
        lowercase: passwordLowercase,
        uppercase: passwordUppercase,
        numeric: passwordNumeric,
        special: passwordSpecial
    };

    // variable to create character string to display selections of user
    var passwordCharacters = "A length of " + passwordLength + " characters\n";
    // variable to send string to generatePassword function
    var passwordString = "";

    if (passwordSelections.lowercase) {
        // if lowercase is true, add selection onto verifyPassword confirm on new line
        passwordCharacters += "lowercase characters\n";
        // if lowercase is true, add string to passwordString
        passwordString += "abcdefghijklmnopqrstuvwxyz"
    }
    if (passwordSelections.uppercase) {
        // if uppercase is true, add selection onto verifyPassword confirm on new line
        passwordCharacters += "uppercase characters\n";
        // if uppercase is true, add string to passwordString
        passwordString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (passwordSelections.numeric) {
        // if numeric is true, add selection onto verifyPassword confirm on new line
        passwordCharacters += "numeric characters\n";
        // if numeric is true, add string to passwordString
        passwordString += "0123456789"
    }
    if (passwordSelections.special) {
        // if special is true, add selection onto verifyPassword confirm on new line
        passwordCharacters += "special characters\n";
        // if special is true, add string to passwordString
        passwordString += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

    // variable to confirm selections of user
    var verifyPassword = confirm("The password needs to include:\n" + passwordCharacters);
    if (verifyPassword) {
        // if selection is true, run generatePassword function
        var password = generatePassword(passwordSelections, passwordString);
        // if selection is true, set variable to password element on page
        var passwordText = document.querySelector("#password");
        // fill in password text area with password created with the generatePassword funtion
        passwordText.value = password;
    } else {
        // if selections are false, alert message and start over
        alert("No password will be generated, please try again.");
        return;
    }
}


function generatePassword(passwordSelections, passwordString) {
    var finalPassword = "";
    // loop through complete selection string until length is satisfied randomly
    for (i = 1; i <= passwordSelections.length; i++) {
        var char = Math.floor(Math.random() * passwordString.length + 1);

        finalPassword += passwordString.charAt(char)
    }
    // generated password to be fed back to password variable and be displayed
    return finalPassword;
}

// Event listener for generate button
generateBtn.addEventListener("click", writePassword);
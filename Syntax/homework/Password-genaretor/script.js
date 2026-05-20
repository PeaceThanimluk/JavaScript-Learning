
function generatePassword(lenght, includeLowercase, includeUpperCase, includeNumber){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    /*
    if(includeLowercase === true){
        allowedChars = allowedChars + lowercaseChars;
    } else{
        allowedChars = allowedChars + "";    
    }
    */

    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(lenght <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected!)`;
    }

    for(let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]; //สุ่มindexของallowedChars แล้วเอามาใส่ให้password  
    }
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUpperCase,
                                  includeSymbols,);


console.log(`Generated password ${password}`);
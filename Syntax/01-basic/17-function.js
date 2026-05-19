//Normal Function
function happyBirthday(){
    console.log("SixSeven");
}

happyBirthday();


//Argument Function

function inputName(username , age){
    let name = String(username);
    let Age = Number(age);

    console.log(`Your Name is ${name}`)
    console.log(`Your age is ${Age}`)
}

inputName("SixSeven" , 14);

//Return Function

function cal(number1, number2){
    let result = number1 + number2;
    return result;
}

let answer = cal(10, 11);
console.log(`answer is ${answer}`);

//Misc Example

function Minus(x, y){
    return x - y;
}


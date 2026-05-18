//Variables
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");

const result = document.getElementById("result");

//Main Function
function convert(){
    if(toFahrenheit.checked){
        let temp = Number(textBox.value);
        temp = ToFahrenheit(temp);
        result.textContent = temp + "°F";
    }
    else if(toCelsius.checked){
        let temp = Number(textBox.value);
        temp = ToCelsius(temp);
        result.textContent = temp + "°C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}

//Celsius to Fahrenheit
function ToFahrenheit(TempC){
    return ((TempC * 9/5) + 32);
}


//Fahrenheit to Celsius
function ToCelsius(TempF){
    return (5/9 * (TempF - 32));
}
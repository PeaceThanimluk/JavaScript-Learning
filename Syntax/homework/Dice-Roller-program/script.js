const diceResult = document.getElementById("diceResult");
const diceImage = document.getElementById("diceImage");

function rollDice(){ 
    const numOfDice = document.getElementById("numOfDice").value;
    const values = [];
    const images = [];

    for(let i = 0; i < Number(numOfDice); i++){
        const value =  Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`);

    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImage.innerHTML = images.join('');
}
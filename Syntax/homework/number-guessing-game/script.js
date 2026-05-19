const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("You must enter a number idoit!");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Are you serious right naw?");
    }
    else{
        attemps++;
        if(guess > answer){
            window.alert("Too High");
        }
        else if(guess < answer){
            window.alert("Too Low");
        }
        else if(guess === answer){
            window.alert(`Congreat! You win.your attemps is ${attemps}`);
            running = false;
        }
        else{
            window.alert("Um what da segma?")
        }
    }
}
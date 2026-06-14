const text = document.querySelector(".textContent");

const textContentChange = document.querySelector(".textContent-change");
const innerTextChange = document.querySelector(".innerText-change");
const innerHTMLChange = document.querySelector(".innerHTML-change");


const textConsole = () => {
    console.log(`textContent is ${text.textContent}`);
    console.log(`innerText is ${text.innerText}`);
    console.log(`innerHTML is ${text.innerHTML}`);
}

console.log("text display before");
textConsole();

console.log("text display after");
textContentChange.textContent = "Hello <b>p</b>";
innerTextChange.innerText = "Hello <b>p</b>"
innerHTMLChange.innerHTML = "Hello <b>p</b>"
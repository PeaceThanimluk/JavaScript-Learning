/*
Event target บอกว่า element ไหนเป็นคนก่อ event
*/
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    console.log(event.target);
})


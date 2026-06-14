//Selector เหมือนกับ CSS

const button = document.querySelector(".container button");
const headerTitle = document.querySelector(".container .Header-Title");

const title2 = document.querySelector(".container #Title");

headerTitle.textContent = "Text";
title2.textContent = "Sigma";

button.addEventListener(`click`, () => {
    headerTitle.textContent = "Kuy";
})


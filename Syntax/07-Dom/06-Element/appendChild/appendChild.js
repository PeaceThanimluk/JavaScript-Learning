/*
ใช้สำหรับ เอา element ไปใส่ใน elementอื่น
*/

const container = document.querySelector(".container");

const p = document.createElement("p");
p.textContent = "hello world";

container.appendChild(p);

// p ก็จะเข้าไปอยู่ใน div container


/*
setTimeOut เป็น function ที่ใช้สำหรับตั้งเวลา
ให้การทำงาน โดยมันจะสั่งให้โปรแกรมรอเป็นระยะเวลาที่กำหนด
(หน่วยมิลลิวินาที) เป็น Asynchronous 

setTimeOut(function , delay, param1, param2, ...)'

*/

//1.Arrow function
setTimeout(() => {
    console.log("Miguel Miguel ");
}, 3000);


//2.ประกาศแยกไว้ข้างนอก
function sayHellow() {
    console.log("Hello");
}
setTimeout(sayHellow, 2000)


//3.แบบส่ง Parameter

function greet(name, role) {
    console.log(`Hello ${name} your role is ${role}`);
}

setTimeout(greet, 1500, "Miguel", "Developer");



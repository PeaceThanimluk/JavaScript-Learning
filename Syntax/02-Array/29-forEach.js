/*
forEach คือ method ของ arrray ที่เอาไว้ใช้สำหรับ วนลูป
เพื่อนำข้อมูลในArray ออกมาใช้งานทีละตัวแบบง่ายๆ โดยที่เราไม่ต้อง
มานั่งเขียนตัวนับอย่าง i = 0; i < array.lenght; i++
*/

/*Example1*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display)

function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

/*เอาไว้ใช้ตอนต้องการคำนวณหาผลรวม */


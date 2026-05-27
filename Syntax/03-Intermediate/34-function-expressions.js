/*
Function Expression คือการเก็บFunction ไว้ในตัวแปร

ข้อแตกต่างระหว่าง function declaration กับ function express
function declaration สามารถเรียกใช้ที่บรรทัดไหนก็ได้
function Express ต้องมีการประกาศที่บรรทัดก่อนหน้าก่อนถึงจะสามารถใช้ได้

เอาไว้ใช้ตอนไหน
- callback
- event
-async code
-เก็บ function ไว้ในตัวแปร
-ส่ง function ไปในอีก function
*/

const hello = function(){
    console.log("Hello");
}

/*--------------------*/

const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function square (element){
  return Math.pow(element, 2);  
})

console.log(squares);
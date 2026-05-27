/*
filter คือ method ของ arrray ที่ใช้สำหรับคัดกรองข้อมูล
โดยมันจะวิ่งดูข้อมูลใน array ทีละตัวแล้วเลือกเก็บไว้เฉพาะตัวทีผ่านเงื่อนไข
ตัวไหนที่ไม่ผ่านก้จะถุกคัดทิ้งไป
*/

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element) {
    return element % 2 === 0;
}

/*--------------------------- */

let numberList = [2,4,6,8,3,1,9,10];
let OddFilter = numberList.filter(isOdd);

console.log(OddFilter);


function isOdd(element){
    return element % 2 !== 0;
}
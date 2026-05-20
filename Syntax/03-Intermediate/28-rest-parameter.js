/*
Rest Parameter คือ ฟีเจอร์ที่ช่วยให้ฟังก์ชันสามารถรับarguement จำนวนกี่ตัวก็ได้เข้ามาทำงาน
โดยตัวArguement นั้นจะรวมกันกลายเป็น Arrays
*/

function openFridge(...foods){
    console.log(foods);
}

openFridge("Burger", "Apple", "Orange", "Sandwish");

//ข้อควรระวัง
/*
1.Rest Parameter ต้องอยู่เป็นตัวสุดท้ายเสมอ เพราะมันทำหน้าที่เป็นตัวเก็บส่วนที่เหลือ
2.Rest Parameter ใช้ได้แค่ตัวเดียวเท่านั้น 

function myFunc(...rest, lastNode){} XXX REst ต้องอยู่ข้างหลังเสมอ

function myFunc(...rest, ...type){} xxx Rest มีได้แค่อันเดียว

*/

//***ตอนไหนที่ควรจะใช้Rest Parameters
/*
1.เมื่อไม่รู้ล่วงหน้าว่าuserจะส่งค่ามาทั้งหมดกี่ตัว เช่น ฟังชันก์หาค่าเฉลี่ย ฟังชั่นต่อข้อความ(Concatenate)
*/

//Example

function sumFunc(...Numbers){
    let result = 0;
    for(let number of Numbers){
        result += number;
    }
    return result;
}

function getAverage(...Numbers){
    let result = 0;

    for(let number of Numbers){
        result += number;
    }
    return result / Numbers.length;
}

console.log(`Sum result is ${sumFunc(10, 10, 10,)}`);
console.log(`Result is ${getAverage(5, 5, 5, 5,)}`);


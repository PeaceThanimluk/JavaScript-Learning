/*reduce() คือ method ของ array ที่ รวมค่าทุกตัวให่เหลือค่าเดียว */
/*
ใช้บ่อยกับ
- ผลรวม
- นับจำนวน
- สรุปข้อมูล

*/

const price = [5, 30, 10, 25, 15, 20];

const total = price.reduce(sum);

console.log(total);

function sum(accumulator, element){
    return accumulator + element;
}

/*accumulator คือค่าที่ reduce() ส่งเข้ามาทุกครั้งที่วนลูป */
/*
เช้่น 
รอบที่1
acc = 0;
element(current = 5)
return acc + element => 0+5 = 5

รอบที่ 2
acc = 5;
element = 30;
return accc + element = 30+5
*/

/*---------------Maximum Finder ------------------*/

let NumberList = [1, 10, 30, 15, 100];

let MaximumNumber = numberList.reduce(maximumFinder);

console.log

function maximumFinder(acc, current){
    return Math.max(acc , current);
}
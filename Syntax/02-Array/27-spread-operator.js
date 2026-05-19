/*
Spread Operator คือ การแยกarrayออกมาเพื่อไปใส่ข้อมูลเข้าไปได้
โดยจะใช่สัญลักษณ์ ...

Spread Operator ใช้ได้บ่อยกับ:

แกะ array
รวม array
copy array/object
ส่ง argument เข้า function

*/

//เช่นเวลาใช้Math.maxเพื่อหาค่าที่มากที่สุดในArray 
//แต่maxรับค่าได้แคNumber ซึ่งArraysเป็นNoN(None of Number)
// ...เลยมีหน้าที่แกะArraysออกมาให้ทีละตัว
//เช่น

let Arrays = [1,2,3,4,5];

console.log(...Arrays); //Return ออกมาเป็นnumber

//เมื่อใช้กับ math.max()

let Number = [10,20,30,40];

let MaxNum = Math.max(...Number);
console.log(`Max number is : ${MaxNum}`);


//รวมArraysด้วย Spread operator

let fruits = ["Apple", "Orange", "Banana"];
let vegetables = ["Carrot", "Celery", "Potatos"];

let food = [...fruits, ...vegetables, "eggs", "milk"];

console.log(food);
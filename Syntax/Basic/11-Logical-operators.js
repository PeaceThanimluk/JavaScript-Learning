/*
Logical Operators คือเครื่องหมายที่ใช้ในการเปรียบเทียบหรือรวมเงื่อนไขหลายๆอย่างเข้าด้วยกัน
เพื่อให้ได้ผลลัพธ์เป็นBoolean(true/false) จะมี and or not

จะเป็นตรรกศาสตร์ ใช้เงื่อนไข จริง เท็จ

*/

//1.And(&&)
let sigma = "String";
let number = 1;

console.log("test");

if(typeof(sigma) == "string" && typeof(number) == "number"){
    console.log("SixSeven");
}

//2.Or( || )
const T = true;
const F = false;


if(T || F){
    console.log("True");
} //ถ้ามีตัวใดตัวหนึ่งจะดำเนินการต่อ

//3.Not(!) เป็นการใส่เงื่อนไขตรงข้าม เช่น True ใส่Not จะกลายเป็นFalse

const Number1 = 6;
const Number2 = 7;

const Result = 67;

if(Number1 + Number2 != Result){ //ถ้าNumber1+Number2(13) ไม่เท่ากับ Result(67)
    console.log("Wrong Brain cell");
}

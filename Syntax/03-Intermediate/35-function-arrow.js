/*Arrow function เป็นรูปแบบการเขียนfunction ที่สั้นกว่า funciton ปกติ */

/*
ใช้ตอนไหน

1. CallBack Function 
2.Function สั้นๆ ภายใน Event
3.ใช้กับ Async
*/

/****************รูปแบบของ Arrow Function****** */

/*1.ไม่มีparameter */

const sayHello = () => {
    console.log("Hello");
}

sayHello();

/*2.มี parameter 1 ตัว */

const great = (name) => {
    console.log(name);
}

/*3.มีparameter หลายตัว */

const add = (a, b) => {
    return a + b;
}

/*4.Return แบบย่อ (Implicit Return) */
/*ถ้ามีแค่1คำสั่งและต้องการreturnค่า */
const add = (a, b) => a + b;

/*5.Return Object */

const createUser = () => ({
    name: "John",
    age: 20,
})

/*6.Multi-line function */

const calculate = (a, b) => {
    const result = a + b;
    return result;
}

/*
ไม่ควรใช้ Arrow Function ตอน
1.เมื่อต้องการใช้ this Arrow Function จะไม่มี this เป็นของตัวเอง
2.ใช้เป็น constructor ไม่ได้
*/

/*Example */


const Hello = (word, number) => {
    if (typeof word === "string") {
        const capital = word.charAt(0).toUpperCase + word.slice(1);
        console.log(`Hello ${capital}`);
    }
    else {
        console.log("stupid");
    }

    if (typeof number === "number") {
        const calculate = number * 2;
        console.log(`Your number when multiply with 2 : ${calculate}`);
    }
    else {
        console.log("Stupid");
    }

}

const numbersList = [1, 2, 3, 4, 5, 6];

const squares = numbersList.map((element) => Math.pow(element, 2));

console.log(squares);
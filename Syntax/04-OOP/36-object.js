/*
Object คือโครงสร้างข้อมูลที่ใช้เก็บข้อมูลเป็นคู่ key:value
เหมือนกล่องที่เก็บข้อมูลหลายๆอย่างเข้าไว้ด้วยกัน
*/

/*=====================Create Object=====================*/

const user = {
    name: "SixSeven",
    age: 18,
    isStudent: true,
}

//์Nested Object

const mainUser = {
    name: "KuyKuy",

    Child: {
        name: "HumLek",
        city: "Los AngelList",
    }

}

/*=====================เข้าถึงเข้ามูล=====================*/

//1.Dot Notation

console.log(user.name);
console.log(user.age);

//2. Bracket Notation

console.log(user["name"]);
console.log(user["age"]);

/*=====================เพิ่ม แก้ไข ลบข้อมูล=====================*/

const person = {
    name: "Johnny",
    age: 10000,
}

//1.Update Data
person.age = 100;

//2.Add Data
person.country = "thailand";

//3.Delete Data

delete person.age;

console.log(person);

/*=====================แถม=====================*/

const skibidy = {
    sayWalahi: function() {
        console.log("Say Walahi!");
    },
    sixseven: () => console.log("SIXSeven!!"),
}

skibidy.sayWalahi();
skibidy.sixseven();
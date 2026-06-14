/*
destructuring คือ การแก้ข้อมูล ออกจาก object หรือ array มาใส่ในตัวแปร
*/

/*=====================array destructuring=====================*/

const colors = ["red", "green", "blue"];

const [fist, second] = colors;

console.log(fist);
console.log(second);
/*ชื่อตัวแปรต่างกัน */

/*=====================ข้ามค่า=====================*/

const [one, , third] = colors;

console.log(one);
console.log(third);

/*=====================Rest Operator=====================*/

const colors2 = ["red", "blue", "green", "yellow"];

const [firstColor, ...Others] = colors2;

console.log(fist);
console.log(Others);

/*=====================สลับค่าตัวแปร=====================*/

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); 
console.log(b);

/*=====================Object destructuring=====================*/

const person = {
    name: "joh",
    age: 25,
    country: "Thai",
};

const {name, age } = person;

console.log(name);
console.log(age);

/*=====================เปลี่ยนชื่อตัวแปร=====================*/

const peson2 = {
    name: "John",
    age: 35,
};

const { name: Username, age: Userage} = person2;

console.log(Username);
console.log(Userage);

/*=====================Defualt Value=====================*/

const person3 = {
    name: "Jorge",
};

const {name, age = 15} = person3;

console.log(name);
console.log(age);

/*=====================Rest Object=====================*/


const person4 = {
    name: "SIkiidy",
    age: 36,
    country: "Kan",
}

const { name, ...info} = person4;

console.log(name);
console.log(info);

/*=====================function destructuring=====================*/
//เจอบ่อยมาก

const user = {
    name: "jewifjeif",
    
}

function displayUser({ name, age }) {
    console.log(name);

}

/*=====================Array of Object=====================*/

const user = [
    {
        name: "John",
        age: 20,
    }
];

for (const { name, age }of user) {
    console.log(name, age);
}


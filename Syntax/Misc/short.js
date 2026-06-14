/*=====================STRING SORT=====================*/

const fruits = ["banana", "apple", "orange"];

fruits.sort();

console.log(fruits);

/*=====================NUMBER SORT=====================*/

//Small to Large
const numbers = [100, 5, 20, 1];


numbers.sort((a, b) => a - b);
/*
หลักการ
a - b < 0 aอยู่ก่อน b
*/

console.log(numbers);

//Large to Small

const largeNumber = [100, 5, 20, 1];

largeNumber.sort((a, b) => b - a);

console.log(largeNumber);

/*=====================OBJECT SORT=====================*/

const users = [
    { name: "Mike", age: 25 },
    { name: "Diggy", age: 36},
    { name: "Mose", age:47},
];

//AGE SORT(SMALL TO LARGE)
users.sort((a, b) => a.age - b.age);

console.log(users);

//STRING SORT(DICTIONARY)
const usersString = [
    { name: "Mike", age: 25 },
    { name: "Diggy", age: 36},
    { name: "Anna", age:47},    
]

usersString.sort((a, b) => a.name.localeCompare(b.name));

console.log(usersString);

/*=====================ไม่แก้ไข array เดิม=====================*/


const oldNumber = [
    100,
    50,
    10,
    80,
];

const sorted = [...oldNumber].sort((a, b) => a - b);

console.log(oldNumber);
console.log(sorted);
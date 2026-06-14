const users = [
    {
        name: "John",
        age: 20,
    },
    {
        name: "Mike",
        age: 56,
    }
]


console.log(users[0]);
console.log(users[1]);

/*=====================Edit Data=====================*/

users[0].age = 46;


/*=====================ADD NEW OBJECT=====================*/

users.push({
    name: "Jordy",
    age: 46
});

console.log(users);

/*=====================Loop=====================*/

for (const user of users) {
    console.log(user.name);
}

/*=====================Loop + Destructuring=====================*/

for (const { name, age } of users) {
    console.log(name, age);
} 

/*=====================MAP=====================*/

const names = users.map(user => user.name);

console.log(names);

/*=====================FILTER=====================*/

const adults = user.filter(user => user.age >= 25);

console.log(adults);

/*=====================Find=====================*/

const user = users.find(user => user.name === "Mike");

console.log(user);

/*=====================FOR EACH=====================*/

const fruits = [
    {
        name: "apple",
        color: "red",
    },

    {
        name: "banana",
        color: "yellow",

    },

    {
        name: "watermelon",
        color: "green",
    }
]

fruits.forEach(fruit => console.log(fruit.name))
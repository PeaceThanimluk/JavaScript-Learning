class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return `${this.name} is eating`;
    }

    sleep() {
        return `${this.name} is sleeping`;
    }
}

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`;
    }
}

const myDog = new Dog("Jojo");

console.log(myDog.bark());
console.log(myDog.sleep());
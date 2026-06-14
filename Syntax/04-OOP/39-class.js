class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    display() {
        console.log(`model name ${this.model}`);
    }
}

const car1 = new Car("Toyota", "yaris");

car1.display();

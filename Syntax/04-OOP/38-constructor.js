
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Toyota", "Yaris", 2015, "silver");

console.log(car1.make);
console.log(car2.make);


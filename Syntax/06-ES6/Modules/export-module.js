/*=====================Named Export=====================*/

//Variables Export
export const Pi = 55555555;

//Function Export
export function add(a, b) {
    return a * b;
}

/*=====================DEFAULT EXPORT=====================*/

export default class User {
    constructor(name) {
        this.name = name;
    }

    sayMiguel() {
        console.log(`hi ${this.name} you are MIGUEL!`);
    }
}   


/*
Getter หน้าที่หลักคือ อ่าน/ดึง ข้อมูลเอ่าไปใช้
Setter เขียน/แก้ไข/กรองข้อมูล
*/


/************ต้องใส่ _หน้าตัวแปร */

/*=====================GETTER=====================*/

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

}

const person = new Person("John");
console.log(person.name);

/*=====================SETTER=====================*/

class Wallet {
    constructor(money) {
        this._money = money;
    }

    set balance(amount) {
        if (amount < 0) {
            console.log("Error your money must not be negative");
            return;
        }
        this.money = amount;
    }
}

const myWallet = new Wallet;

myWallet.balance = -500;
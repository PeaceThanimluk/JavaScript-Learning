/*
super ใช้สำหรับอ้างอิงหรือเรียกใช้งาน parent class จากภายใน class ลูก
เรียก constructor จาก parent class 
*/

/*=====================1.super เรียก constructor parent class=====================*/

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        //ต้องเรียก super() แล้วส่งค่าที่ parent class ต้องการไปให้ครบก่อน
        super(name, salary);
        this.department = department //สร้าง constructor เพิ่มเป็นของตัวเองผ่าน this
    }
}

/*
Manager อยากมี constructor ของตัวเอง แต่ ขี้เกียจสร้างเอง เลยไปขอจาก parent class แล้วค่อยสร้างเองอีกอัน
*/

const boss = new Manager("Money", 40000, "It");
console.log(boss.name);
console.log(boss.department);


/*=====================2.Super เรียก method ของ parent class=====================*/

class PersonalPc {
    turnOn() {
        return "turn on computer!";
    }

}

class GamingPc extends PersonalPc {
    turnOn () {
        let baseboot = super.turnOn();

        return `${baseboot} and turn on rgb`;
    }
}


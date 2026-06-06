// This ไม่สามารถใช้กับ arrow function ได้ -> Undefined

const user = {
    name: "John",

    sayHello() {
        console.log(this.name); //this คือตัวที่เรียกใช้
    }
};

user.sayHello();




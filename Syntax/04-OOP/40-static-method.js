//Static method คือ method ของ class ไม่ใช่ของ object
/*
method ปกติ ต้องสร้าง object ด้วยคำสั่ง new ก่อนถึงจะเรียกใช้งานได้
static method เรียกใช้งานผ่านชื่อ class ได้โดยตรง โดยไม่ต้องสร้าง objectขึ้นมา
มักใช้กับfunction ที่เป็นส่วนกลางหรือตั่วยคำนวณ
*/

//การใช้ static method ช่วยให่ รวมกลุ่ม function ที่เกี่ยวข้องให้อยู่ในกลุ่มเดียวกัน
//static method สามารถเข้าถึงตัวแปรของ class ที่เป็น #(private static) ได้
//ส่วนใหญ่ static method จะทำงานเกี่ยวกับ class

class mathHelper {
    static add(a, b) {
        return a + b;
    }
};

class sixSeven {
  static maxNumber = 100;
  
  static calculate(number) {
    return this.maxNumber * number;
  }
};

class privateClass {
    static #maxUser = 100;

    static showUser() {
        console.log(privateClass.#maxUser);
    }
};


console.log(mathHelper.add(10000, 3000));
console.log(sixSeven.calculate(2));
privateClass.showUser();

/*=====================EXAMPLE2=====================*/

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users`);
    }
}

const user1 = new User("Miguel");
const user2 = new User("Ninja");

User.getUserCount();
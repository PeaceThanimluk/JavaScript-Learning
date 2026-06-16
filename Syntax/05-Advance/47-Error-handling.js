/*=====================1.โครงสร้างพื้นฐาน=====================*/

try {
    //โค้ดที่คิดว่าอาจจะเกิด error ได้
    let user = "john";
    console.log(user);

    console.log(something);
} catch(error) {
    //โค้ดจะทำงานก็ต่อเมื่อเกิด error
    console.log("there is something wrong");
    console.log("reason of error", error.message);
}

/*
เอาไว้ใช้ตอนไหน 

1.เมื่อต้องทำงานกับสิ่งที่เราควมคุมไม่ได้ (External Factors)
-ดึงข้อมูลจาก api

2.เมื่อต้องทำงานกับข้อมูลที่เสียงต่อการ format ผิด

3.ป้องกันไม่ให้ application พังทั้งระบบ
*/


/*=====================2.การใช้ Finally=====================*/
//สำคัญ

try {
    console.log("กำลังเชื่อมต่อฐานข้อมูล")
} catch (error) {
    console.log("deal with error");
} finally {
    console.log("ปิดการเชื่อมต่อฐานข้อมูล") //ทำงานเสมอ ไม่ว่าจะเกิด Error หรือไม่
}

/*=====================3.Throw=====================*/
//สร้าง error ขึ้นมาเอง เวลาเงื่อนไขไม่ถูกต้อง เช่น ป้อนอายุติดลบหรือกรอกข้อมูลไม่ครบ

function checkAge(age) {
    if (age < 0) {
        throw new Error("age cant be minus!");
    }
    return `your age is ${age}`;
}

try {
    let result = checkAge(-5);
    console.log(result);
} catch (error) {
    console.warn("แจ้งเตืือนระบบ:", error.message);

    
}
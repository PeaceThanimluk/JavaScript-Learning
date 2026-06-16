/*=====================PROMISE=====================*/
/*
Promise คือวิธีจัดการงานที่ใช้เวลา เช่น เรียก api อ่านไฟล์ โดยไม่ทำให้โปรแกรมค้าง
เป็นการบอกว่าจะได้สิ่งนี้ในอนาคต
pending(กำลังรอ) 
fulfiled(สำเร็จ)
rejected(ล้มเหลว)
*/

const orderPizza = new Promise((resolve, reject) => { //รับ function ที่มี resolve(เมื่อทำเสร็จ) reject(เมื่อทำล้มเหลว)
    let isDone = true;

    if (isDone) {
        resolve("Finished pizza");
    } else {
        reject("create Pizza failed!");
    }
})

orderPizza
    .then(reusult => {
        console.log(reusult);
    })
    .catch(error => {
        console.log(error);
    })

/*=====================async / await=====================*/

/*
async(Asynchronous) ต้องวางไว้หน้า function เสมอ เพื่อบอกว่า 
้ข้างในจะมีการรันโค้ดแบบรอเวลา และ function ที่ใส่ async จะคืนค่ากลับมา
เป็น promise เสมอ

await ต้องวางไว้ หน้าสั่งการที่เป็น promise และต้องอยู่ ภายใน function 
ที่มี async เท่านั้น มันทำหน้าที่สั่งให้โปรแกรม หยุดรอให้ promise บรรทัดนั้นทำงานเสร็จ
และได้ผลลัพธ์ออกมาก่อน ถึงจะยอมปล่อยให้ไปทำงานบรรทัดถัดไป
*/

async function getPost() {
    try {
        const repsonse = await fetch( "https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        console.log(data)
    } catch (err) {
        console.log(err);
    }

}

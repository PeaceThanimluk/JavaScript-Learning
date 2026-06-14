/*
Synchronous คือ การทำให้อยู่เวลาเดียวกัน ทำทีละงานตามลำดับ
เมื่อมีคำสั่งงานเกิดขึ้น ระบบจะทำงานนั้นให้เสร็จก่อน

ข้อดี 
-เข้าใจง่าย โค้ดตรงไปตรงมา ผลลัพธ์คาดเดาได้ง่าย
ข้อเสีย
-ถ้ามีงานไหนที่ใช้เวลานาน งานอื่นๆจะต้องยืนรอ ทำให้ระบบดูค้างหรือช้า
*/

function boiNoodles() {
    console.log("1. start mama");

    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + 3000) {
        //บังคับให้ระบบรออยู่3วินาที ทำอะไรไม่ได้เลย
    }

    console.log("2. Finished");
}

function doOther() {
    console.log("3.Walk to do other things");
}

boiNoodles();
doOther();

/*
Asynchronous คือ ไม่ต้องรอให้งานเก่าเสร็จ ก็เริ้มงานใหม่ได้เลย

หลักการ: เมื่อระบบสั่่งงานที่ต้องใช้เวลา มันจะไม่ต้องรอ แต่จะส่งงานนั้นไปทำในพื้นหลังแทน
แล้วตัวมันเองจะช้ามไปงานถัดไปทันที เมื่อไฟล์โหลดเสร็จแล้สค่อยมีระบบแต้
เตื่อน(Callback/Notification) กลับมา (เรียกว่า Non-blocking)

ข้อดี : ระบบทำงานได้ลื่นไหล ไม่ต้องรอคอย เหมาะกับงานที่ต้องติดต่อกับภายนอกหรือระบบที่ต้องการความเร็ว
ข้อเสีย : โค้ดจะมีความซับซ้อนขึ้น และต้องจัดการลำดับผลลัพธ์ให้ดี เพราะงานที่สั่งทีหลังอาจจะเสร็จก่อน

*/

function boilNoodlesAsync() {
    console.log("1. Start mama");

    setTimeout(() => {
        console.log("3. [Notification] mama finished");
    }, 3000);
}

function hangClothes() {
    console.log("2. while wating , finished hang clotehs!");
}


boilNoodlesAsync();
hangClothes();





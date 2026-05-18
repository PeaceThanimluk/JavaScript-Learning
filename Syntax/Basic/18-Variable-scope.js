//Local Variables VS Global Variables

//1.Global Variables คือตัวแปรที่เก็บไว้นอกfunction หรือ นอก block ใดๆ ทำให้ทุกส่วนของโค้ด สามารถเรียกใช้ได้
let Global = "Kuyyyyyyyy";

function Test(){
    let name = Global; //เอาตัวแปรมาใช้ได้
}

//2.Local Variables คือ ตัวแปรที่เก็บไว้ในFunction มีแค่ภายในFunctionเท่านั้นที่สามารถใช้ได่ ตัวนอกไม่สามารถเรียกใช้ได่

function Local(){
    let name = "Password";
}
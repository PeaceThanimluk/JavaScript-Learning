/*Map คือการแปลงข้อมูลจาก array เดิม ให้กลายเป็น  arrayใหม่  โดยจำนวนช่องยังคงเท่าเดิม*/
/*Map จะreturn ค่าใหม่ออกมาเสมอ */

const numbers = [1, 2, 3, 4, 5];

const sqaures = numbers.map(squre);

console.log(sqaures);

function squre(element) {
    return Math.pow(element, 2);
}
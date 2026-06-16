/*=====================1.setItem=====================*/

localStorage.setItem("name", "peace");

console.log(localStorage);

/*=====================2.getItem=====================*/

const name = localStorage.getItem("name");
console.log(name);

/*=====================3.removeItem=====================*/

localStorage.removeItem("name");

/*=====================4.clear=====================*/

localStorage.clear() //ลบ key ในเว็บทั้งหมด

/*=====================5.เก็บobject หรือ array=====================*/

const user = {
    name: "Peace",
    age: 18
};

localStorage.setItem("user", JSON.stringify(user));

/*=====================6.แปลง string -> object=====================*/

const user = JSON.parse(localStorage.getItem("user"));

/*=====================ตัวอย่าง To do app=====================*/

const todos = [
    "do1",
    "do2"
]

localStorage.setItem("todos", JSON.stringify(todos));


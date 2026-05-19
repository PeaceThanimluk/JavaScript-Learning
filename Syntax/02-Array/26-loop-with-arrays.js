let Data = ["Number1", "Number2", "Number3"];


//Forward Loop
for(let i = 0; i < Data.length; i++){
    console.log(Data[i]);
}
console.log("---------------------")


//Backward Loop
for(let i = Data.length -1; i >= 0; i--){
    console.log(Data[i]);
}

console.log("---------------------")

//modern loop
for(let data of Data){ //data คือตัวแปรที่สร้างขึ้นมา
    console.log(data);
}
//เอา value ข้างในarraysออกมาตรงๆโดยไม่สนใจ index





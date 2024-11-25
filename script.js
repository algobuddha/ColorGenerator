let randomNumber;
let randomColor;
const generateColor = () =>{
    randomNumber = Math.floor(Math.random()*16777215);
    randomColor = "#" + randomNumber.toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor=randomColor;
    document.getElementById("back").innerText=randomColor;
    document.getElementById("back").style.color=randomColor;
    document.getElementById("btn").style.color=randomColor;
    document.getElementById("btn2").style.color="rgb(175, 185, 203)";
}
document.getElementById("btn").addEventListener(
    "click",
    generateColor
)
document.getElementById("btn2").addEventListener("click",function(){
    navigator.clipboard.writeText(randomColor);
    document.getElementById("btn2").style.color="rgb(66, 71, 71)";

})

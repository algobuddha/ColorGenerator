const generateColor = () =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomColor = "#" + randomNumber.toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor=randomColor;
    document.getElementById("back").innerText=randomColor;
    document.getElementById("back").style.color=randomColor;
    document.getElementById("btn").style.color=randomColor;
    navigator.clipboard.writeText(randomColor)
}
document.getElementById("btn").addEventListener(
    "click",
    generateColor
)
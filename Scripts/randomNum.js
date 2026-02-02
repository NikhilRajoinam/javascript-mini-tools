const randomBtn= document.getElementById("randomBtn");
const myLabel=document.getElementById("myLabel");
let randomNum;
let max=6;
let min=1;

randomBtn.onclick=function()
{
    randomNum= Math.floor(Math.random()*max)+min;
    myLabel.textContent= randomNum
}
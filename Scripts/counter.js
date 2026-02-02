//counter program 
const increaseBtn= document.getElementById("increaseBtn");
const decreaseBtn= document.getElementById("decreaseBtn");
const resetBtn= document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel")

let count=0;
increaseBtn.onclick=function(){
    count++;//incrementation
    countLabel.textContent=count; // assign value  to label after incrementing 
}
resetBtn.onclick=function(){
    count=0; 
   countLabel.textContent=count; //assign value of to label after equalizing to 0

}
decreaseBtn.onclick=function(){

    count--;   //decreamentation
    countLabel.textContent=count;//assign value to label after decrementing

}
    
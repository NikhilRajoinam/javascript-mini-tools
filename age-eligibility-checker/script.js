const mySubmit= document.getElementById("mySubmit");
const myInput=document.getElementById("myInput");
const result=document.getElementById("result");
let age;

mySubmit.onclick=function(){
    age= myInput.value;
    age=Number(age);// type casting 
    if(age>=100){
        result.textContent=`you are too old for this`;
    }
    else if (age==0){
        result.textContent=`age cannot be equal to zero`;

    }
    else if (age>=18){
        result.textContent=`you are eligible to enter this site.`;
    }
    else if (age<0){
        result.textContent=`age cannot be negative.`;
    }
    else
    {
        result.textContent=`you are not eligible to enter this site.`;
    }
}
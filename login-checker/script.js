const userName= document.getElementById("userName");
const myPassword= document.getElementById("myPassword");
const myBtn= document.getElementById("myBtn");
const result= document.getElementById("myP");

myBtn.onclick= function(){

    const name=userName.value;
     const password=myPassword.value;

   
        if(name==="Nikhil"&&password==="mypassword")
        {
            result.textContent='you are successfully logged in';
            result.style.color = "green";

        }
        else
        {
            result.textContent='Invalid Credential please try again';
            result.style.color = "red";

        }

    }

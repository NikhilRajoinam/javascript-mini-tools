const myCheckbox= document.getElementById("myCheckbox");
const visaBtn= document.getElementById("visaBtn");
const MasterCardBtn= document.getElementById("MasterCardBtn");
const CreditCardBtn= document.getElementById("CreditCardBtn");
const mySubmit= document.getElementById("mySubmit");
const first=document.getElementById("first");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){
    if(myCheckbox.checked)
    {
        first.textContent= `you have subscribed`;

    }
    else
    {
        first.textContent= `you are not subscribed`;
    }

    if(MasterCardBtn.checked)
    {
        paymentResult.textContent=`you have selected master card for the payment.`;
    }
    else if(visaBtn.checked){
        paymentResult.textContent=`you have select visa card for the payment.`;

    }
    else if (CreditCardBtn.checked)
    {
        paymentResult.textContent=`you have selected credit card for the payment.`;

    }
    else
    {
        paymentResult.textContent=`Select a payment method`;
    }
}


 
 
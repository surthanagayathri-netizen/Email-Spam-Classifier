function checkSpam(){

let email=document.getElementById("email").value.toLowerCase();

if(email==""){
alert("Please enter an email message");
return;
}

let result="Not Spam";

if(
email.includes("win") ||
email.includes("free") ||
email.includes("offer") ||
email.includes("prize") ||
email.includes("money")
){
result="Spam";
}

document.getElementById("result").innerHTML="Result: "+result;
}

alert("Write ur marks , u dumb !!")
function calc() {
    var x = document.getElementById("Maths").value;
    var y = document.getElementById("Science").value;
    var z = document.getElementById("English").value;
    var c = document.getElementById("German").value;
    var d = document.getElementById("Name").value;
    x = parseInt(x)
    y = parseInt(y)
    z = parseInt(z)
    c=parseInt(c)
    var p = ((x+y+z+z)/400)*100;
    
     document.getElementById("Otp_Name").innerHTML = d;
    document.getElementById("Otp_Percentage").innerHTML = p;
if(p<=100 && p>80){
    document.getElementById("Otp_Grade").innerHTML ="A";
    document.getElementById("Otp_p/f").innerHTML = "Pass";
}
else if(p<=80 && p>50){
    document.getElementById("Otp_Grade").innerHTML ="B";
    document.getElementById("Otp_p/f").innerHTML = "Pass";
}
else if(p<=50 && p>30){
    document.getElementById("Otp_Grade").innerHTML ="c";
    document.getElementById("Otp_p/f").innerHTML = "Pass";
}
else{
    document.getElementById("Otp_Grade").innerHTML ="f";
    document.getElementById("Otp_p/f").innerHTML = "FAil,U SUCK!!";
}
}



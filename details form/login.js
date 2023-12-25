function save()
{
    var name=document.getElementById("name").value;
    var Dob=document.getElementById("dob").value;
    var mail=document.getElementById("mail").value;
document.writeln("Registered Info"+"<br>"+"Full Name    : "+name +"<br>");
document.writeln("Date of Birth : "+Dob +"<br>");
document.writeln("Email provided  : "+mail);
alert("Name   : "+name+"  Date of Birth:"+Dob+"  Email     :"+mail);
}
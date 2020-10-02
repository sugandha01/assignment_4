function validatepass ()
{
    var a=document.getElementById("pass1").Value;
    var b=document.getElementById("pass2").Value;
    if(a==b)
    {
       alert("Password matched");
       return true;
    }
   else 
    {
        alert("Password not matched");
        return false;
    }
    
    return false;
}

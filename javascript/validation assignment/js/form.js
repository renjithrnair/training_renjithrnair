function valid() 
{
    var name = document.forms["myform"]["name"]; 
    var age =  document.forms["myform"]["age"];             
    var email = document.forms["myform"]["mail"];   
    var mobile = document.forms["myform"]["mobile"];

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; 

    var success;
    
    


    if (name.value == "") 
    {
        document.getElementById("name1").innerHTML="*required";
        // window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    else
    {
      document.getElementById("name1").innerHTML="";
    }
    

    if (isNaN(age.value)||age.value<1||age.value>100||age.value=="")
    { 
       document.getElementById("age1").innerHTML="*enter valid age";
       age.focus();
       return false;
   }
   else
   {
      document.getElementById("age1").innerHTML="";
   }

   if(mobile.value.match(phoneno)<1)
   {
       document.getElementById("mobile1").innerHTML="*enter valid mobile";
       return false;
   }
   else
   {
       document.getElementById("mobile1").innerHTML="";
   }


   if(mail.value.match(mailformat)<1)
   {
       document.getElementById("mail1").innerHTML="*enter valid mail";
       mail.focus();
       return false;
   }
   else
   {
      document.getElementById("mail1").innerHTML="";
   }

   if(mail.value.match(mailformat))
   {
       document.getElementById("success").innerHTML="Registration success";
       window.alert("Registration successful");
       location.reload(true);
   }
   


   else
   {
       return false;
   }



}


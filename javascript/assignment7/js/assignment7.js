function myDisplayFunction(ob)
{
  console.log(ob);
  var txt="<select>";
  var i=0;
  console.log(ob.length);
  for(i=0;i<=ob.length;i++)
  {
    txt+="<option value="+ob[i].code+">"+ob[i].name+"</option>";
    document.getElementById("country").innerHTML=txt;
    
  }
  txt+="</select>"
}

function disp()
{
    
    var s = document.createElement("script");
    s.src = "https://battuta.medunes.net/api/country/all/?key=2f9a6d6cada0d5d2784a202dd323b12d&callback=myDisplayFunction";
    document.body.appendChild(s);

  
} 



function regshow()
{
  var cntry=country.value;
  console.log(cntry);
  var sc= document.createElement("script");
  sc.src="http://battuta.medunes.net/api/region/"+cntry+"/all/?key=2f9a6d6cada0d5d2784a202dd323b12d&callback=myDisplayFunction2"
  document.body.appendChild(sc);
}

function myDisplayFunction2(ob1)
{
  var txt1="<select>";
  for(i=0;i<=ob1.length;i++)
  {
    txt1+="<option value="+ob1[i].region+">"+ob1[i].region+"</option>";
    document.getElementById("region").innerHTML=txt1;
    
  }
  txt1+="</select>";
  
}
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
        
        name.focus();
        return false;
    }
    else
    {
      document.getElementById("name1").innerHTML="";
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
function blank()
{
  location.reload();
}

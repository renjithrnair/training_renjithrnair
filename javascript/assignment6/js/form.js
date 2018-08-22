var requestURL = 'https://battuta.medunes.net/api/country/all/?key=2f9a6d6cada0d5d2784a202dd323b12d';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() 
{
  var gettext = request.response; // get the string from the response
  var obi = JSON.parse(gettext); // convert it to an object
  var ele = "<select>";
  //var cntry = document.getElementById("country");
  for(i=0;i<=obi.length;i++)
  {
  	ele+="<option value="+obi[i].code+">"+obi[i].name+"</option>";
  	console.log(obi[i].name);
  	document.getElementById("country").innerHTML=ele;
  }
  ele+="</select>";
  
 
  
}




function regshow()
{
	 
  
  	var cntry=country.value;  
    var url2="http://battuta.medunes.net/api/region/"+cntry+"/all/?key=2f9a6d6cada0d5d2784a202dd323b12d";
    var request2 = new XMLHttpRequest();
    request2.open('GET',url2);
    request2.responseType = 'text';
    request2.send();
    request2.onload = function()
    {
           
     
         var regionn=request2.response;
         var data2=JSON.parse(regionn);
         var ele1 = "<select>";

         for (var i = 0 ; i <= data2.length; i++)
  		{
          
          ele1+="<option value="+data2[i].code+">"+data2[i].region+"</option>";
          document.getElementById("region").innerHTML = ele1 ;
          
  		}
  		ele1+="</select>"
           
	}
    
  
 
  
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
        // window.alert("Please enter your name.");
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







var storedNum;
var str="";
var output;
function input(num) 
{
    var display = document.getElementById("display");
    str=str+num;
    display.value=str;
    // output=eval(str);
    try {
          output=eval(str);;
        }
    catch(err) 
    {
      output=err.name;
    } 
    
}



function calculate(finish)
{
   if(finish=='=')
   {
       var display = document.getElementById("display");
       display.value=output; 

   }
}

function clearDisplay()
{
    var display = document.getElementById("display");
    display.value="";
    str="";
}


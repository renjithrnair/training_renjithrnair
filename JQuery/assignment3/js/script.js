 var itemCount=0; 
 var qty;
 var quantity;
 var rmv;
 var count;
$(document).ready(function () {
	

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

$("#item").mouseover(function(){

    $("#item").css("cursor","pointer")
    if(localStorage.count<=0)
    {
      // $(".hoveritem").css("visibility","hidden");
       $(".hoveritem").css("visibility","visible");
        $("#cartcontent1").text("");
        $("#cartcontent2").text("     ");
        $("#cartcontent4").text("nil .");
        $("#cartcontent3").text("0");
        
    }
    else
    {
    $(".hoveritem").css("visibility","visible");
    $("#cartcontent1").text($("#brand").text());
    $("#cartcontent2").text($("#producttitle").text());
    $("#cartcontent3").text(localStorage.count);
    $("#cartcontent4").text(localStorage.count*2000);
    
    }
});
$("#item").mouseleave(function(){

    $(".hoveritem").css("visibility","hidden");

});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() 
{
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}
  
  


});


function cartbtn() 
{
   

   count++;
   if(localStorage.count)
   {
    localStorage.count=Number(localStorage.count)+1;
    if(localStorage.count == 0)
    {
        $('#itemcount').css("opacity","0");

    }
    else
    {
        $('#itemcount').css("opacity", "1");
         $("#itemcount").text(localStorage.count);
    }

   }
   else
    localStorage.count=0;
   
    
    
    


}

// localStorage.setItem("count", localStorage.count);
    qty=localStorage.getItem("count");
    count=parseInt(qty)
    if(isNaN(count))
    {
    count=0;
    }
    //console.log(qty);
    quantity=parseInt(count);

function remove()
 {
    localStorage.count=Number(localStorage.count)-1;
    
    
    if(localStorage.count<=0)
    {
        $(".hoveritem").css("visibility","hidden");
         $('#itemcount').css("opacity", "0");  
    }
    else
    {
        $('#itemcount').css("opacity", "1");
         $("#itemcount").text(Number(localStorage.count));
    }
 }

function store() 
{
    
    
    // localStorage.setItem("count", itemCount);
    
    if(localStorage.count<=0)
    {
        $('#itemcount').css("opacity","0");
        localStorage.count=0;

    }
    else
    {
        $('#itemcount').css("opacity", "1");
         $("#itemcount").text(localStorage.count);
    }




}
 



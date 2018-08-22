
$(document).ready(function(){

var modal = $("#id01");    
$("#signin").click(function(){
        modal.css("display","block");
        console.log("asf");
    });    
$(".close").click(function(){
            modal.css("display","none");    
});
    //onclick="document.getElementById('id01').style.display='none'"    // When the user clicks anywhere outside of the modal, close it    $(window).click(function(event) {
       $(window).click(function(event) {
        if (event.target.id == "id01") {
            modal.css("display","none");
            
        }
    });

});

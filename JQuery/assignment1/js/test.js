$(document).ready(function()
{
	$('.js-example-basic-single').select2();

	$("#nameerror").hide();
	$("#mailerror").hide();
	$("#mobileerror").hide();
	$("#doberror").hide();
	$("#ageerror").hide();
	$("#countryerror").hide();


	$("#dob").change(function (){

	var d=$("#dob").val();
	var dt= new Date(d);
	var day,month,year;
	
	console.log(dt);
	day = dt.getDate();
	month = dt.getMonth() + 1;
    year = dt.getFullYear();
	var today = new Date();
	var age = Math.floor((today-dt) / (365.25 * 24 * 60 * 60 * 1000));
	$("#age").val(age);

	});

});

function valid()
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; 
    console.log($("#email").val());
	if(($("#name").val())=="")
	{
		$("#nameerror").show();
	}
	else if(($("#email").val().match(mailformat))<1)
	{
		$("#mailerror").show();
		$("#nameerror").hide();
	}
	else if(($("#mobile").val().match(phoneno))<1)
	{
		$("#mobileerror").show();
		$("#nameerror").hide();
		$("#mailerror").hide();
	}
	else if(($("#dob").val())=="")
	{
		$("#doberror").show();
		$("#nameerror").hide();
		$("#mailerror").hide();
		$("#mobileerror").hide();
	}
	else if(($("#age").val())=="")
	{
		$("#ageerror").show();
		$("#nameerror").hide();
		$("#mailerror").hide();
		$("#mobileerror").hide();
		$("#doberror").hide();
	}
	else if(($("#country").val())=="")
	{
		$("#countryerror").show();
	}
	
	else
	{
		location.reload(true);
	}
	
}

	
	


function clr()
{
	location.reload(true);
}
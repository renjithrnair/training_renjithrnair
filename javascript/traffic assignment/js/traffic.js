var bflag=1;
var nflag=1;
function greenOnly() 
{
	document.getElementById("red").style.opacity = .3;
	document.getElementById("green").style.opacity = 1;
	document.getElementById("yellow").style.opacity = .3;
}

function redOnly()
{
	document.getElementById("red").style.opacity = 1;
	document.getElementById("green").style.opacity = .3;
	document.getElementById("yellow").style.opacity = .3;

	

}

function yellowOnly()
{
	document.getElementById("red").style.opacity = .3;
	document.getElementById("green").style.opacity = .3;
	document.getElementById("yellow").style.opacity = 1;
}


function off(x)
{
	if(x=='test')
	{
		nflag=0;
		bflag=0;
		flg2=0;
		
	}
	
	document.getElementById("red").style.opacity = .3;
	document.getElementById("green").style.opacity = .3;
	document.getElementById("yellow").style.opacity = .3;
}



function blinkYellow(flg)
{
	if (flg==1){
		bflag=1;
	}
	if(bflag==1)
	{
		yellowOnly();
		setTimeout(off,1000);
		setTimeout(blinkYellow,2000);
	}
	
}

function yellowOff()
{
	document.getElementById("red").style.opacity = .3;
	document.getElementById("green").style.opacity = .3;
	document.getElementById("yellow").style.opacity = .3;
}

function normal(flg2)
{
	if (flg2==1)
	{
		nflag=1;
	}
	if(nflag==1)
	{
		setTimeout(greenOnly,2000)
		setTimeout(yellowOnly,4000);;
		setTimeout(redOnly,6000);
		setTimeout(yellowOnly,8000);
		setTimeout(normal,9000);
	}	
}




$(document).ready(function(){
	
	$.ajax({

		type:'GET',
		url:"https://jsonplaceholder.typicode.com/posts",
		success: function(data){
			$.each(data,function(indx,obj){

				$("div").append("Post by user-"+obj.userId+"<h1>"+obj.title+"</h1>"+"<br"+"<p>"+obj.body+"</p>"+"<br>");

			});
			console.log(data);
		}
	});

});

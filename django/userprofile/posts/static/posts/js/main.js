$(document).ready(function(){

$('#post-submit').on('submit', function(event){
    event.preventDefault();
    console.log("form submitted!")  
    create_post();
});

function create_post()
{
	var formData= new FormData($('#post-submit')[0]);
	$.ajax({
		url:"",
		type:"POST",
		data:formData,
		processData:false,
		contentType:false,
		success: function(json){

			$('#id_title').val(''); 
			$('#id_body').val(''); 
			$("#post-list").prepend("<br><h2>"+json.title+"</h2><br>"+json.body+
				"<br><img src='"+json.image+"'width='"+250+"'><h6>Author : "+json.author+"</h6><br><h5>"+json.created_date+"<br><br><span>Likes : <span id='like_count"+json.id+"'>0</span></span><br><br><input type='button' id='"+json.id+"' value='Like' class='like' />");		
		   }

	     });
}


$(document).on('click','.like', function(event){
    event.preventDefault();
    var id=$(this).attr('id')
	a=$(this)
		$.ajax({

		url:"like/",
		type:"POST",
		data:{user_like:$(this).attr('id'),csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()},
		success:function(json){

			a.val(json.value);
			$("#like_count"+id).html(json.count)
			
		}

	});
	$.ajax({
		url:"send_mail/",
		type:"POST",
		data:{post_id:id,csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()},
		success:function(json){

		}

	});

});


});
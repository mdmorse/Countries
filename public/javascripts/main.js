$(function(){

	
	


	$('#country-button').click(function(){
		$.ajax('/countries', {
			success:function(data){
				console.log(data);
			}
		});

	});





































});
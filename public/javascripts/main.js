$(function(){

	
	


	$('#country-button').click(function(){
		$.ajax('/countries', {
			success:function(data){
				for(i=0; i<data.length; i++){
					var list = data[i];
					$('#country-list').append('<li class="list-group-item"><h2>' + list.name +'</h2></li>');
					$('#country-list').append('<li class="list-group-item"><strong>In French: </strong>' + list.frenchName +'</li>');
					$('#country-list').append('<li class="list-group-item"><strong>Local Name: </strong>' + list.localName +'</li>');
					$('#country-list').append('<li class="list-group-item"><strong>Region: </strong>' + list.region +'</li>')
					$('#country-container').slideDown(500);
				};
			}
		});
	});
	$('#search-button').click(function(){ 
		$.ajax('/search',{type:'post', data:{term:'#search-bar'.val()},
			success:function(data){
				console.log(data);
				}
			});
		});		
	});














	


































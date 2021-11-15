$(document).ready(function(){
	$( "body" ).append( $('<div>').attr({
		id : 'green',	
		'style':'background-color:green; width:250px; height:100px; margin:10px auto ;'

	}));
	$( "body" ).append( $('<div>').attr({
		id : 'yellow',			
		'style':'background-color:yellow; width:300px; height:120px; margin:10px auto;'
	}));
	$( "#green" ).mouseover( function() {
		console.log($( "#green" ).css(['width', 'height']));
	});
	$( "#yellow" ).mouseover( function() {
		console.log($( "#yellow" ).css(['width', 'height']));
	});
	$( "#green" ).click( function() {
		alert('ЗЕЛЕНЫЙ!!!')
	});
	$( "#yellow" ).click( function() {
		alert('ЖЕЛТЫЙ!!!')
	});

});
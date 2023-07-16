$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

var map = L.map('map').setView([51.505, -0.09], 13);



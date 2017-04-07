document.getElementById("toggle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

var currentScroll = window.pageYOffset || document.body.scrollTop;

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
}, false);

//Coders

window.addEventListener('load',function(event){
	event.preventDefault();

	var contenido = document.getElementById('container');

	var li = document.createElement('li');
	var div = document.createElement('div');
	var figure = document.createElement('figure');
	var img = document.createElement('img');
	var figcaption = document.createElement('figcaption');
	var span = document.createElement('span');

	for (var i=1; i < 55, i++){
		
	}

});

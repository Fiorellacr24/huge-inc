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

//Fotos de Coders

window.addEventListener('load',function(event){
	event.preventDefault();
	//Array de coders
	var namecoders = ['','Fiorella Quispe','Lourdes Vilchez','Leydi Maldonado','Yessenia Huamán',
	'Miriam Mendoza', 'Elizabeth Condori', 'Arantza Burga', 'Grecia Rayme', 
	'Janine Vega', 'Rosario Félix', 'Daguiana Revolledo', 'Jenny Velasquez', 
	'Nadia Cuadros', 'Michelle More', 'Marilu Llamoca', 'Mariel García', 
	'Fiorella Cisneros', 'Geraldine Chauca', 'Yelitza Choque',
	'Stephanie Hiyagon', 'Rocio Tapia', 'Dana Franco', 'Flor Retamozo', 
	'Nathaly Pacheco', 'Ericka Vidal', 'Katherine Ortega', 'Brilly Majuan', 
	'Flor Tello', 'Leslie Avendaño', 'Cindy Mendoza', 'Annia Flores', 
	'Betsi Loayza', 'Ayda Sulca', 'Milagros Gutierrez', 'Nakarid Jave', 
	'Angie Condor', 'Maricarmen Rojas', 'Ariana Cabana', 'Flor Condori', 
	'Mitchell Rodríguez', 'Naomi Villanueva', 'Mary Castillo', 'Miriam Peralta', 
	'Karin Alejo', 'Liliana Peña', 'Ruth Salvador', 'Marilu Llamoca', 'Wendy Reyes', 
	'Cinthya Quispe','Maria Grecia Cutipa', 'Ana Durand', 'Glisse Jorge', 'Neiza Nuñez', 
	'Sandra Solorzano'];

	var contenido = document.getElementById('container');


	//Recorrer todas las imágenes
	for (var i = 1; i < 55; i++){
		var li = document.createElement('li');
		var div = document.createElement('div');
		var figure = document.createElement('figure');
		var figcaption = document.createElement('figcaption');
		var span = document.createElement('span');
		var img = document.createElement('img');
		var url = "assets/img/coders/" + i + ".png";

		img.setAttribute('src', url);
		figure.appendChild(img);
		span.innerText = namecoders[i];
		figcaption.appendChild(span);
		figure.appendChild(figcaption);
		div.appendChild(figure);
		li.appendChild(div);
		contenido.appendChild(li);

		figcaption.setAttribute('class', 'center');
		img.setAttribute('class', 'img-box');
		div.setAttribute('class', 'grid');
		li.setAttribute('class', 'box');
	}

});

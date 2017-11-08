//(llamamos en una variable el contenedor padre de mi input).
var addList = document.getElementById("contenedor");
// (div que contiene botones).
var divButtons = document.getElementById("buttons");

//creo una funcion que cuando hacemos click en el contenedor padre...
addList.addEventListener("click", function(){
	//tomo el contenedor y le agregamos una clase que irá en mi css
	addList.classList.add("after");
	//al clickear el boton remuevo la clase 
	divButtons.classList.remove("hidden");
});

var xList = document.getElementById("x");



//luego creo un funcion que al hacer click en el boton se elimine
xList.addEventListener("click", function(){


	//luego tomo el boton para agregarle la lista
	divButtons.classList.add("hidden");

	//tomo el contenedor y elimino el estilo
	xList.classList.remove("after");
	
});

/*nota: me faltaron muchas cosas en este js, 
no alcancé a comprender muy bien la materia,
por lo tanto no se si esta bien por completo,
hice mi mejor intento, pero seguire trabajando
para lograr el objetivo final, gracias por 
la consideración de darnos más plazo :)*/
var numLineas=document.getElementById("numIngresado");
var btnCalcular=document.getElementById("btnCalcular");
var	d=document.getElementById('areaDibujo');
var lienzo = d.getContext('2d'); /* Indicar tipo de lienzo 2d o 3d*/



btnCalcular.addEventListener('click', dibujoPorClick);



function dibujoPorClick(){
	var lineas=numLineas.value;
	var color= "#FAA";
	var anchoLienzo = d.width;
	var espacio= anchoLienzo/lineas
	

	for (l = 0; l < lineas; l++) {
		var yi	= espacio * l;
		var xf = espacio * (l + 1);
		dibujarLinea(color,0, yi,xf ,anchoLienzo);	
	}
	dibujarLinea(color,1,1,1,299);
	dibujarLinea(color, 1,299,299,299);
}



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath(); /* abrir el trazo a realizar */
	lienzo.strokeStyle = color; /* Color de linea */
	lienzo.moveTo( xinicial, yinicial); /* Posicion inicial del trazo */
	lienzo.lineTo(xfinal, yfinal); /* Posicion final del trazo*/
	lienzo.stroke(); /* Realiza trazo */
	lienzo.closePath(); /* Cerrar trazo */
}




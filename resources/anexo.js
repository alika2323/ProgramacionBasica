/* Enlazar elementos generales de html */
var numLineas=document.getElementById("numIngresado");
var btnCalcular=document.getElementById("btnCalcular");


/* LIENZO 1 */
var	d=document.getElementById('areaDibujo');
var lienzo = d.getContext('2d'); 

/* LIENZO 2*/
var	f=document.getElementById('areaDibujo2');
var lienzo2 = f.getContext('2d');




/*       ESTABLECIENDO EVENTOS.       */
document.addEventListener('keydown',dibujarTeclado);

btnCalcular.addEventListener('click', dibujoPorClick);




/*       FUNCIONES.       */

function dibujoPorClick(){
	var lineas=numLineas.value;
	var color= "#FAA";
	var anchoLienzo = d.width;
	var espacio= anchoLienzo/lineas
	

	for (l = 0; l < lineas; l++) {
		var yi	= espacio * l;
		var xf = espacio * (l + 1);
		dibujarLinea(color,0, yi,xf ,anchoLienzo,lienzo);	
	}
	dibujarLinea(color,1,1,1,299,lienzo);
	dibujarLinea(color, 1,299,299,299,lienzo);
}




var x=149;
var y=149;
movimiento=10;

function dibujarTeclado(evento){
	var tipoLienzo=lienzo2;
	var teclas={
		IZQUIERDA : 37,
		ARRIBA : 38,
		DERECHA : 39,
		ABAJO : 40
	};



	switch (evento.keyCode) {
		case teclas.IZQUIERDA:
		dibujarLinea("red", x,y,x-movimiento,y,tipoLienzo);
		x=x-movimiento
		break;
		case teclas.ARRIBA:
		dibujarLinea("pink", x,y,x,y-movimiento,tipoLienzo);
		y=y-movimiento;
		break;
		case teclas.DERECHA:
		dibujarLinea("green", x,y,x+movimiento,y,tipoLienzo);
		x=x+movimiento
		break;
		case teclas.ABAJO:
		dibujarLinea("blue", x,y,x,y+movimiento,tipoLienzo);
		y=y+movimiento;
		break;
		default:
		
		break;
	}

}










function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,areaDibujante){
	areaDibujante.beginPath(); /* abrir el trazo a realizar */
	areaDibujante.strokeStyle = color; /* Color de linea */
	areaDibujante.lineWidth = 5;
	areaDibujante.moveTo( xinicial, yinicial); /* Posicion inicial del trazo */
	areaDibujante.lineTo(xfinal, yfinal); /* Posicion final del trazo*/
	areaDibujante.stroke(); /* Realiza trazo */
	areaDibujante.closePath(); /* Cerrar trazo */
}




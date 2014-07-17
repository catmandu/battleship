function pintarCasillas()
{
	switch(turno)
	{
		case 'J1':
		  pintarBarcosJ1();
		  pintarAgujeroJ1();
		  pintarExplosionJ1();
		  pintarDerribadosJ1();
		  pintarFallidosJ1();
		break;
		
		case 'J2':
		  pintarBarcosJ2();
		  pintarAgujeroJ2();
		  pintarExplosionJ2();
		  pintarDerribadosJ2();
		  pintarFallidosJ2();
		break;
	}
}

function pintarBarcosJ1()
{
	 //pintar barco de 2 espacios vertical
	  if(parseInt(barcosJ1.b2[0])+10==barcosJ1.b2[1]){
	   document.getElementById(barcosJ1.b2[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 2.jpg\" />";
	   document.getElementById(barcosJ1.b2[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 2.jpg\" />";
	  }
	  //pintar barco de 2 espacios horizontal
	  else{
	   document.getElementById(barcosJ1.b2[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 2.jpg\" />";
	   document.getElementById(barcosJ1.b2[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 2.jpg\" />";
	  }
	  
	  //pintar barco de 3a espacios vertical
	  if(parseInt(barcosJ1.b3a[0])+10==barcosJ1.b3a[1]){ 
	   document.getElementById(barcosJ1.b3a[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ1.b3a[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ1.b3a[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 3.jpg\" />";
	  }
	  //pintar barco de 3a espacios horizontal
	  else{
	   document.getElementById(barcosJ1.b3a[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ1.b3a[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ1.b3a[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 3.jpg\" />";	  
	  }
	 
	  //pintar barco de 3b espacios vertical
	  if(parseInt(barcosJ1.b3b[0])+10==barcosJ1.b3b[1]){ 
	   document.getElementById(barcosJ1.b3b[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ1.b3b[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ1.b3b[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 3.jpg\" />";
	  }
	  //pintar barco de 3b espacios horizontal
	  else{
	   document.getElementById(barcosJ1.b3b[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ1.b3b[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ1.b3b[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 3.jpg\" />";	  
	  }
	 
	  //pintar barco de 5 espacios vertical
	  if(parseInt(barcosJ1.b4[0])+10==barcosJ1.b4[1]){  
	   document.getElementById(barcosJ1.b4[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 4.jpg\" />";
	   document.getElementById(barcosJ1.b4[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio arriba 4.jpg\" />";
	   document.getElementById(barcosJ1.b4[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio abajo 4.jpg\" />";
	   document.getElementById(barcosJ1.b4[3]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 4.jpg\" />";
	  }
	  //pintar barco de 4 espacios horizontal
	  else{
	   document.getElementById(barcosJ1.b4[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 4.jpg\" />";
	   document.getElementById(barcosJ1.b4[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio arriba 4.jpg\" />";
	   document.getElementById(barcosJ1.b4[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio abajo 4.jpg\" />";
	   document.getElementById(barcosJ1.b4[3]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 4.jpg\" />";
	  }
	
	   //pintar barco de 5 espacios vertical
	   if(parseInt(barcosJ1.b5[0])+10==barcosJ1.b5[1]){ 
	   document.getElementById(barcosJ1.b5[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio arriba 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[3]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio abajo 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[4]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 5.jpg\" />"; 
	   }
	   //pintar barco de 5 espacios horizontal
	   else{
	   document.getElementById(barcosJ1.b5[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio arriba 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[3]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio abajo 5.jpg\" />";
	   document.getElementById(barcosJ1.b5[4]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 5.jpg\" />";
	   }
}

function pintarBarcosJ2()
{
	//pintar barco de 2 espacios vertical
	  if(parseInt(barcosJ2.b2[0])+10==barcosJ2.b2[1]){
	   document.getElementById(barcosJ2.b2[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 2.jpg\" />";
	   document.getElementById(barcosJ2.b2[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 2.jpg\" />";
	  }
	  //pintar barco de 2 espacios horizontal
	  else{
	   document.getElementById(barcosJ2.b2[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 2.jpg\" />";
	   document.getElementById(barcosJ2.b2[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 2.jpg\" />";
	  }
	  
	  //pintar barco de 3a espacios vertical
	  if(parseInt(barcosJ2.b3a[0])+10==barcosJ2.b3a[1]){ 
	   document.getElementById(barcosJ2.b3a[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ2.b3a[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ2.b3a[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 3.jpg\" />";
	  }
	  //pintar barco de 3a espacios horizontal
	  else{
	   document.getElementById(barcosJ2.b3a[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ2.b3a[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ2.b3a[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 3.jpg\" />";	  
	  }
	  //pintar barco de 3b espacios vertical
	  if(parseInt(barcosJ2.b3b[0])+10==barcosJ2.b3b[1]){ 
	   document.getElementById(barcosJ2.b3b[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ2.b3b[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ2.b3b[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 3.jpg\" />";
	  }
	  //pintar barco de 3b espacios horizontal
	  else{
	   document.getElementById(barcosJ2.b3b[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 3.jpg\" />";
	   document.getElementById(barcosJ2.b3b[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio 3.jpg\" />";
	   document.getElementById(barcosJ2.b3b[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 3.jpg\" />";	  
	  }
	  //pintar barco de 5 espacios vertical
	  if(parseInt(barcosJ2.b4[0])+10==barcosJ2.b4[1]){  
	   document.getElementById(barcosJ2.b4[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 4.jpg\" />";
	   document.getElementById(barcosJ2.b4[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio arriba 4.jpg\" />";
	   document.getElementById(barcosJ2.b4[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio abajo 4.jpg\" />";
	   document.getElementById(barcosJ2.b4[3]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 4.jpg\" />";
	  }
	  //pintar barco de 4 espacios horizontal
	  else{
	   document.getElementById(barcosJ2.b4[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 4.jpg\" />";
	   document.getElementById(barcosJ2.b4[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio arriba 4.jpg\" />";
	   document.getElementById(barcosJ2.b4[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio abajo 4.jpg\" />";
	   document.getElementById(barcosJ2.b4[3]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 4.jpg\" />";
	  }
	   //pintar barco de 5 espacios vertical
	   if(parseInt(barcosJ2.b5[0])+10==barcosJ2.b5[1]){ 
	   document.getElementById(barcosJ2.b5[0]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco arriba 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[1]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio arriba 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[2]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[3]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco medio abajo 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[4]).innerHTML="<img class=\"barcoVertical\" src=\"./img/barco abajo 5.jpg\" />"; 
	   }
	   //pintar barco de 5 espacios horizontal
	   else{
	   document.getElementById(barcosJ2.b5[0]).innerHTML="<img class=\"rot270\" src=\"./img/barco arriba 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[1]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio arriba 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[2]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[3]).innerHTML="<img class=\"rot270\" src=\"./img/barco medio abajo 5.jpg\" />";
	   document.getElementById(barcosJ2.b5[4]).innerHTML="<img class=\"rot270\" src=\"./img/barco abajo 5.jpg\" />";
	   }
}

function pintarAgujeroJ1()
{
	var i;
	for(i=0;i<agujerosJ1.length;i++)
	{
		document.getElementById(agujerosJ1[i]+'p').innerHTML="<img class=\"barcoVertical\" src=\"./img/agujero.png\" />";
	}
}

function pintarAgujeroJ2()
{
	var i;
	
	for(i=0;i<agujerosJ2.length;i++)
	{
		document.getElementById(agujerosJ2[i]+'p').innerHTML="<img class=\"barcoVertical\" src=\"./img/agujero.png\" />";
	}
}

function pintarExplosionJ1()
{
	var i;
	
	for(i=0;i<explosionesJ1.length;i++)
	{
		document.getElementById(explosionesJ1[i]+'p').innerHTML="<img class=\"barcoVertical\" src=\"./img/explosion.png\" />";
	}
}

function pintarExplosionJ2()
{
	var i;
	
	for(i=0;i<explosionesJ2.length;i++)
	{
		document.getElementById(explosionesJ2[i]+'p').innerHTML="<img class=\"barcoVertical\" src=\"./img/explosion.png\" />";
	}
}

function pintarDerribadosJ1()
{
	var i;
	
	for(i=0;i<explosionesJ2.length;i++)
	{
		document.getElementById(explosionesJ2[i]).innerHTML="<img class=\"barcoVertical\" src=\"./img/explosion.png\" />";
	}
}

function pintarDerribadosJ2()
{
	var i;
	
	for(i=0;i<explosionesJ1.length;i++)
	{
		document.getElementById(explosionesJ1[i]).innerHTML="<img class=\"barcoVertical\" src=\"./img/explosion.png\" />";
	}
}

function pintarFallidosJ1()
{
	var i;
	
	for(i=0;i<agujerosJ2.length;i++)
	{
		document.getElementById(agujerosJ2[i]).innerHTML="<img class=\"barcoVertical\" src=\"./img/agujero.png\" />";
	}
}

function pintarFallidosJ2()
{
	var i;
	
	for(i=0;i<agujerosJ1.length;i++)
	{
		document.getElementById(agujerosJ1[i]).innerHTML="<img class=\"barcoVertical\" src=\"./img/agujero.png\" />";
	}
}
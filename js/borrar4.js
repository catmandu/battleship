function borrar4(idCelda,idImg)
{
	var comp="";
	
	if((idCelda.match(/\b0/g))==0||(idCelda.match(/\b1/g))==1||(idCelda.match(/\b2/g))==2||(idCelda.match(/\b3/g))==3)
	{
		comp="0";
	}
	switch(idImg)
		{
			case 'casillaVarr4':
			  borrarSeleccionada4(idCelda,parseInt(idCelda)+10,parseInt(idCelda)+20,parseInt(idCelda)+30);
			break;
			
			case 'casillaVmar4':
			  borrarSeleccionada4(idCelda,comp+(parseInt(idCelda)-10),parseInt(idCelda)+10,parseInt(idCelda)+20);
			break;
			
			case 'casillaVmab4':
			  borrarSeleccionada4(idCelda,(parseInt(idCelda)-10),comp+(parseInt(idCelda)-20),parseInt(idCelda)+10);
			break;
			
			case 'casillaVaba4':
			  borrarSeleccionada4(idCelda,(parseInt(idCelda)-10),parseInt(idCelda)-20,comp+(parseInt(idCelda)-30));
			break;
			
			case 'casillaHizq4':
			   if((idCelda.match(/\b0/g))==0)borrarSeleccionada4(idCelda,comp+(parseInt(idCelda)+1),comp+(parseInt(idCelda)+2),comp+(parseInt(idCelda)+3));
			   else borrarSeleccionada4(idCelda,(parseInt(idCelda)+1),(parseInt(idCelda)+2),(parseInt(idCelda)+3));
			break;
			
			case 'casillaHime4':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada4(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)+1),comp+(parseInt(idCelda)+2));
			  else borrarSeleccionada4(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)+1),(parseInt(idCelda)+2));
			break;
			
			case 'casillaHdme4':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada4(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)-2),comp+(parseInt(idCelda)+1));
			  else borrarSeleccionada4(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)-2),(parseInt(idCelda)+1));
			break;
			
			case 'casillaHder4':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada4(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)-2),comp+(parseInt(idCelda)-3));
			  else borrarSeleccionada4(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)-2),(parseInt(idCelda)-3));
			break;
			
			default:
			alert('nada')
			break;
		}
}

function borrarSeleccionada4(casilla1,casilla2,casilla3,casilla4)
{
	if(casilla2>9){casilla2=parseInt(casilla2);}
	document.getElementById(casilla1).innerHTML="";
	document.getElementById(casilla2).innerHTML="";
	document.getElementById(casilla3).innerHTML="";
	document.getElementById(casilla4).innerHTML="";
}
function borrar3(idCelda,idImg)
{
	var comp="";
	
	if((idCelda.match(/\b0/g))==0||(idCelda.match(/\b1/g))==1||(idCelda.match(/\b2/g))==2)
	{
		comp="0";
	}
	switch(idImg)
		{
			case 'casillaVarr3':
			  borrarSeleccionada3(idCelda,parseInt(idCelda)+10,parseInt(idCelda)+20);
			break;
			
			case 'casillaVmed3':
			  borrarSeleccionada3(idCelda,comp+(parseInt(idCelda)-10),parseInt(idCelda)+10);
			break;
			
			case 'casillaVaba3':
			  borrarSeleccionada3(idCelda,(parseInt(idCelda)-10),comp+(parseInt(idCelda)-20));
			break;
			
			case 'casillaHizq3':
			   if((idCelda.match(/\b0/g))==0)borrarSeleccionada3(idCelda,comp+(parseInt(idCelda)+1),comp+(parseInt(idCelda)+2));
			   else borrarSeleccionada3(idCelda,(parseInt(idCelda)+1),(parseInt(idCelda)+2));
			break;
			
			case 'casillaHmed3':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada3(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)+1));
			  else borrarSeleccionada3(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)+1));
			break;
			
			case 'casillaHder3':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada3(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)-2));
			  else borrarSeleccionada3(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)-2));
			break;
			default:
			alert('nada')
			break;
		}
}

function borrarSeleccionada3(casilla1,casilla2,casilla3)
{
	if(casilla2>9){casilla2=parseInt(casilla2);}
	document.getElementById(casilla1).innerHTML="";
	document.getElementById(casilla2).innerHTML="";
	document.getElementById(casilla3).innerHTML="";
}
function borrar2(idCelda,idImg)
{
	var comp="";
	
	if((idCelda.match(/\b0/g))==0||(idCelda.match(/\b1/g))==1)
	{
		comp="0";
	}
	switch(idImg)
		{
			case 'casillaVarr2':
			  borrarSeleccionada2(idCelda,parseInt(idCelda)+10);
			break;
			
			case 'casillaVaba2':
			  borrarSeleccionada2(idCelda,comp+(parseInt(idCelda)-10));
			break;
			
			case 'casillaHizq2':
			   if((idCelda.match(/\b0/g))==0)borrarSeleccionada2(idCelda,comp+(parseInt(idCelda)+1));
			   else borrarSeleccionada2(idCelda,(parseInt(idCelda)+1));
			break;
						
			case 'casillaHder2':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada2(idCelda,comp+(parseInt(idCelda)-1));
			  else borrarSeleccionada2(idCelda,(parseInt(idCelda)-1));
			break;
			default:
			alert('nada')
			break;
		}
}

function borrarSeleccionada2(casilla1,casilla2)
{
	document.getElementById(casilla1).innerHTML="";
	document.getElementById(casilla2).innerHTML="";
}
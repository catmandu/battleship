function borrar5(idCelda,idImg)
{
	var comp="";
	
	if((idCelda.match(/\b0/g))==0||(idCelda.match(/\b1/g))==1||(idCelda.match(/\b2/g))==2||(idCelda.match(/\b3/g))==3||(idCelda.match(/\b4/g))==4)
	{
		comp="0";
	}
	switch(idImg)
		{
			case 'casillaVarr5':
			  borrarSeleccionada5(idCelda,parseInt(idCelda)+10,parseInt(idCelda)+20,parseInt(idCelda)+30,parseInt(idCelda)+40);
			break;
			
			case 'casillaVmar5':
			  borrarSeleccionada5(idCelda,comp+(parseInt(idCelda)-10),parseInt(idCelda)+10,parseInt(idCelda)+20,parseInt(idCelda)+30);
			break;
			
			case 'casillaVmed5':
			  borrarSeleccionada5(idCelda,(parseInt(idCelda)-10),comp+(parseInt(idCelda)-20),parseInt(idCelda)+10,parseInt(idCelda)+20);
			break;
			
			case 'casillaVmab5':
			  borrarSeleccionada5(idCelda,(parseInt(idCelda)-10),parseInt(idCelda)-20,comp+(parseInt(idCelda)-30),parseInt(idCelda)+10);
			break;
			
			case 'casillaVaba5':
			  borrarSeleccionada5(idCelda,(parseInt(idCelda)-10),parseInt(idCelda)-20,parseInt(idCelda)-30,comp+(parseInt(idCelda)-40));
			break;
			
			case 'casillaHizq5':
			   if((idCelda.match(/\b0/g))==0)borrarSeleccionada5(idCelda,comp+(parseInt(idCelda)+1),comp+(parseInt(idCelda)+2),comp+(parseInt(idCelda)+3),comp+(parseInt(idCelda)+4));
			   else borrarSeleccionada5(idCelda,(parseInt(idCelda)+1),(parseInt(idCelda)+2),(parseInt(idCelda)+3),(parseInt(idCelda)+4));
			break;
			
			case 'casillaHime5':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada5(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)+1),comp+(parseInt(idCelda)+2),comp+(parseInt(idCelda)+3));
			  else borrarSeleccionada5(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)+1),(parseInt(idCelda)+2),(parseInt(idCelda)+3));
			break;
			
			case 'casillaHmed5':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada5(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)-2),comp+(parseInt(idCelda)+1),comp+(parseInt(idCelda)+2));
			  else borrarSeleccionada5(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)-2),(parseInt(idCelda)+1),(parseInt(idCelda)+2));
			break;
			
			case 'casillaHdme5':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada5(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)-2),comp+(parseInt(idCelda)-3),comp+(parseInt(idCelda)+1));
			  else borrarSeleccionada5(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)-2),(parseInt(idCelda)-3),(parseInt(idCelda)+1));
			break;
			
			case 'casillaHder5':
			  if((idCelda.match(/\b0/g))==0)borrarSeleccionada5(idCelda,comp+(parseInt(idCelda)-1),comp+(parseInt(idCelda)-2),comp+(parseInt(idCelda)-3),comp+(parseInt(idCelda)-4));
			  else borrarSeleccionada5(idCelda,(parseInt(idCelda)-1),(parseInt(idCelda)-2),(parseInt(idCelda)-3),(parseInt(idCelda)-4));
			break;
			
			default:
			alert('nada')
			break;
		}
}

function borrarSeleccionada5(casilla1,casilla2,casilla3,casilla4,casilla5)
{
	if(casilla2>9){casilla2=parseInt(casilla2);}
	document.getElementById(casilla1).innerHTML="";
	document.getElementById(casilla2).innerHTML="";
	document.getElementById(casilla3).innerHTML="";
	document.getElementById(casilla4).innerHTML="";
	document.getElementById(casilla5).innerHTML="";
}
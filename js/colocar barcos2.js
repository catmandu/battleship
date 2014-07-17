function colocar2(id)
{
		var entero=parseInt(id);
		
	   if(document.getElementById('orientacion').value=='vertical')
		{
		  if(colocarVertical2(id,entero)){
		  barco2++; agregar2(entero,(entero+10));}
		}
		
		else{
		  if(colocarHorizontal2(id,entero)){
		  barco2++; agregar2(entero,(entero+1));}
		}
}

function colocarHorizontal2(id,entero)
{
	 if(id.match(/9$/g))
	 {
	   alert('No puedes colocar el barco en posicion horizontal desde esta casilla');
	   return false;
     }
	 else
	 {
		 
		if(entero<10)
		{
		   if(document.getElementById(id).innerHTML.match(/img/g)||
		       document.getElementById('0'+(entero+1)).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
			else
			{
		       document.getElementById(id).innerHTML=
			   "<img id=\"casillaHizq2\" class=\"rot270\" src=\"./img/barco arriba 2.jpg\" />";
               
			   document.getElementById('0'+(entero+1)).innerHTML=
			   "<img id=\"casillaHder2\" class=\"rot270\" src=\"./img/barco abajo 2.jpg\" />";
			   return true;
			}
		}
		else{
			if( document.getElementById(id).innerHTML.match(/img/g)||
		       document.getElementById(entero+1).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
			else
			{
		       document.getElementById(id).innerHTML=
			   "<img id=\"casillaHizq2\" class=\"rot270\" src=\"./img/barco arriba 2.jpg\" />";
               
			   document.getElementById(entero+1).innerHTML=
			   "<img id=\"casillaHder2\" class=\"rot270\" src=\"./img/barco abajo 2.jpg\" />";
			   return true;
			}
		}
	 }
}

function colocarVertical2(id,entero)
{
  if(parseInt(id)>89)
  {
    alert('No puedes colocar el barco en posicion vertical desde esta casilla');
	return false;
  }
  else
  {
    if( document.getElementById(id).innerHTML.match(/img/g)||
        document.getElementById(entero+10).innerHTML.match(/img/g))
	{
        alert('Casillas ocupadas');
		return false;
    }
    else
    {
	  document.getElementById(id).innerHTML="<img id=\"casillaVarr2\" class=\"barcoVertical\" src=\"./img/barco arriba 2.jpg\" />";
      document.getElementById(entero+10).innerHTML="<img id=\"casillaVaba2\" class=\"barcoVertical\" src=\"./img/barco abajo 2.jpg\" />";
	  return true;
    }
  }
}
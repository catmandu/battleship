function colocar3(id)
{
		var entero=parseInt(id);
		
	
	   if(document.getElementById('orientacion').value=='vertical')
		{
		  if(colocarVertical3(id,entero)){
		  barco3++;agregar3(entero,(entero+10),(entero+20));}
		}
		
		else{
		  if(colocarHorizontal3(id,entero)){
		  barco3++;agregar3(entero,(entero+1),(entero+2));}
		}
}

function colocarHorizontal3(id,entero)
{
	 if(id.match(/8$/g)||id.match(/9$/g))
	 {
	   alert('No puedes colocar el barco en posicion horizontal desde esta casilla');
	   return false;
     }
	 else
	 {
		if(entero<10)
		{ 
		  if( document.getElementById(id).innerHTML.match(/img/g)||
		         document.getElementById('0'+(entero+1)).innerHTML.match(/img/g)|| 
				  document.getElementById('0'+(entero+2)).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
		  else
		  {	 
		     
			 document.getElementById('0'+entero).innerHTML=
			 "<img id=\"casillaHizq3\" class=\"rot270\" src=\"./img/barco arriba 3.jpg\" />";
			 
             document.getElementById('0'+(entero+1)).innerHTML=
			 "<img id=\"casillaHmed3\" class=\"rot270\" src=\"./img/barco medio 3.jpg\" />";
             
			 document.getElementById('0'+(entero+2)).innerHTML=
			 "<img id=\"casillaHder3\" class=\"rot270\" src=\"./img/barco abajo 3.jpg\" />"; 
			 return true;   
		  }
		}
		else
		{
		   if( document.getElementById(id).innerHTML.match(/img/g)||
		       document.getElementById(entero+1).innerHTML.match(/img/g)|| 
			   document.getElementById(entero+2).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
			else
			{
		       document.getElementById(id).innerHTML=
			   "<img id=\"casillaHizq3\" class=\"rot270\" src=\"./img/barco arriba 3.jpg\" />";
               
			   document.getElementById(entero+1).innerHTML=
			   "<img id=\"casillaHmed3\" class=\"rot270\" src=\"./img/barco medio 3.jpg\" />";
               
			   document.getElementById(entero+2).innerHTML=
			   "<img id=\"casillaHder3\" class=\"rot270\" src=\"./img/barco abajo 3.jpg\" />"; 
			   return true;
			}
		}
	 }
}

function colocarVertical3(id,entero)
{
  if(parseInt(id)>79)
  {
    alert('No puedes colocar el barco en posicion vertical desde esta casilla');
	return false;
  }
  else
  {
    if( document.getElementById(id).innerHTML.match(/img/g)||
        document.getElementById(entero+10).innerHTML.match(/img/g)|| 
	    document.getElementById(entero+20).innerHTML.match(/img/g))
	{
        alert('Casillas ocupadas');
		return false;
    }
    else
    {
	  document.getElementById(id).innerHTML="<img id=\"casillaVarr3\" class=\"barcoVertical\" src=\"./img/barco arriba 3.jpg\" />";
      document.getElementById(entero+10).innerHTML="<img id=\"casillaVmed3\" class=\"barcoVertical\" src=\"./img/barco medio 3.jpg\" />";
      document.getElementById(entero+20).innerHTML="<img id=\"casillaVaba3\" class=\"barcoVertical\" src=\"./img/barco abajo 3.jpg\" />";
	  return true;
					  
    }
  }
}
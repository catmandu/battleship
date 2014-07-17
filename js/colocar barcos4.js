function colocar4(id)
{
		var entero=parseInt(id);

	   if(document.getElementById('orientacion').value=='vertical')
		{
		  if(colocarVertical4(id,entero)){
		  barco4++;agregar4(entero,(entero+10),(entero+20),(entero+30));}
		}
		
		else{
		  if(colocarHorizontal4(id,entero)){
		  barco4++;agregar4(entero,(entero+1),(entero+2),(entero+3));}
		}
}

function colocarHorizontal4(id,entero)
{
	 if(id.match(/7$/g)||id.match(/8$/g)||id.match(/9$/g))
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
				  document.getElementById('0'+(entero+2)).innerHTML.match(/img/g)||
				  document.getElementById('0'+(entero+3)).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
		  else
		  {	
			 document.getElementById('0'+entero).innerHTML=
			  "<img id=\"casillaHizq4\" class=\"rot270\" src=\"./img/barco arriba 4.jpg\" />"
			 
             document.getElementById('0'+(entero+1)).innerHTML=
			 "<img id=\"casillaHime4\" class=\"rot270\" src=\"./img/barco medio arriba 4.jpg\" />";
             
			 document.getElementById('0'+(entero+2)).innerHTML=
			  "<img id=\"casillaHdme4\" class=\"rot270\" src=\"./img/barco medio abajo 4.jpg\" />";
			  
			  document.getElementById('0'+(entero+3)).innerHTML=
			  "<img id=\"casillaHder4\" class=\"rot270\" src=\"./img/barco abajo 4.jpg\" />";    
			  return true;
		  }
		}
		else
		{
		   if( document.getElementById(id).innerHTML.match(/img/g)||
		       document.getElementById(entero+1).innerHTML.match(/img/g)|| 
			   document.getElementById(entero+2).innerHTML.match(/img/g)||
			   document.getElementById(entero+3).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
			else
			{
		       document.getElementById(id).innerHTML=
			   "<img id=\"casillaHizq4\" class=\"rot270\" src=\"./img/barco arriba 4.jpg\" />";
               
			   document.getElementById(entero+1).innerHTML=
			   "<img id=\"casillaHime4\" class=\"rot270\" src=\"./img/barco medio arriba 4.jpg\" />";
               
			   document.getElementById(entero+2).innerHTML=
			   "<img id=\"casillaHdme4\" class=\"rot270\" src=\"./img/barco medio abajo 4.jpg\" />";
			   
			    document.getElementById(entero+3).innerHTML=
			   "<img id=\"casillaHder4\" class=\"rot270\" src=\"./img/barco abajo 4.jpg\" />"; 
			   return true;
			}
		}
	 }
}

function colocarVertical4(id,entero)
{
  if(parseInt(id)>69)
  {
    alert('No puedes colocar el barco en posicion vertical desde esta casilla');
  }
  else
  {
    if( document.getElementById(id).innerHTML.match(/img/g)||
        document.getElementById(entero+10).innerHTML.match(/img/g)|| 
	    document.getElementById(entero+20).innerHTML.match(/img/g)||
		 document.getElementById(entero+30).innerHTML.match(/img/g))
	{
        alert('Casillas ocupadas');
		return false;
    }
    else
    {
	  document.getElementById(id).innerHTML="<img id=\"casillaVarr4\" class=\"barcoVertical\" src=\"./img/barco arriba 4.jpg\" />";
      document.getElementById(entero+10).innerHTML="<img id=\"casillaVmar4\" class=\"barcoVertical\" src=\"./img/barco medio arriba 4.jpg\" />";
      document.getElementById(entero+20).innerHTML="<img id=\"casillaVmab4\" class=\"barcoVertical\" src=\"./img/barco medio abajo 4.jpg\" />";
	  document.getElementById(entero+30).innerHTML="<img id=\"casillaVaba4\" class=\"barcoVertical\" src=\"./img/barco abajo 4.jpg\" />";
      return true;					  
    }
  }
}


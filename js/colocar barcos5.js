function colocar5(id)
{
		var entero=parseInt(id);

	   if(document.getElementById('orientacion').value=='vertical')
		{
		  if(colocarVertical5(id,entero)){
		  barco5++;agregar5(entero,(entero+10),(entero+20),(entero+30),(entero+40));}
		}
		
		else{
		  if(colocarHorizontal5(id,entero)){
		  barco5++;agregar5(entero,(entero+1),(entero+2),(entero+3),(entero+4));}
		}
}

function colocarHorizontal5(id,entero)
{
	 if(id.match(/6$/g)||id.match(/7$/g)||id.match(/8$/g)||id.match(/9$/g))
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
				  document.getElementById('0'+(entero+3)).innerHTML.match(/img/g)||
				  document.getElementById('0'+(entero+4)).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
		  else
		  {	
			 document.getElementById('0'+entero).innerHTML=
			  "<img id=\"casillaHizq5\" class=\"rot270\" src=\"./img/barco arriba 5.jpg\" />"
			 
             document.getElementById('0'+(entero+1)).innerHTML=
			 "<img id=\"casillaHime5\" class=\"rot270\" src=\"./img/barco medio arriba 5.jpg\" />";
             
			 document.getElementById('0'+(entero+2)).innerHTML=
			  "<img id=\"casillaHmed5\" class=\"rot270\" src=\"./img/barco medio 5.jpg\" />";
			 
			 document.getElementById('0'+(entero+3)).innerHTML=
			  "<img id=\"casillaHdme5\" class=\"rot270\" src=\"./img/barco medio abajo 5.jpg\" />";
			  
			  document.getElementById('0'+(entero+4)).innerHTML=
			  "<img id=\"casillaHder5\" class=\"rot270\" src=\"./img/barco abajo 5.jpg\" />";  
			  return true;  
		  }
		}
		else
		{
		   if( document.getElementById(id).innerHTML.match(/img/g)||
		       document.getElementById(entero+1).innerHTML.match(/img/g)|| 
			   document.getElementById(entero+2).innerHTML.match(/img/g)||
			   document.getElementById(entero+3).innerHTML.match(/img/g)||
			   document.getElementById(entero+4).innerHTML.match(/img/g))
				  {
		            alert('Casillas ocupadas');
					return false;
				  }
			else
			{
		       document.getElementById(id).innerHTML=
			   "<img id=\"casillaHizq5\" class=\"rot270\" src=\"./img/barco arriba 5.jpg\" />";
               
			   document.getElementById(entero+1).innerHTML=
			   "<img id=\"casillaHime5\" class=\"rot270\" src=\"./img/barco medio arriba 5.jpg\" />";
               
			   document.getElementById(entero+2).innerHTML=
			   "<img id=\"casillaHmed5\" class=\"rot270\" src=\"./img/barco medio 5.jpg\" />";
			   
			    document.getElementById(entero+3).innerHTML=
			   "<img id=\"casillaHdme5\" class=\"rot270\" src=\"./img/barco medio abajo 5.jpg\" />"; 
			   
			    document.getElementById(entero+4).innerHTML=
			   "<img id=\"casillaHder5\" class=\"rot270\" src=\"./img/barco abajo 5.jpg\" />"; 
			   return true;
			}
		}
	 }
}

function colocarVertical5(id,entero)
{
  if(parseInt(id)>59)
  {
    alert('No puedes colocar el barco en posicion vertical desde esta casilla');
  }
  else
  {
    if( document.getElementById(id).innerHTML.match(/img/g)||
        document.getElementById(entero+10).innerHTML.match(/img/g)|| 
	    document.getElementById(entero+20).innerHTML.match(/img/g)||
		 document.getElementById(entero+30).innerHTML.match(/img/g)||
		 document.getElementById(entero+40).innerHTML.match(/img/g))
	{
        alert('Casillas ocupadas');
		return false;
    }
    else
    {
	  document.getElementById(id).innerHTML="<img id=\"casillaVarr5\" class=\"barcoVertical\" src=\"./img/barco arriba 5.jpg\" />";
      document.getElementById(entero+10).innerHTML="<img id=\"casillaVmar5\" class=\"barcoVertical\" src=\"./img/barco medio arriba 5.jpg\" />";
      document.getElementById(entero+20).innerHTML="<img id=\"casillaVmed5\" class=\"barcoVertical\" src=\"./img/barco medio 5.jpg\" />";
	  document.getElementById(entero+30).innerHTML="<img id=\"casillaVmab5\" class=\"barcoVertical\" src=\"./img/barco medio abajo 5.jpg\" />";
	  document.getElementById(entero+40).innerHTML="<img id=\"casillaVaba5\" class=\"barcoVertical\" src=\"./img/barco abajo 5.jpg\" />";
	  return true;
					  
    }
  }
}
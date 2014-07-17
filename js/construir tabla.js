function tabla()
{
  var i,j;
   document.getElementById('cuadricula').innerHTML="";
   document.getElementById('cuadricula').border="5";
   document.getElementById('cuadricula').style.borderColor="#FF0000";
   for(i=0;i<10;i++)
   {   
	document.getElementById('cuadricula').innerHTML+="<tr id=\""+i+"\"></tr>";
    for(j=0;j<10;j++)
	{
     document.getElementById(i).innerHTML+="<td onClick=\"Click(id);\" id="+i+j+" width=\"45px\" height=\"45px\"></td>"; 
    }		  
   }
   
  if(fase=="jugar"){	  
   document.getElementById('cuadricula2').innerHTML="<tr><td bgcolor=\"#0CC99\" colspan=\"10\" align=\"center\" style=\"color:#C00;\">Haz click en una casilla para atacar a la flota enemiga</td></tr>";
      document.getElementById('cuadricula2').border="5";
	  document.getElementById('cuadricula2').style.borderColor="#FF0000";
   for(i=0;i<10;i++)
   {   
	document.getElementById('cuadricula2').innerHTML+="<tr id=\"tr"+i+"\"></tr>";
    for(j=0;j<10;j++)
	{
     document.getElementById('tr'+i).innerHTML+="<td  onClick=\"disparo(id);\" id=\""+i+j+"p\" width=\"45px\" height=\"45px\"></td>";
    }		  
   }
   document.getElementById('cuadricula').innerHTML+="<tr><td bgcolor=\"#0099CC\" colspan=\"10\" align=\"center\" style=\"color:#C00;\">Cuadricula de flota</td></tr>";
   document.getElementById('cuadricula2').innerHTML+="<tr><td bgcolor=\"#0CC99\" colspan=\"10\" align=\"center\" style=\"color:#C00;\">Cuadricula de ataque</td></tr>";
  }
}

function Click(id)
{
   switch(fase)
   {
	   case 'colocar':
	    if(document.getElementById(id).innerHTML.match(/img/g)!=null)
	    {
		  borrar(id);
	    }
	    else
	    {
		  colocar(id);
	    }
	   break;
	   
	   default:
	     alert('¡Estas en batalla, no puedes mover tus barcos!, haz click en la plantilla de disparos');
	   break;
   }
}

function colocar(id)
{
 switch(document.getElementById('barcos').value)
 {	 
	 case '2':
	  if(barco2==0)colocar2(id);
	  else alert('Ya se colocaron todos los barcos de ese tama\u00F1o');
	 break;
	 
	  case '3':
	  if(barco3<2)colocar3(id);
	  else alert('Ya se colocaron todos los barcos de ese tama\u00F1o');
	 break;
	 
	 case '4':
	  if(barco4==0)colocar4(id);
	  else alert('Ya se colocaron todos los barcos de ese tama\u00F1o');
	 break;
	 
	  case '5':
	  if(barco5==0)colocar5(id);
	  else alert('Ya se colocaron todos los barcos de ese tama\u00F1o');
	 break;
 }
 
}

function borrar(id)
{
 var idImg=document.getElementById(id).innerHTML.substring(9,21);
	
   switch(parseInt(idImg.match(/[2-5]/g)))
   {	 
	 case 2:
		borrar2(id,idImg);
		barco2--;
	 break;
	 
	  case 3:
	    borrar3(id,idImg);
		barco3--;
	 break;
	 
	 case 4:
	    borrar4(id,idImg);
		barco4--;
	 break;
	 
	  case 5:
	    borrar5(id,idImg);
		barco5--;
	 break;
   }
}

function construirTurno()
{
  if(barco2+barco3+barco4+barco5<5)
  {
	  alert('¡aun no haz colocado todos tus barcos!');
  }
  else
  {	
    if(turno=='J1')
    {  
	  turno='J2';
	  barco2=barco3=barco4=barco5=0;
	  tabla();
	  document.getElementById('fase').innerHTML="Colocar barcos: "+turno;
	  alert('Jugador 2, coloca tus barcos');
	  
    }
    else
    {
		 document.getElementById('contenedorOpciones').style.visibility="hidden";
		 turno='J1';
		 fase='jugar';
		 document.getElementById('Fase de batalla');
	     barco2=barco3=barco4=barco5=0;
		 tabla();
		 document.getElementById('fase').innerHTML="Fase de batalla: "+turno;
		 alert('Todo listo para empezar');
		 pintarCasillas();
    }
  }
}
function disparo(id)
{
	if(document.getElementById(id).innerHTML!="")alert('¡Ya disparaste en esa posicion!');
	
	else{
	id=id.substring(0,2);
	switch(turno)
	{
		case 'J1':
		  if(id==barcosJ2.b2[0]||
		      id==barcosJ2.b2[1]||
			  id==barcosJ2.b3a[0]||
			  id==barcosJ2.b3a[1]||
			  id==barcosJ2.b3a[2]||
			  id==barcosJ2.b3b[0]||
			  id==barcosJ2.b3b[1]||
			  id==barcosJ2.b3b[2]||
			  id==barcosJ2.b4[0]||
			  id==barcosJ2.b4[1]||
			  id==barcosJ2.b4[2]||
			  id==barcosJ2.b4[3]||
			  id==barcosJ2.b5[0]||
			  id==barcosJ2.b5[1]||
			  id==barcosJ2.b5[2]||
			  id==barcosJ2.b5[3]||
			  id==barcosJ2.b5[4]){
			    explosionesJ1.push(id);
				alert('Le diste a un barco');
				if(explosionesJ1.length==17){
					alert('Hundiste toda la flota del jugador 2, haz ganado');
					barco2=barco3=barco4=barco5=0;
                    fase='colocar';
                    turno='J1';
					barcosJ1.b2=[0,0];
                    barcosJ1.b3a=[0,0,0];
                    barcosJ1.b3b=[0,0,0];
                    barcosJ1.b4=[0,0,0,0];
                    barcosJ1.b5=[0,0,0,0,0];

                    barcosJ2.b2=[0,0];
                    barcosJ2.b3a=[0,0,0];
                    barcosJ2.b3b=[0,0,0];
                    barcosJ2.b4=[0,0,0,0];
                    barcosJ2.b5=[0,0,0,0,0];
					explosionesJ1=new Array();
                    agujerosJ1=new Array();
                    explosionesJ2=new Array();
                    agujerosJ2=new Array();
					document.getElementById('cuadricula').innerHTML="";
					document.getElementById('cuadricula2').innerHTML="";
					document.getElementById('body').background="./img/battleship.jpg";
					document.getElementById('empezar').style.visibility="visible";
					document.getElementById('fase').style.visibility="hidden";
				}
			  }
		   else{
			   agujerosJ1.push(id);
			   alert('Fallaste');
		   }
		break;
		
		case 'J2':
		  if(id==barcosJ1.b2[0]||
		      id==barcosJ1.b2[1]||
			  id==barcosJ1.b3a[0]||
			  id==barcosJ1.b3a[1]||
			  id==barcosJ1.b3a[2]||
			  id==barcosJ1.b3b[0]||
			  id==barcosJ1.b3b[1]||
			  id==barcosJ1.b3b[2]||
			  id==barcosJ1.b4[0]||
			  id==barcosJ1.b4[1]||
			  id==barcosJ1.b4[2]||
			  id==barcosJ1.b4[3]||
			  id==barcosJ1.b5[0]||
			  id==barcosJ1.b5[1]||
			  id==barcosJ1.b5[2]||
			  id==barcosJ1.b5[3]||
			  id==barcosJ1.b5[4]){
			    explosionesJ2.push(id);
				alert('Le diste a un barco');
				if(explosionesJ2.length==17){
					alert('Hundiste toda la flota del jugador 1, haz ganado');
					barco2=barco3=barco4=barco5=0;
                    fase='colocar';
                    turno='J1';
					barcosJ1.b2=[0,0];
                    barcosJ1.b3a=[0,0,0];
                    barcosJ1.b3b=[0,0,0];
                    barcosJ1.b4=[0,0,0,0];
                    barcosJ1.b5=[0,0,0,0,0];

                    barcosJ2.b2=[0,0];
                    barcosJ2.b3a=[0,0,0];
                    barcosJ2.b3b=[0,0,0];
                    barcosJ2.b4=[0,0,0,0];
                    barcosJ2.b5=[0,0,0,0,0];
					explosionesJ1=new Array();
                    agujerosJ1=new Array();
                    explosionesJ2=new Array();
                    agujerosJ2=new Array();
					document.getElementById('cuadricula').innerHTML="";
					document.getElementById('cuadricula2').innerHTML="";
					document.getElementById('body').background="./img/battleship.jpg";
					document.getElementById('empezar').style.visibility="visible";
					document.getElementById('fase').style.visibility="hidden";
				}
			  }
		   else{
			   agujerosJ2.push(id);
			   alert('Fallaste');
		   }
		break;
	}
	if(fase=='jugar'){
	 if(turno=='J1')turno='J2';
		  else turno='J1';
		  
		  tabla();
		  document.getElementById('fase').innerHTML="Fase de batalla: "+turno;
		  alert('Turno de '+turno);
		  pintarCasillas();}
	}
}
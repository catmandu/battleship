function agregar2(casilla1,casilla2)
{
  if(casilla1<10)casilla1='0'+casilla1;
  if(casilla2<10)casilla2='0'+casilla2;
  
  switch(turno)
  {
	case 'J1':
     barcosJ1.b2[0]=casilla1;
	 barcosJ1.b2[1]=casilla2;
    break;
	  
    case 'J2':
     barcosJ2.b2[0]=casilla1;
	 barcosJ2.b2[1]=casilla2;
    break;
  }
}

function agregar3(casilla1,casilla2,casilla3)
{
  if(casilla1<10)casilla1='0'+casilla1;
  if(casilla2<10)casilla2='0'+casilla2;
  if(casilla3<10)casilla3='0'+casilla3;
  	
  switch(turno)
  {
	case 'J1':
      if(barco3<2){
	   barcosJ1.b3a[0]=casilla1;
	   barcosJ1.b3a[1]=casilla2;
	   barcosJ1.b3a[2]=casilla3;
	  }
	  else{
	   barcosJ1.b3b[0]=casilla1;
	   barcosJ1.b3b[1]=casilla2;
	   barcosJ1.b3b[2]=casilla3;
	  }
    break;
	  
	  
    case 'J2':
      if(barco3<2){
	   barcosJ2.b3a[0]=casilla1;
	   barcosJ2.b3a[1]=casilla2;
	   barcosJ2.b3a[2]=casilla3;
	  }
	  else{
	   barcosJ2.b3b[0]=casilla1;
	   barcosJ2.b3b[1]=casilla2;
	   barcosJ2.b3b[2]=casilla3;
	  }
    break;
  }
}

function agregar4(casilla1,casilla2,casilla3,casilla4)
{
  if(casilla1<10)casilla1='0'+casilla1;
  if(casilla2<10)casilla2='0'+casilla2;
  if(casilla3<10)casilla3='0'+casilla3;
  if(casilla4<10)casilla4='0'+casilla4;
	
	switch(turno)
  {
	case 'J1':
       barcosJ1.b4[0]=casilla1;
	   barcosJ1.b4[1]=casilla2;
	   barcosJ1.b4[2]=casilla3;
	   barcosJ1.b4[3]=casilla4;
    break;
	  
    case 'J2':
       barcosJ2.b4[0]=casilla1;
	   barcosJ2.b4[1]=casilla2;
	   barcosJ2.b4[2]=casilla3;
	   barcosJ2.b4[3]=casilla4;
    break;
  }
}

function agregar5(casilla1,casilla2,casilla3,casilla4,casilla5)
{
  if(casilla1<10)casilla1='0'+casilla1;
  if(casilla2<10)casilla2='0'+casilla2;
  if(casilla3<10)casilla3='0'+casilla3;
  if(casilla4<10)casilla4='0'+casilla4;
  if(casilla5<10)casilla5='0'+casilla5;
	
	switch(turno)
  {
	case 'J1':
       barcosJ1.b5[0]=casilla1;
	   barcosJ1.b5[1]=casilla2;
	   barcosJ1.b5[2]=casilla3;
	   barcosJ1.b5[3]=casilla4;
	   barcosJ1.b5[4]=casilla5;
    break;
	  
    case 'J2':
       barcosJ2.b5[0]=casilla1;
	   barcosJ2.b5[1]=casilla2;
	   barcosJ2.b5[2]=casilla3;
	   barcosJ2.b5[3]=casilla4;
	   barcosJ2.b5[4]=casilla5;
    break;
  }
}
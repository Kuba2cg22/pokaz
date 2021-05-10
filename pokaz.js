var numer = Math.floor(Math.random()*7)+1;

var timer1 = 0; 
var timer2 = 0; 

function ustawslajd(nrslajdu){
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu-1;


    schowaj();
    setTimeout("rozpocznij()", 500)
}

function schowaj(){
    $("#slider").fadeOut(1000);
}

function rozpocznij()
{
   
    numer++; 
    if(numer>7) numer = 1;

    var plik = "<img src=\"zdj" + numer + ".png\" width = 550px height = 325px>";     

    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(1000);
    

    timer1 = setTimeout("rozpocznij()",5000);
    timer2 = setTimeout("schowaj()",4000);
       
}

function stop(){
    clearTimeout(timer1);
    clearTimeout(timer2);
      
    setTimeout("rozpocznij()", 5000000000)
}





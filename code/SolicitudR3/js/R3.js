iniciar();
function iniciar() { 
   var boton=document.getElementById('boton'); 
   boton.addEventListener('click', presionar, false); 
} 
/*
function presionar() { 
   var video=document.getElementById('video'); 
   video.play(); 
} 
*/
window.addEventListener('load', iniciar, false); 

function presionar() { 
    if(!medio.paused && !medio.ended)   { 
       medio.pause(); 
       reproducir.value='Reproducir';   
    } 
    else 
    { 
       medio.play(); 
       reproducir.value='Pausa';   
    } 
 } 
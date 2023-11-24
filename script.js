
let accion = document.querySelector(".boton");
let cartel= document.querySelector(".cartel")
let michelle=document.querySelector(".name-date-button")

accion.addEventListener("mouseover", probar); 

function probar(){
    
    var anchoVentana = window.innerWidth 
    
    if (anchoVentana < 1440) {
        cartel.style.display = "block";
        michelle.style.display = "none";
    }
    else{
        cartel.style.display = "block";
    }

}


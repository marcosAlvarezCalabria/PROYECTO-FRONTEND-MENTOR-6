let accion = document.querySelector(".boton");
let cartel = document.querySelector(".cartel");
let michelle = document.querySelector(".name-date-button");
let enlace1 = document.querySelector("#enlace1");
let enlace2 = document.querySelector("#enlace2");
let enlace3 = document.querySelector("#enlace3");

accion.addEventListener("mouseover", probar);

function probar() {
  var anchoVentana = window.innerWidth;

  if (anchoVentana < 1140) {
    cartel.style.display = "block";
    michelle.style.display = "none";
  } else {
    cartel.style.display = "block";
  }
}

enlace1.addEventListener("click", (event) => {
  
    michelle.style.display = "";
    cartel.style.display = "none";
    console.log("hhhhhhj")
  
})
enlace2.addEventListener("click", (event) => {
  
    michelle.style.display = "";
    cartel.style.display = "none";
    console.log("hhhhhhj")
  
})
enlace3.addEventListener("click", (event) => {
  
    michelle.style.display = "";
    cartel.style.display = "none";
    console.log("hhhhhhj")
  
})
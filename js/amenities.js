
//| **********************************************************************
//INICIAN LOS EFECTOS GENERALES*************************
//| **********************************************************************

// Efecto para el menú hamburguesa

const navToggle = document.querySelector(".btn");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});



// SCROLL DOWN ESCONDE EL NAV BAR Y SCROLL UP LO MUESTRA


var posicionInicial = window.pageYOffset; // me dice el numero en que nos pocisionamos en la página
//alert(posicionInicial) // imprime la pocision actual del scroll
window.onscroll = function() { // el evento scroll ejecuta hay scroll en la  página
var pocisionActual = window.pageYOffset; //me da el número de pocisión en donde se encuentra el scroll
  if (posicionInicial > pocisionActual) { // cada vez que se mueve el scroll se va a preguntar
    document.getElementById("navbar").style.top = "0"; // la primera condición se cumple y el menú se muestra
  } else {
    document.getElementById("navbar").style.top = "-50px"; // cuando la condición no se cumple,
    //el navbar se sale de la pantalla -50px hacia arriba
  }
  posicionInicial = pocisionActual; // Esto quiere decir que cada vez que se cambia de pocisión al scroll
  // se le da un nuevo valor a pocisionInicial para que se pueda comparar
}

//| **********************************************************************
//FINALIZAN LOS EFECTOS GENERALES   *************************
//| **********************************************************************
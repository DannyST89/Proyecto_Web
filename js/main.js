
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



// EFECTO DE MAQUINA DE ESCRIBIR AL INICIO DE LA PÁGINA
var showtext = document.getElementById('typewriter');
var phrase = ['Unconventional Stay'];
var takenWord = []; // guarda las palabras por separado
var i = 0;
var j = 0;

function textwriter (){
 //imprime en el html cada letra por separado
  showtext.innerHTML = takenWord.join('');// Utilizamos join para quitar las comas
  if (i < phrase.length){ // si i = 0 es menor  que phrase.legth que es igual a 3
    if(j < phrase[i].length){ //
     // se le esta diciendo al takenword que ingrese a phrase en la pocision 0 que será la primera frase del arreglo
     // y estando en la pocisión 0 nos ubicamos en el texto y tomamos la letra en la pocision 0
      takenWord.pphrasush(e[i][j]);
      j++
    }
    if(j == phrase[i].length){
      i++
    }
  }
  // se inicia la función después de 150 milisegundos
  setTimeout(textwriter,150); // en este caso funciona como un iterador o recursión
}
textwriter();// llamada de la función

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

  $(function(){ // una funcion en anonima en JQuery espera que el DOM se carge
    $('#mostrar').click(function(){ // cuando se da click
        $(".showtxt").show(2000);
    })
  });

  $(function(){ // una funcion en anonima en JQuery espera que el DOM se carge
    $('#mostrar').click(function(){
        $(this).hide(2000);
    })
  });

  $(function(){ // una funcion en anonima en JQuery espera que el DOM se carge
    $('#mostrar').click(function(){
      $("#ocultar").show(2000);
        
    }) 
  });

  $(function(){ // una funcion en anonima en JQuery espera que el DOM se carge
    $('#ocultar').click(function(){
        $(this).hide(2000);
        $(".showtxt").hide(2000);
    })
  });

//  SE CREA UNA VENTANA EMERGENTE

var windowAlert = ()=> {

Swal.fire({
  title: 'Enjoy Year-End Specials', // titulo de la alerta
  imageUrl: 'images/Logo full color.png', // se agrega el logo a la alerta
  html: // link y mensaje secundario 
    'Send a message ' +
    '<a href="http://wa.me/50686430592?text=I%20would%20like%20more%20information!" <i class="fab fa-whatsapp"> Whatsapp</a> ' +
    ' and recibe more information ',
  showCloseButton: true, // se agregan los botones
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
})
}
setTimeout(windowAlert,15000); // espera 10 segundos para mostrarse la función

// MENSAJE EN LOS CARDS AL HACER MOUSEOVER
// efecto card-one
  $('.card-one').on({
    mouseover:function(){
      $(".uno").show();

    $(".uno").css({
      'color' : 'green',
      'transition' : '0.10s ease'
    });
    }    
    
  });

  $('.card-one').on({
    mouseout:function(){
      $(".uno").hide();

    $(".uno").css({
      
      'transition' : '0.7s ease'
    });
    }    
    
  });
  //CARD TWO
  
  $('.card-two').on({
    mouseover:function(){
      $(".dos").show();

    $(".dos").css({
      'color' : 'green',
      'transition' : '0.7s ease'
    });
    }    
    
  });

  $('.card-two').on({
    mouseout:function(){
      $(".dos").hide();

    $("dos").css({
      
      'transition' : '0.7s ease'
    });
    }    
    
  });
  
  // card-three

  $('.card-three').on({
    mouseover:function(){
      $(".tres").show();

    $(".tres").css({
      'color' : 'green',
      'transition' : '0.7s ease'
    });
    }    
    
  });

  $('.card-three').on({
    mouseout:function(){
      $(".tres").hide();

    $(".tres").css({
   
      'transition' : '0.7s ease'
    });
    }    
    
  });
// EL CORAZON CAMBIA DE COLOR VERDE A COLOR ROJO CUANDO SE DA CLICK

$('.cards').click(function(){ // cuando se da click en el botón 
  $('.fas').css({ // con la clase fas 
      "color" : "red", // cambia a color rojo
  });       
}); 

// MUESTRA LAS POLITICAS DE USO DE LA PÁGINA(POP-UP)
$(function(){ 
  $('.salir').click(function(){ // cuando se da click en el botón 
    $('.popUp').hide(); // esconde el div con la ventana emergente 
    
  }); 
});





//BOTONES DE REDES SOCIALES VERTICALES


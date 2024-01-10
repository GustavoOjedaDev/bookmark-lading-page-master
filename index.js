    // Selecciona la imagen
var imagen = document.getElementById('miImagen');

// Función para cambiar la imagen
function cambiarImagen() {
    // Comprueba el ancho de la ventana
    if (window.innerWidth < 600) {
        // Si el ancho de la ventana es 600px o menos, cambia la imagen
        imagen.src = '../assets/images/logo-bookmark.svg';
    } else {
        // Si el ancho de la ventana es mayor que 600px, usa la imagen original
        imagen.src = '../assets/images/logo-bookmark.svg';
    }
}
// Escucha el evento de cambio de tamaño de la ventana
window.addEventListener('resize', cambiarImagen);
// Llama a la función cambiarImagen cuando la página se carga por primera vez
cambiarImagen();

const iconBar = document.querySelector(".icon-bar");
const navSectionItems = document.querySelector(".nav .section-items");
var imagen = document.getElementById('miImagen'); // Selecciona la imagen del logo
const icon = document.querySelector(".icon-bar i");  // Selecciona el ícono dentro del botón


iconBar.addEventListener("click", () => {
navSectionItems.classList.toggle("section-items_visible");
if (miImagen.getAttribute("src") === "../assets/images/logo-bookmark.svg") {
        miImagen.setAttribute("src", "../assets/images/logo-bookmarkEDIT.svg");  // Cambia a la nueva ruta
    } else {
        miImagen.setAttribute("src", "../assets/images/logo-bookmark.svg");  // Cambia a la ruta original
    }
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");  // Cambia a otro ícono
        icon.style.color = "white";  // Cambia el color a blanco
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");  // Cambia al ícono original
        icon.style.color = "hsla(228, 81%, 15%, 0.9)";  // Cambia el color a azul
    }
});


// Selecciona todos los elementos 'a' dentro de '.opciones-features'
let opciones = document.querySelectorAll('.opciones-features a');

// Selecciona todos los divs '.opcion1', '.opcion2', '.opcion3'
let divs = [document.querySelector('.opcion1'), document.querySelector('.opcion2'), document.querySelector('.opcion3')];

// Añade un event listener a cada elemento 'a'
for (let i = 0; i < opciones.length; i++) {
    opciones[i].addEventListener('click', function() {
        // Cuando se haga clic en un elemento 'a', añade la clase 'hide' a todos los divs
        for (let div of divs) {
            div.classList.add('hide');
        }
        // Luego, elimina la clase 'hide' del div correspondiente al elemento 'a' en el que se hizo clic
        divs[i].classList.remove('hide');
    });
}

let qAsk = document.querySelectorAll('.asked .questions .question');

qAsk.forEach((el) => {
    el.onclick = function(){
        el.classList.toggle('focus')
    }
})
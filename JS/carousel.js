let slideIndex = 1;

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
});

// Funcion para mover las diapositivas
function moveSlide(n) {
    showSlide(slideIndex += n);
}


// funcion para mostrar la diapositiva actual
function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    // bucle para volver al inicio
    if (n > slides.length) {
        slideIndex = 1;
    }

    // bucle para ir al final
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Desactivar todos los puntos
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Mostrar la diapositiva actual
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add("active");
    }


}


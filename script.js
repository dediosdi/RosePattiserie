let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

// Mostrar la primera reseña al cargar la página
reviews[currentReview].classList.add('show'); // Añadimos la clase para mostrarla

// Función para mostrar la siguiente reseña con un efecto suave
function showNextReview() {
    // Ocultar la reseña actual
    reviews[currentReview].classList.remove('show');
    
    // Avanzar a la siguiente reseña
    currentReview = (currentReview + 1) % totalReviews;
    
    // Mostrar la siguiente reseña
    reviews[currentReview].classList.add('show');
}

// Cambiar reseña cada 10 segundos
setInterval(showNextReview, 10000);


// Array de contenidos para actualizar dinámicamente
const contents = [
    {
        left: `
            <h1>Traemos Felicidad con cada uno de nuestros platos</h1>
            <p>En Rose priorizamos la calidad de nuestros productos para poder ofrecerles a nuestros clientes lo mejor.</p>
            <button>Ver Menú</button>
        `,
        rightImage: "images/brownie.png"
    },
    {
        left: `
            <h1>Delicias frescas para cada momento</h1>
            <p>Explora nuestros chipá artesanales, hechos con amor y dedicación.</p>
            <button>Descubrir Más</button>
        `,
        rightImage: "images/chipa.png"
    },
    {
        left: `
            <h1>Postres que cuentan historias</h1>
            <p>Disfruta de nuestra variedad de tartas, brownies y mucho más.</p>
            <button>Ver Postres</button>
        `,
        rightImage: "images/makaron.png"
    },  
    {
        left: `
            <h1>Postres que cuentan historias</h1>
            <p>Disfruta de nuestra variedad de tartas, brownies y mucho más.</p>
            <button>Ver Tortas</button>
        `,
        rightImage: "images/tortafrutas.png"
    },
    
];

let currentIndex = 0; // Índice del contenido actual

function updateContent() {
    const leftColumn = document.querySelector(".left-column");
    const rightImage = document.querySelector(".image-container img");

    // Aplicar animación de salida
    leftColumn.classList.add("fade-out");
    rightImage.classList.add("fade-out");

    setTimeout(() => {
        // Cambiar contenido después de que termine la animación de salida
        leftColumn.innerHTML = contents[currentIndex].left;
        rightImage.src = contents[currentIndex].rightImage;

        // Aplicar animación de entrada
        leftColumn.classList.remove("fade-out");
        leftColumn.classList.add("fade-in");

        rightImage.classList.remove("fade-out");
        rightImage.classList.add("fade-in");

        // Limpiar clases después de la animación
        setTimeout(() => {
            leftColumn.classList.remove("fade-in");
            rightImage.classList.remove("fade-in");
        }, 1000); // Duración de la animación (1s)
    }, 1000); // Tiempo de la animación de salida

    // Avanzar al siguiente contenido
    currentIndex = (currentIndex + 1) % contents.length;
}

// Cambiar contenido cada 10 segundos
setInterval(updateContent, 10000);

// Ejecutar una actualización inicial
updateContent();



//Galeria de miniaturas en la seccion principal
let currentScrollPosition = 0;
const scrollAmount = 300;

function scrollGallery(direction) {
    const gallery = document.querySelector('.album-gallery');
    currentScrollPosition += direction * scrollAmount;
    gallery.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth',
    });
}

function expandImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}





//Galeria de los mejores platos
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close');
    const images = document.querySelectorAll('.gallery-img');

    let currentIndex = 0; // Índice actual para el carrusel
    const visibleCards = 4; // Número de tarjetas visibles
    const cardWidth = document.querySelector('.card').offsetWidth + 15; // Ancho total de una tarjeta

    // Control del carrusel principal
    rightArrow.addEventListener('click', () => {
        const maxIndex = track.children.length - visibleCards;
        if (currentIndex < maxIndex) {
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    // Modal variables
    let modalIndex = 0; // Índice actual para el modal

    // Abrir modal al hacer clic en una imagen
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modalIndex = index;
            modalImage.src = img.src;
            modal.classList.remove('hidden');
        });
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Cambiar imagen dentro del modal con flechas
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'ArrowRight') {
                // Avanzar a la siguiente imagen
                modalIndex = (modalIndex + 1) % images.length;
                modalImage.src = images[modalIndex].src;
            } else if (e.key === 'ArrowLeft') {
                // Retroceder a la imagen anterior
                modalIndex = (modalIndex - 1 + images.length) % images.length;
                modalImage.src = images[modalIndex].src;
            } else if (e.key === 'Escape') {
                // Cerrar modal con "Escape"
                modal.classList.add('hidden');
            }
        }
    });
});


// Toggle Mobile Menu
// Script para alternar la visibilidad del menú hamburguesa
// Script para alternar la visibilidad del menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});


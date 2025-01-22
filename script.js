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
    }
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






//menu hamburguesa
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
});

// Este script asume que el archivo animales_extintos.js ya fue cargado antes en el HTML
// Ese archivo debe definir un array global llamado `animalesExtintos`

document.addEventListener('DOMContentLoaded', () => {
  // Obtenemos referencias a los elementos del carrusel
  const carousel = document.getElementById('extinctCarousel'); // contenedor principal del carrusel
  const prevBtn = document.querySelector('.carousel-button-extinct.prev'); // botón izquierdo
  const nextBtn = document.querySelector('.carousel-button-extinct.next'); // botón derecho

  // Verifica que el array animalesExtintos exista y tenga datos válidos
  if (!Array.isArray(animalesExtintos) || animalesExtintos.length === 0) {
    console.warn("No se encontraron animales extintos.");
    return; // Detiene la ejecución si no hay datos
  }

  // Recorre cada animal extinto y crea una tarjeta con su información
  animalesExtintos.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'species-card'; // Clase CSS común para especies

    // Contenido HTML de la tarjeta
    card.innerHTML = `
      <img src="${animal.imagen}" alt="${animal.nombre_comun}" class="species-img">
      <div class="species-info">
        <h3 class="species-name">${animal.nombre_comun}</h3>
        <p class="species-scientific">${animal.nombre_cientifico}</p>
        <p><span class="status">Año de extinción:</span> ${animal.anio_extincion}</p>
        <p><span class="status">Lugar:</span> ${animal.lugar}</p>
        <p class="description">${animal.descripcion}</p>
      </div>
    `;

    // Agrega la tarjeta al carrusel
    carousel.appendChild(card);
  });

  // Configura la navegación con flechas si existen los botones y el contenedor
  if (prevBtn && nextBtn && carousel) {
    // Botón para mover el carrusel hacia la izquierda
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -320, behavior: 'smooth' }); // desplaza horizontalmente 320px a la izquierda
    });

    // Botón para mover el carrusel hacia la derecha
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 320, behavior: 'smooth' }); // desplaza horizontalmente 320px a la derecha
    });
  }
});

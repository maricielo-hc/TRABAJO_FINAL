// Suponiendo que tienes un array llamado 'animalesExtintos' en animales_extintos.js
// Este script debe estar cargado después de ese archivo en tu HTML

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('extinctCarousel');
  const prevBtn = document.querySelector('.carousel-button-extinct.prev');
  const nextBtn = document.querySelector('.carousel-button-extinct.next');

  // Verificamos que el array animalesExtintos exista
  if (!Array.isArray(animalesExtintos) || animalesExtintos.length === 0) {
    console.warn("No se encontraron animales extintos.");
    return;
  }

  // Cargamos las tarjetas en el carrusel
  animalesExtintos.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'species-card';

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

    carousel.appendChild(card);
  });

  // Funcionalidad de flechas para mover el carrusel
  if (prevBtn && nextBtn && carousel) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -320, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }
});

// Espera a que todo el DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
  // Referencias a los elementos del DOM
  const carousel = document.getElementById('speciesCarousel'); // contenedor de las tarjetas de especies
  const prevButton = document.querySelector('.prev');          // botón de navegación izquierda
  const nextButton = document.querySelector('.next');          // botón de navegación derecha
  const searchInput = document.getElementById('searchInput');  // campo de búsqueda
  const searchButton = document.getElementById('searchButton'); // botón de búsqueda

  // Diccionario de descripciones genéricas en inglés y su traducción al español
  const descripcionesGenericas = {
    "species of mammal": "especie de mamífero",
    "species of bird": "especie de ave",
    "species of reptile": "especie de reptil",
    "species of amphibian": "especie de anfibio",
    "species of fish": "especie de pez",
    "species of insect": "especie de insecto",
    "species of snail": "especie de caracol",
    "species of beetle": "especie de escarabajo",
    "species of butterfly": "especie de mariposa",
    "species of crustacean": "especie de crustáceo",
    "species of coral": "especie de coral",
    "species of arachnid": "especie de arácnido",
    "species of cnidarian": "especie de cnidario",
    "species of mollusc": "especie de molusco",
    "species of mollusk": "especie de molusco",
    "species of spider": "especie de araña",
    "species of animal": "especie de animal",
    "subspecies of butterfly": "subespecie de mariposa",
    "subspecies of beetle": "subespecie de escarabajo",
    "subspecies of insect": "subespecie de insecto",
    "subspecies of arachnid": "subespecie de arácnido",
    "species of arachnida": "especie de arácnido",
    "species of cnidaria": "especie de cnidario",
    "species of damselfly": "especie de caballito del diablo"
  };

  // Función que corrige descripciones genéricas si coinciden con alguna del diccionario
  function corregirDescripcion(desc) {
    if (!desc) return "";
    const normalizada = desc.trim().toLowerCase();
    return descripcionesGenericas[normalizada] || desc;
  }

  // Función que crea y muestra todas las tarjetas de especies en el carrusel
  function renderSpeciesCards(speciesArray) {
    carousel.innerHTML = ''; // limpia el carrusel
    speciesArray.forEach(species => {
      const card = document.createElement('div');
      card.className = 'species-card'; // estilo CSS para cada tarjeta

      // Aplica corrección de descripción si aplica
      const descripcionCorregida = corregirDescripcion(species.descripcion);

      // Estructura HTML de la tarjeta de especie
      card.innerHTML = `
        <img src="${species.imagen}" alt="${species.nombre_comun_es || species.nombre_comun}" class="species-img">
        <div class="species-info">
          <h3 class="species-name">${species.nombre_comun_es || species.nombre_comun}</h3>
          <p class="species-scientific">${species.nombre_cientifico}</p>
          <span class="species-status">${species.estado}</span>
          <p class="species-description">${descripcionCorregida}</p>
        </div>
      `;

      // Agrega la tarjeta al carrusel
      carousel.appendChild(card);
    });
  }

  // Función de búsqueda: filtra especies por nombre común o científico
  function searchSpecies() {
    const term = searchInput.value.toLowerCase();
    const results = term
      ? especies.filter(s =>
          (s.nombre_comun_es && s.nombre_comun_es.toLowerCase().includes(term)) ||
          s.nombre_comun.toLowerCase().includes(term) ||
          s.nombre_cientifico.toLowerCase().includes(term))
      : [...especies]; // si no hay término, muestra todas

    renderSpeciesCards(results); // muestra los resultados filtrados
  }

  // Eventos para activar búsqueda
  searchButton.addEventListener('click', searchSpecies);
  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') searchSpecies();
  });

  // Eventos para mover el carrusel hacia la izquierda o derecha
  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Mostrar todas las especies al cargar la página
  renderSpeciesCards(especies);
});

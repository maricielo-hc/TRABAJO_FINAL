document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('speciesCarousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

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

  function corregirDescripcion(desc) {
    if (!desc) return "";
    const normalizada = desc.trim().toLowerCase();
    return descripcionesGenericas[normalizada] || desc;
  }

  function renderSpeciesCards(speciesArray) {
    carousel.innerHTML = '';
    speciesArray.forEach(species => {
      const card = document.createElement('div');
      card.className = 'species-card';

      const descripcionCorregida = corregirDescripcion(species.descripcion);

      card.innerHTML = `
        <img src="${species.imagen}" alt="${species.nombre_comun_es || species.nombre_comun}" class="species-img">
        <div class="species-info">
          <h3 class="species-name">${species.nombre_comun_es || species.nombre_comun}</h3>
          <p class="species-scientific">${species.nombre_cientifico}</p>
          <span class="species-status">${species.estado}</span>
          <p class="species-description">${descripcionCorregida}</p>
        </div>
      `;

      carousel.appendChild(card);
    });
  }

  function searchSpecies() {
    const term = searchInput.value.toLowerCase();
    const results = term
      ? especies.filter(s =>
          (s.nombre_comun_es && s.nombre_comun_es.toLowerCase().includes(term)) ||
          s.nombre_comun.toLowerCase().includes(term) ||
          s.nombre_cientifico.toLowerCase().includes(term))
      : [...especies];

    renderSpeciesCards(results);
  }

  searchButton.addEventListener('click', searchSpecies);
  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') searchSpecies();
  });

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  renderSpeciesCards(especies);
});

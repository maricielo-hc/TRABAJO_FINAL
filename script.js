// Traducciones de estado
const traduccionesEstado = {
    "Endangered": "En Peligro",
    "Threatened": "Vulnerable",
    "XN": "Población experimental no esencial"
};

// Traducción de frases comunes en descripción
function traducirDescripcion(texto) {
    const reemplazos = {
        "species of mammal": "especie de mamífero",
        "subspecies of mammal": "subespecie de mamífero",
        "species of extinct mammal": "especie de mamífero extinto",
        "species of babirusa": "especie de babirusa",
        "species of deer": "especie de ciervo",
        "species of primate": "especie de primate",
        "species of the ungulates": "especie de ungulado"
    };

    let resultado = texto;
    for (let en in reemplazos) {
        resultado = resultado.replace(en, reemplazos[en]);
    }
    return resultado;
}

// Asigna clase según estado
function getClaseEstado(estado) {
    if (estado === "En Peligro") return "estado-en-peligro";
    if (estado === "Vulnerable") return "estado-vulnerable";
    if (estado === "Población experimental no esencial") return "estado-poblacion";
    return "";
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('speciesCarousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function renderSpeciesCards(speciesArray) {
        carousel.innerHTML = '';

        speciesArray.forEach(species => {
            const card = document.createElement('div');
            card.className = 'species-card';

            const estadoTraducido = traduccionesEstado[species.estado] || species.estado;
            const claseEstado = getClaseEstado(estadoTraducido);
            const descripcionTraducida = traducirDescripcion(species.descripcion);

            card.innerHTML = `
                <img src="${species.imagen}" alt="${species.nombre_comun}" class="species-img">
                <div class="species-info">
                    <h3 class="species-name">${species.nombre_comun}</h3>
                    <p class="species-scientific">${species.nombre_cientifico}</p>
                    <span class="species-status ${claseEstado}">${estadoTraducido}</span>
                    <p class="species-description">${descripcionTraducida}</p>
                </div>
            `;

            carousel.appendChild(card);
        });
    }

    function searchSpecies() {
        const term = searchInput.value.toLowerCase();
        const results = term
            ? especies.filter(s =>
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


document.addEventListener('DOMContentLoaded', function () {
  const lista = document.getElementById('articlesList');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  function renderArticulos(array) {
    lista.innerHTML = '';
    if (array.length === 0) {
      lista.innerHTML = '<p>No se encontraron artículos.</p>';
      return;
    }

    array.forEach(art => {
      const card = document.createElement('div');
      card.className = 'article-card';

      card.innerHTML = `
        <img src="${art.imagen}" alt="${art.titulo}" class="article-image">
        <div class="article-info">
          <h3 class="article-title">${art.titulo}</h3>
          <p class="article-date">${art.fecha}</p>
          <a href="${art.url}" target="_blank" class="article-link">Leer más</a>
        </div>
      `;

      lista.appendChild(card);
    });
  }

  function searchArticles() {
    const term = searchInput.value.trim().toLowerCase();
    const resultados = term
      ? articulos.filter(a =>
          a.titulo.toLowerCase().includes(term)
        )
      : [...articulos];

    renderArticulos(resultados);
  }

  searchButton.addEventListener('click', searchArticles);
  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') searchArticles();
  });

  // Mostrar todos al inicio
  renderArticulos(articulos);
});

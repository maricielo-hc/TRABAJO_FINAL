// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

  // Referencias a elementos del HTML
  const lista = document.getElementById('articlesList');     // Contenedor donde se mostrarán los artículos
  const searchInput = document.getElementById('searchInput'); // Input de búsqueda
  const searchButton = document.getElementById('searchButton'); // Botón de búsqueda

  // === Función para mostrar artículos en pantalla ===
  function renderArticulos(array) {
    lista.innerHTML = '';  // Limpiar resultados anteriores

    // Si el arreglo está vacío, mostrar mensaje
    if (array.length === 0) {
      lista.innerHTML = '<p>No se encontraron artículos.</p>';
      return;
    }

    // Recorrer cada artículo y generar una "tarjeta"
    array.forEach(art => {
      const card = document.createElement('div');
      card.className = 'article-card'; // Clase CSS para estilos

      // Estructura HTML de cada artículo
      card.innerHTML = `
        <img src="${art.imagen}" alt="${art.titulo}" class="article-image">
        <div class="article-info">
          <h3 class="article-title">${art.titulo}</h3>
          <p class="article-date">${art.fecha}</p>
          <a href="${art.url}" target="_blank" class="article-link">Leer más</a>
        </div>
      `;

      // Agregar la tarjeta al contenedor principal
      lista.appendChild(card);
    });
  }

  // === Función para buscar artículos por texto ===
  function searchArticles() {
    const term = searchInput.value.trim().toLowerCase();  // Obtener el término de búsqueda en minúsculas

    // Si hay término de búsqueda, filtra; si no, muestra todos
    const resultados = term
      ? articulos.filter(a =>
          a.titulo.toLowerCase().includes(term)
        )
      : [...articulos];  // Copia del arreglo original

    // Mostrar artículos filtrados
    renderArticulos(resultados);
  }

  // === Evento: clic en botón de búsqueda ===
  searchButton.addEventListener('click', searchArticles);

  // === Evento: presionar tecla Enter en el input ===
  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') searchArticles();
  });

  // === Mostrar todos los artículos al cargar la página ===
  renderArticulos(articulos);  // `articulos` debe estar definido como variable global en otro archivo JS

});

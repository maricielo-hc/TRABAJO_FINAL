const buscador = document.getElementById("buscador");
const carrusel = document.getElementById("carrusel");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

let index = 0;
let especiesFiltradas = especies;

function renderTarjeta() {
  carrusel.innerHTML = "";

  if (especiesFiltradas.length === 0) {
    carrusel.innerHTML = "<p>No se encontraron especies.</p>";
    return;
  }

  const especie = especiesFiltradas[index];
  const card = document.createElement("div");
  card.className = "carrusel-card active";
  card.innerHTML = `
    <img src="${especie.imagen}" alt="${especie.nombre_comun}">
    <h3>${especie.nombre_comun}</h3>
    <p><em>${especie.nombre_cientifico}</em></p>
    <p><strong>Estado:</strong> ${especie.estado}</p>
    <p><strong>Tipo:</strong> ${especie.tipo}</p>
    <p class="desc">${especie.descripcion}</p>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
  });

  carrusel.appendChild(card);
  btnPrev.disabled = index === 0;
  btnNext.disabled = index === especiesFiltradas.length - 1;
}

buscador.addEventListener("input", () => {
  const q = buscador.value.toLowerCase();
  especiesFiltradas = especies.filter(e =>
    e.nombre_comun.toLowerCase().includes(q) ||
    e.nombre_cientifico.toLowerCase().includes(q)
  );
  index = 0;
  renderTarjeta();
});

btnNext.addEventListener("click", () => {
  if (index < especiesFiltradas.length - 1) {
    index++;
    renderTarjeta();
  }
});

btnPrev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    renderTarjeta();
  }
});

function resaltarCard() {
  const card = document.querySelector(".carrusel-card");
  if (card) {
    card.classList.add("resaltado");
    setTimeout(() => card.classList.remove("resaltado"), 400);
  }
}

btnNext.addEventListener("mouseenter", resaltarCard);
btnPrev.addEventListener("mouseenter", resaltarCard);

renderTarjeta();

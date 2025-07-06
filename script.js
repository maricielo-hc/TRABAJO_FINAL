document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-especies");

  if (!Array.isArray(especies)) {
    console.error("El objeto 'especies' no está definido o no es un arreglo.");
    return;
  }

  especies.forEach(especie => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-especie";

    tarjeta.innerHTML = `
      <img src="${especie.imagen}" alt="${especie.nombre_comun_es}" class="imagen-especie"/>
      <h2>${especie.nombre_comun_es}</h2>
      <p><strong>Nombre científico:</strong> <em>${especie.nombre_cientifico}</em></p>
      <p><strong>Estado de conservación:</strong> ${especie.estado}</p>
      <p><strong>Tipo:</strong> ${especie.tipo}</p>
      <p><strong>Descripción:</strong> ${especie.descripcion}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
});

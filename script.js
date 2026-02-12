const tortas = [
  {
    nombre: "Chocolate Intenso",
    descripcion: "Ganache y frutos rojos",
    imagen: "https://picsum.photos/500/600?5"
  },
  {
    nombre: "Red Velvet",
    descripcion: "Clásica americana",
    imagen: "https://picsum.photos/500/600?6"
  },
  {
    nombre: "Lemon Cream",
    descripcion: "Fresca y suave",
    imagen: "https://picsum.photos/500/600?7"
  },
  {
    nombre: "Nuez & Caramelo",
    descripcion: "Toque gourmet",
    imagen: "https://picsum.photos/500/600?8"
  },
  {
    nombre: "Chocolate Blanco",
    descripcion: "Delicada y elegante",
    imagen: "https://picsum.photos/500/600?9"
  },
  {
    nombre: "Frambuesa & Pistacho",
    descripcion: "Edición especial",
    imagen: "https://picsum.photos/500/600?10"
  }
];

const container = document.getElementById("tortas-container");

tortas.forEach(torta => {
  const card = document.createElement("div");
  card.classList.add("torta-card");

  card.innerHTML = `
    <img src="${torta.imagen}" alt="${torta.nombre}">
    <div class="torta-info">
      <h3>${torta.nombre}</h3>
      <p>${torta.descripcion}</p>
    </div>
  `;

  container.appendChild(card);
});

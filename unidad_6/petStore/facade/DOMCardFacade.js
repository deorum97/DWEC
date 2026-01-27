"use strict";

class DOMCardFacade {
  mostrarCards(pets) {
    const tablaCard = document.getElementById("tablaCards");
    tablaCard.innerHTML = "";
    for (const pet of pets) {
      const card = document.createElement("card");
      card.innerHTML = `
        <p>${pet.foto}</p>
        <p>${pet.nombre}</p>
        <p>${pet.raza}</p>
        <p>${pet.descripcion}</p>
      `;
      tablaCard.appendChild(card);
    }
  }
}

export { DOMCardFacade };

class FacadeCard {
  mostrarCard(pets) {
    const tcard = document.getElementById("tablaCard");
    for (const pet of pets) {
      const fila = document.createElement("card");
      fila.classList.add("card");
      fila.innerHTML = `
        <p>${pet.nombre}</p>
        p>${pet.raza}</p>
        p>${pet.foto}</p>
        `;
      tcard.appendChild(fila);
    }
  }
}

export { FacadeCard };

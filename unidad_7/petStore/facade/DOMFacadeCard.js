import { API_URL } from "../model/constant.js";
import { Pet } from "../model/pet.js";

class FacadeCard {
  mostrarCard(pets) {
    const tcard = document.getElementById("tablaCard");
    for (const pet of pets) {
      const fila = document.createElement("card");
      fila.classList.add("card");
      fila.innerHTML = `
          <header>${pet.nombre}</header>
          <main>
            <a href="verPet.html?id=${pet._id}">
              <img src="images/${pet.foto}" alt="${pet.foto}" />
            </a>
            <p>${pet.raza}</p>
            <p>${pet.descripcion}</p>
          </main>
        `;
      if (pet.estado === "available") {
        fila.classList.add("green");
      } else if (pet.estado === "sold") {
        fila.classList.add("red");
      } else {
        fila.classList.add("yellow");
      }
      tcard.appendChild(fila);
    }
  }

  async mostrarFormNoEdit(id) {
    const requestPets = await fetch(API_URL + "pets/" + id);
    const pet = await requestPets.json();

    const sectionForm = document.getElementById("formDatos");
    sectionForm.innerHTML = `
    <form id="formRegistroPet">
          <label>
            nombre
            <input type="text" name="user" id="nombre" value="${pet.nombre}" disabled required />
          </label>
          <label>
            raza
            <input type="text" name="raza" id="raza" value="${pet.raza}" disabled required />
          </label>
          <label>foto<input type="text" name="foto" id="foto" value="${pet.foto}" disabled /></label>
          <label>
            descripcion
            <input type="text" name="descripcion" id="descripcion" value="${pet.descripcion}" disabled
          /></label>
          <button id="registroMascota">editar</button>
          <button id="borrarMascota">borar</button>
        </form>`;
    document
      .getElementById("registroMascota")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.mostrarFormEdit(id);
      });
    document
      .getElementById("borrarMascota")
      .addEventListener("click", async (e) => {
        e.preventDefault();
        const requestPets = new Request(`${API_URL}pets/${id}`, {
          method: "DELETE",
        });
        const requestDeletePets = await fetch(requestPets);
        const dataPet = await requestDeletePets.text();
        window.location.href = "listarPets.html";
        return dataPet;
      });
  }

  async mostrarFormEdit(id) {
    const requestPets = await fetch(API_URL + "pets/" + id);
    const pet = await requestPets.json();

    const sectionForm = document.getElementById("formDatos");
    sectionForm.innerHTML = `
    <form id="formRegistroPet">
          <label>
            nombre
            <input type="text" name="user" id="nombre" value="${pet.nombre}"  required />
          </label>
          <label>
            raza
            <input type="text" name="raza" id="raza" value="${pet.raza}"  required />
          </label>
          <label>foto<input type="text" name="foto" id="foto" value="${pet.foto}"  /></label>
          <label>estado<input type="text" name="estado" id="estado" value="${pet.estado}"  /></label>
          <label>
            descripcion
            <input type="text" name="descripcion" id="descripcion" value="${pet.descripcion}" 
          /></label>
          <button id="registroMascota">Modificar</button>
        </form>`;
    document
      .getElementById("registroMascota")
      .addEventListener("click", async (e) => {
        e.preventDefault();
        let myHeaders = new Headers({
          "Content-Type": "application/json",
        });
        const pet = new Pet(
          document.getElementById("nombre").value,
          document.getElementById("raza").value,
          document.getElementById("foto").value,
          document.getElementById("estado").value,
          document.getElementById("descripcion").value,
        );
        const requestPet = new Request(`${API_URL}Pets/` + id, {
          method: "PUT",
          body: JSON.stringify(pet),
          headers: myHeaders,
        });
        const requestPostPet = await fetch(requestPet);
        const petCreado = await requestPostPet.json();
        window.location.href = "listarPets.html";
        return petCreado;
      });
  }
}

export { FacadeCard };

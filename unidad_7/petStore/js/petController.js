import { API_URL } from "../model/constant.js";
import { Pet } from "../model/pet.js";
import { FacadeCard } from "../facade/DOMFacadeCard.js";
import { UsuarioManager } from "./managerUsuario.js";

let user = null;
const managerUsuario = new UsuarioManager();
user = managerUsuario.getUsuario();
if (!user) {
  window.location.href = "index.html";
}

const facadeCard = new FacadeCard();
document.getElementById("registroMascota").addEventListener("click", addPet);

pintarPets();
async function pintarPets() {
  const requestPets = await fetch(API_URL + "pets");
  const pets = await requestPets.json();

  facadeCard.mostrarCard(pets);
}
async function delPet(id) {
  const requestLibros = new Request(`${API_URL}pets/${id}`, {
    method: "DELETE",
  });
  const requestPostLibros = await fetch(requestLibros);
  const dataCreatedBook = await requestPostLibros.text();
  return dataCreatedBook;
}

async function addPet(event) {
  event.preventDefault();
  let myHeaders = new Headers({
    "Content-Type": "application/json",
  });
  const pet = new Pet(
    document.getElementById("nombre").value,
    document.getElementById("raza").value,
    document.getElementById("foto").value,
    document.getElementById("descripcion").value,
  );
  const requestPet = new Request(`${API_URL}Pets`, {
    method: "POST",
    body: JSON.stringify(pet),
    headers: myHeaders,
  });
  const requestPostPet = await fetch(requestPet);
  const petCreado = await requestPostPet.json();
  window.location.href = "listarPets.html";
  return petCreado;
}

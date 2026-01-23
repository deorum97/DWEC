import { API_URL } from "../model/constant.js";

pintarPets();
async function pintarPets() {
  const requestPets = await fetch(API_URL + "pets");
  const pets = await requestPets.json();

  facadeCard.mostrarCard(pets);
}
function delPet() {}

async function addPet() {
  let myHeaders = new Headers({
    "Content-Type": "application/json",
  });
  const requestPet = new Request(`${API_URL}Pets`, {
    method: "POST",
    body: JSON.stringify(pet),
    headers: myHeaders,
  });
  const requestPostPet = await fetch(requestPet);
  const petCreado = await requestPostPet.json();
  return petCreado;
}

function modPet() {}

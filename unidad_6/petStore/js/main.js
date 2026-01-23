"use strict";

import { API_URL } from "./constant.js";
import { DOMCardFacade } from "../facade/DOMCardFacade.js";

const FacadeCard = new DOMCardFacade();
consultarPets();

async function consultarPets() {
  const requestPets = await fetch(API_URL + "pets");
  const pets = await requestPets.json();
  FacadeCard.mostrarCards(pets);
}

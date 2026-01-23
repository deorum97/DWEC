"use strict";

import { API_URL } from "../model/constant.js";
import { FacadeCard } from "../facade/DOMFacadeCard.js";
const queryString = window.location.search;

// Utilizar URLSearchParams para parsear
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const facadeCard = new FacadeCard();

facadeCard.mostrarFormNoEdit(id);

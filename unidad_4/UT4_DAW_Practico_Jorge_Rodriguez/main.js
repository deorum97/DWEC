"use strict";

import { Pokemon } from "./models/pokemon.js";
import { PokemonManager } from "./pokemonManager.js";
import { DomFacade } from "./domFacade.js";
import { FilterPokemonNombre, PokemonStrategy } from "./strategy.js";

const pokemonManager = new PokemonManager();
const facade = new DomFacade();
const strategy = new PokemonStrategy();

let arrayPokemon = [];
arrayPokemon = pokemonManager.cargarPokemon();
facade.notify(arrayPokemon);

const botonCrearPokemon = document.getElementById("crearPokemon");
const botonEstadistica = document.getElementById("generarEstadistica");
const botonBorrar = document.getElementById("borrarPokemons");
const inputFiltroPokemon = document.getElementById("filtroPokemon");

botonCrearPokemon.addEventListener("click", (e) => {
  const nombrePokemon = document.getElementById("nombrePokemon").value;
  const tipoPokemon = document.getElementById("tipoPokemon").value;
  const nivelPokemon = document.getElementById("nivelPokemon").value;

  const pokemon = new Pokemon(nombrePokemon, tipoPokemon, nivelPokemon);
  pokemonManager.guardarNuevaPokemon(pokemon);
  facade.renderPokemon(pokemon);
});

botonEstadistica.addEventListener("click", (e) => {
  const arrayNiveles = pokemonManager.mediarNiveles();
  facade.renderEstadisticas(arrayNiveles);
});
inputFiltroPokemon.addEventListener("keyup", (event) => {
  strategy.setStrategy(new FilterPokemonNombre());
  const filterArray = strategy.filter(arrayPokemon, inputFiltroPokemon.value);
  facade.notify(filterArray);
});

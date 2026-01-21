"use strict";

import { HISTORIC_KEY } from "./models/constants.js";
import { PokemonStrategy, FilterPokemonTipo } from "./strategy.js";

class PokemonManager {
  constructor() {
    if (!PokemonManager.instance) {
      PokemonManager.instance = this;
      this.array = this.cargarPokemon();
    }
    return PokemonManager.instance;
  }

  cargarPokemon() {
    const stringPokemon = localStorage.getItem(HISTORIC_KEY);
    return stringPokemon ? JSON.parse(stringPokemon) : [];
  }

  guardarPokemon(pokemon) {
    localStorage.setItem(HISTORIC_KEY, JSON.stringify(pokemon));
  }

  guardarNuevaPokemon(objPokemon) {
    this.array.push(objPokemon);
    this.guardarPokemon(this.array);
  }

  borrarPokemon() {
    localStorage.clear();
    window.location.reload();
  }

  mediarNiveles() {
    const strategy = new PokemonStrategy();

    strategy.setStrategy(new FilterPokemonTipo());
    const listaFuego = strategy.filter(this.cargarPokemon(), "fuego");
    const listaAgua = strategy.filter(this.cargarPokemon(), "agua");
    const listaPlanta = strategy.filter(this.cargarPokemon(), "planta");

    let res = [];
    let totalFuego = 0;
    listaFuego.forEach((element) => {
      totalFuego += Number(element.nivel);
    });
    res.push(
      !isNaN(totalFuego / listaFuego.length)
        ? { "🔥 Fuego : ": totalFuego / listaFuego.length }
        : { "🔥 Fuego : ": 0 }
    );

    let totalAgua = 0;
    listaAgua.forEach((element) => {
      totalAgua += Number(element.nivel);
    });
    res.push(
      !isNaN(totalAgua / listaAgua.length)
        ? { "💧 Agua : ": totalAgua / listaAgua.length }
        : { "💧 Agua : ": 0 }
    );

    let totalPlanta = 0;
    listaPlanta.forEach((element) => {
      totalPlanta += Number(element.nivel);
    });

    res.push(
      !isNaN(totalPlanta / listaPlanta.length)
        ? { "🌿 Planta : ": totalPlanta / listaPlanta.length }
        : { "🌿 Planta : ": 0 }
    );

    return res;
  }
}

export { PokemonManager };

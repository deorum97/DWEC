"use strict";

class PokemonStrategy {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  filter(array, data) {
    return this.strategy.filter(array, data);
  }
}

class FilterPokemonNombre {
  filter(array, data) {
    let res = [];
    array.forEach((element) => {
      if (element.nombre.includes(data)) {
        res.push(element);
      }
    });
    return res;
  }
}

class FilterPokemonTipo {
  filter(array, data) {
    const res = array.filter((p) => p.tipo === data);
    return res;
  }
}

export { PokemonStrategy, FilterPokemonNombre, FilterPokemonTipo };

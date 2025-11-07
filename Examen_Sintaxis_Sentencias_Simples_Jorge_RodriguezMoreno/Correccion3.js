"use strict";

function sonCercanas(cadenaOrigen, cadenaFin) {
  if (cadenaOrigen.length !== cadenaFin.length) {
    return false;
  }

  let arrayCadenaOrigen = cadenaOrigen.split("");
  let arrayCadenaFin = cadenaFin.split("");

  const conteoOrigen = arrayCadenaOrigen.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  console.log(conteoOrigen);

  const conteoFin = arrayCadenaFin.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  console.log(conteoFin);

  console.log("Son cercanas");
}

sonCercanas("aacabb", "bbcbaa");

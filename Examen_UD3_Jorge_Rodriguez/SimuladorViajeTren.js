"use strict";

import {
  SODOR_TO_KNAPFORD,
  SODOR_TO_VICARSTOWN,
  KANPFORD_TO_VICARSTOWN,
  VICARSTOWN_TO_TIDMOUTH,
} from "./constants.js";

export function viajeTren(origenTren, destinoTren) {
  origenTren = origenTren.toLowerCase();
  destinoTren = destinoTren.toLowerCase();
  switch (origenTren) {
    case "sodor":
      if (destinoTren === "knapford") {
        return SODOR_TO_KNAPFORD;
      } else if (destinoTren === "vicarstown") {
        return SODOR_TO_VICARSTOWN;
      } else if (destinoTren === "tidmouth") {
        return SODOR_TO_VICARSTOWN + KANPFORD_TO_VICARSTOWN;
      } else {
        return 0;
      }
    case "knapford":
      if (destinoTren === "sodor") {
        return SODOR_TO_KNAPFORD;
      } else if (destinoTren === "vicarstown") {
        return KANPFORD_TO_VICARSTOWN;
      } else if (destinoTren === "tidmouth") {
        return VICARSTOWN_TO_TIDMOUTH + KANPFORD_TO_VICARSTOWN;
      } else {
        return 0;
      }
    case "vicarstown":
      if (destinoTren === "sodor") {
        return SODOR_TO_VICARSTOWN;
      } else if (destinoTren === "knapford") {
        return KANPFORD_TO_VICARSTOWN;
      } else if (destinoTren === "tidmouth") {
        return VICARSTOWN_TO_TIDMOUTH;
      } else {
        return 0;
      }
    case "tidmouth":
      if (destinoTren === "sodor") {
        return VICARSTOWN_TO_TIDMOUTH + SODOR_TO_VICARSTOWN;
      } else if (destinoTren === "knapford") {
        return VICARSTOWN_TO_TIDMOUTH + SODOR_TO_KNAPFORD;
      } else if (destinoTren === "vicarstown") {
        return VICARSTOWN_TO_TIDMOUTH;
      } else {
        return 0;
      }
    default:
      alert("elige un tren");
  }
}

export function eventoViaje() {
  const evento = Math.floor(Math.random() * 3);
  switch (evento) {
    case 0:
      return "¡Retraso por ovejas! (+10 min)";
    case 1:
      return "¡Retraso por averia! (+30 min)";
    case 2:
      return "Viaje sin incidentes";
  }
}

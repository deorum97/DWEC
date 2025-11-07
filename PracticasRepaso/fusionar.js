/*
Descripción:
Se te da un arreglo de intervalos, donde cada intervalo es [inicio, fin].
Debes fusionar todos los intervalos que se superponen y devolver el
resultado como un nuevo arreglo.
Objetivo:
Combinar los intervalos superpuestos en intervalos continuos más
grandes.
*/

function fusionar(interv) {
  if (interv.length === 0) return [];

  // Ordenar los intervalos por el inicio
  interv.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let currentInterval = interv[0];

  for (let i = 1; i < interv.length; i++) {
    const interval = interv[i];

    // Si hay solapamiento, actualizamos el final del intervalo actual
    if (interval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], interval[1]);
    } else {
      // No hay solapamiento, guardamos el intervalo actual y pasamos al siguiente
      merged.push(currentInterval);
      currentInterval = interval;
    }
  }

  // Agregar el último intervalo
  merged.push(currentInterval);

  return merged;
}

const intervalos = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(fusionar(intervalos));

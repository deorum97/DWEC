function diferenciaMedia(array) {
  let a = [];
  let res = [0, Infinity];
  let all = [];
  for (let i = 0; i < array.length - 1; i++) {
    let subA = [];
    let subB = [];

    let medA = 0;
    let medB = 0;
    for (let j = 0; j <= i; j++) {
      subA.push(array[j]);
    }
    for (let j = i + 1; j <= array.length - 1; j++) {
      subB.push(array[j]);
    }
    for (let j = 0; j <= subA.length - 1; j++) {
      medA = medA + subA[j];
    }
    medA = Math.floor(medA / subA.length);
    for (let j = 0; j <= subB.length - 1; j++) {
      medB = medB + subB[j];
    }
    medB = Math.floor(medB / subB.length);
    let medG = Math.abs(medA - medB);
    all.push([i, medG]);
    if (res[1] > medG) {
      res = [i, medG];
    }
  }
  return res[0];
}

const numeros = [2, 5, 3, 9, 5, 3];
console.log(diferenciaMedia(numeros));

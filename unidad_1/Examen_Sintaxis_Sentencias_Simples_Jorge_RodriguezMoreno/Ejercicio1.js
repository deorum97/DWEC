function ejercicioUno(left, right) {
  let cont = 0;
  for (let i = left; i <= right; i++) {
    const arrayString = Math.abs(i).toString(2).split("");
    let contador = 0;
    for (let j = 0; j < arrayString.length; j++) {
      if (arrayString[j] === "1") contador++;
    }
    if (primo(contador)) cont++;
  }
  return cont;
}

function primo(n) {
  let d = 0;
  if (n === 1) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      d++;
    }
    if (d > 2) {
      return false;
    }
  }
  return d <= 2 ? true : false;
}

console.log(ejercicioUno(10, 15));

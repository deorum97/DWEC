function similar(cadenaA, cadenaB) {
  if (cadenaA.length !== cadenaB.length) return false;
  let letras = [];
  let pri = "";
  for (let i = 0; i < cadenaB.length; i++) {
    if (!letras.includes(cadenaB[i])) letras.push(cadenaB[i]);
  }

  for (let i = 0; i < cadenaB.length; i++) {
    for (let j = 0; j < letras.length; j++) {
      if (cadenaB[i] === letras[j]) {
      }
    }
  }

  console.log("🎂");
  let arr = [];
}

console.log(similar("a", "aa"));
console.log(similar("abc", "bca"));

/*
  Haz una función que calcule y devuelva el número de vocales en la
  cadena dada. Consideraremos a, e, i, o, u como vocales. La cadena de
  entrada sólo consta de letras minúsculas y/o espacios.
*/
function contarVocales(cadena) {
  //primero con el comando split("") divide el texto que da en un array en este caso lo divide por caracter
  let arrayCadena = cadena.split("");
  let n = 0;
  //forEach para que recorra el array creado anteriormente y suma en la iteraccion
  arrayCadena.forEach((element) => {
    let vocals = "aeiou";
    if (vocals.includes(element)) n++;
  });
  console.log(n);
}

contarVocales("hola");

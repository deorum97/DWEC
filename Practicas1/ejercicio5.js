/*
    Implementar la función que toma como argumento una secuencia de
    enteros o string y devuelve una lista de elementos sin ningún
    elemento repetido y preservando el orden original de los elementos.
*/

function arrayRep(array) {
  let res = [];
  array.forEach((element) => {
    //console.log(element);
    if (!res.includes(element)) res.push(element);
  });
  console.log(res);
}

arrayRep(["hola", 1, 2, "ey", 6, 6, "hola", 1, 2, "que tal"]);

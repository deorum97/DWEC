/*
Descripción: 
Dada una cadena s, encuentra la longitud de la subcadena más larga que 
no tenga caracteres repetidos. 
Objetivo: 
Devolver la longitud máxima de una subcadena con todos los caracteres 
únicos.^
*/
function SubcadenaMasLarga(cadena) {
  const subcadenas = cadena.split(" ");
  const mapa = new Map();
  let res;
  subcadenas.forEach((element) => {
    let array = [element[0]];
    for (let i = 1; i < element.length; i++) {
      if (!array.includes(element[i])) {
        array.push(element[i]);
      }
    }
    if (res === undefined) {
      res = [element, array.length];
    } else if (res[1] < array.length) {
      res = [element, array.length];
    }
  });

  console.log(`La cadena mas larga es ${res[0]} de longitud ${res[1]}`);
}
SubcadenaMasLarga("hola me llamo jorge");

/*
hola
h !== o 

el count++ 
*/

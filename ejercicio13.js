/*
Ejercicio colorear triángulo
Un triángulo de color se crea a partir de una fila de colores, cada uno de los
cuales es rojo, verde o azul. Las filas sucesivas, cada una con un color
menos que la anterior, se generan considerando los dos colores que se
tocan en la fila anterior.
Si estos colores son idénticos, se utiliza el mismo color en la nueva fila. Si
son diferentes, se utiliza el color que falta en la nueva fila. Así se continúa
hasta que se genera la última fila, con un solo color.
*/

function trianguloColor(tri) {
  tri = tri.split("");
  let l = tri.length;
  while (tri.length > 1) {
    let triFila = [];
    for (i = 0; i < tri.length - 1; i++) {
      const a = tri[i];
      const b = tri[i + 1];
      if (a === b) {
        triFila.push(a);
      } else {
        if ((a === "R" && b === "G") || (a === "G" && b === "R")) {
          triFila.push("B");
        } else if ((a === "B" && b === "G") || (a === "G" && b === "B")) {
          triFila.push("R");
        } else {
          triFila.push("G");
        }
      }
    }
    console.log(mostrarTriangulo(tri, l));
    tri = triFila;
  }
  console.log(mostrarTriangulo(tri, l));
}

function mostrarTriangulo(tri, l) {
  let res = "";
  if (tri.length !== l) {
    let dif = l - tri.length;
    for (i = 0; i <= dif - 1; i++) {
      res = res + " ";
    }
  }
  tri.forEach((element) => {
    res = res + " " + element;
  });
  return res;
}

trianguloColor("RRGBRGBB");

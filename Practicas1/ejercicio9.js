/*
Haz una función que pueda tomar cualquier número entero no
negativo como argumento y devolverlo con sus dígitos en orden
descendente. Esencialmente, reordenar los dígitos para crear el
mayor número posible.
Entrada: 42145 Salida: 54421
Entrada: 145263 Salida: 654321
Entrada: 123456789 Salida: 987654321
*/

function ordDESc(num) {
  if (num >= 0) {
    let res = "";
    let numeros = num.toString().split("").sort().reverse();
    numeros.forEach((element) => {
      res = res + element;
    });
    console.log(`Entrada: ${num} Salida: ${res}`);
  } else {
    console.log(`Introduce un numero positivo`);
  }
}

ordDESc(42145);
ordDESc(145263);
ordDESc(123456789);

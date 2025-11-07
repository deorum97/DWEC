/*
    Escribe una función que tome un parámetro positivo num y devuelva
    su persistencia multiplicativa, que es el número de veces que debes
    multiplicar los dígitos de num hasta llegar a un solo dígito.
    Por ejemplo (Entrada --> Salida):
    39 --> 3 (porque 3*9 = 27, 2*7 = 14, 1*4 = 4 y el 4 sólo tiene un dígito)
    999 --> 4 (porque 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, y finalmente 1*2 = 2)
    4 --> 0 (porque el 4 ya es un número de un dígito)
*/

function multiplicativa(num) {
  let contador = 0;
  //con un while para que se controle
  for (i = num; i > 10; contador++) {
    i = i
      .toString() //combierte el numero dado en un string para que se pueda dividir
      .split("") //Se divide como en el ejercicio 1 que se contaban las vocales
      .reduce((acc, n) => acc * Number(n), 1); //con reduce mira el array que se ha hecho y empezando el valor de acc en 1 multiplica todos los numeros que hay en el array
  }

  console.log(num + " --> " + contador);
}

multiplicativa(39);
multiplicativa(234);

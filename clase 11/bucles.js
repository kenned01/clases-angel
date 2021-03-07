/*
  while
  do-while
  for
*/
var contador = 10;
// en sentido comun se inicia a contar desde el 1
// en programacion se inicia a contar desde el 0


// la condicion se evalua en el principio
while ( contador < 10 ) {
  console.log(contador);
  contador = contador + 1;
}

// la condicion se evalua al final
// el do-while se ejecuta al menos 1 vez
do {
  console.log("se ejecutó");
} while ( contador < 10 );


/*
  1 - declarar contador
  2 - condicion
  3 - aumento / decremento
*/
for( let i = 0; i < 10; i++  ){
  console.log(i);
}
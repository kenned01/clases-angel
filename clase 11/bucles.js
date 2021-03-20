/*
  while
  do-while
  for
*/
var contador = 0;
// en sentido comun se inicia a contar desde el 1
// en programacion se inicia a contar desde el 0


// la condicion se evalua en el principio
console.log("ejecutar while loop");
while ( contador < 10 ) {
  console.log(contador);
  contador = contador + 1;
}



contador = 0
console.log("ejecutar do-while loop " + contador);



// la condicion se evalua al final
// el do-while se ejecuta al menos 1 vez
do {
  console.log(contador);
  contador = contador + 1;
} while ( contador < 10 );


/*
  1 - declarar contador
  2 - condicion
  3 - aumento / decremento

  i++ es lo mismo que decir i = i+1
  i += 1 es lo mismo que decir i = i + 1
*/
console.log("ejecutar for loop");
for( let i = 0; i < 10; i++  ){
  console.log(i);
}
// esto es un comentario

/* 
esto es un comentario
de varias lineas
*/

// esto es una contante (su valor nunca cambia)

const hora_entrada = 8;//formato de 24 HH:MM
const hora_salida = 17;//formato de 24 HH:MM

// esto es una variable (su valor puede cambiar)
var nombrePersona = "kenned";
var edad = 19;
var es_mayor = false;
// Estructuras de control
//  condicionales // true, false
//  bucles


/*
 operadores logicos  - true | false
 se utilizan para hacer comparaciones
  > Mayor
  < Menor
  >= Mayor o igual
  <= Menor o igual
  == igual que
  != diferente que
 
 -Operadores para unir condiciones
  &&  Y (primera_c y segunda_c ) son verdaderas entonces pasa dentro del if 
  ||  O (primera_ o segunda_c) es verdadera entonces pasa dentro del if

  true y true = true;
  true y false = false;

  true o true = true;
  true o false = true;
  false o false = false;
*/

if(edad > 18 && nombre == "kenned"){
  console.log("tiene descuento");
}

// condicion simple
if( edad > 18 ) {
  es_mayor = true;
}

//condicion semi-compleja
if( es_mayor ){// si da true
  console.log("soy mayor de edad");
} else {// si da false la condicion de arriba
  console.log("soy menor de edad");
}

//condicion compleja
// sabemos que edad es 19
if(edad < 12) {
  console.log("Es un niño");
}else if(edad < 18) {
  console.log("Es un adolecente");
}else {
  console.log("Es un adulto");
}
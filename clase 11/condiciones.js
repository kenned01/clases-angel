/*
  estructura de una condicion

  if( [la condicion] ){

    // el codigo que se ejecuta si la condicion es verdadera
  }else{
    // el codigo que se ejecuta si la condicion es falsa
  }

*/

const mayorDeEdad = 18;

//datos de la persona
let nombre = "kenned";
let edad = 18;

/*
  == igual que
  != diferende que
  <  menor que 
  > mayor que
  <= menor o igual que
  >= mayor o igual que
*/
if( nombre == "Angel" ){
  console.log("el nombre es igual");
}else{
  console.log("el nombre es diferente");
}

if( edad >= mayorDeEdad ){
  console.log("es mayor de edad");
}else{
  console.log("no es mayor de edad");
}

/* 
  condiciones con mas de dos premisas 

  || OR
  && AND


  verdadero || falso => verdadero
  verdadero || verdadero => verdadero
  false     || false    => false


  falso     && verdadero = falso
  verdadero && falso => falso
  falso     && falso    => falso
  verdadero && verdadero => verdadero
*/

// para que se pueda ejecutar
if( 
    (edad == 18) // si esto es verdadero
    && 
    (18 == 18) // si esto es verdadero
    &&
    (nombre != "Angel")// si esto es verdadero
){
  console.log("verdadero");// se ejecuta esta linea
}

// agrupar de otra manera
nombre = "angels"; // kenned o isaac
if(
  (edad == 18) // si esto es verdadero
  && 

  ( (nombre != "kenned") && (nombre != "isaac") )// el resultado es SI

){
console.log("verdadero");// se ejecuta esta linea
}else{
  console.log("false");
}

//ley de los parentesis

// 2(4(2x -4)) + 5;
// 2(8x - 16) +5;
// 16x - 32 + 5;
//16x - 27;


/* 
  estructura de condiciones anidadas

  if(){

    if(){

    }

  }else{
    
    if(){

    }
    
  }
*/
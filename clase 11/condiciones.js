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
let edad = 19;

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
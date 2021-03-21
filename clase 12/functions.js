/* 
  funcion basica
  function [nombre de la misma] ( [argumentos] )
  {

  }
*/
function validarNombre(nombre)  
{
  
  if(nombre == "kenned")  {
    console.log("hacer tal cosa");
  }else {
    console.log("hacer otra");
  }

}

/* 
  funcion flecha
  const [nombre funcion] = ( [argumentos] ) => {

  }
*/

const validarMayorEdad = (edad) => {

  if(edad >= 18){
    console.log("mayor edad");
  }else{
    console.log("menor de edad");
  }

}

let nombre1 = "Kenned";

validarNombre(nombre1);// llamar una funcion
validarNombre("Angel");// llamar una funcion
validarNombre("Jorge");// llamar una funcion
validarMayorEdad(17);// llamar una funcion
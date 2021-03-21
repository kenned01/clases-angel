const prompt = require('prompt');
prompt.start();


let preguntas = ['nombre', 'edad'];


/* tipos de variables

    let string = "";
    let number = 0;
    let bolean = false | true;
    
    let arreglos = []; 
    // por posiciones   areglo[0]
    
    let json = { key: valor, key2: valor2, key3: valor3 } // se rigen por los key
    json.key
*/

function validarRespuesta(error , resultado ) {
    if(error){
        return 1;
    }

    let nombre = resultado.nombre;
    let edad   = resultado.edad;

    console.log("Hola " + nombre + " tu edad es :" + edad);
}


prompt.get( preguntas, validarRespuesta );
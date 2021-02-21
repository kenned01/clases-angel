function sumar(event){
  event.preventDefault();

  var numero1 = document.getElementById("suma_n_1").value;
  var numero2  = document.getElementById("suma_n_2").value;
  var resultado = parseFloat(numero1) + parseFloat(numero2) ;// 12.512
  alert("el resultado es: " + resultado);

}

function multiplicar(event){
  event.preventDefault();

  var numero1 = document.getElementById("multiplicacion_n_1").value;
  var numero2  = document.getElementById("multiplicacion_n_2").value;
  var resultado = parseFloat(numero1) * parseFloat(numero2) ;// 12.512
  alert("el resultado es: " + resultado);
}

function dividir(event){
  event.preventDefault();

  var numero1 = document.getElementById("division_n_1").value;
  var numero2  = document.getElementById("division_n_2").value;

  if(numero2 == 0){
    alert("No se puede dividir entre 0");
  }else{
    var resultado = parseFloat(numero1) / parseFloat(numero2) ;// 12.512
    alert("el resultado es: " + resultado);
  }
  
}

function restar(event){
  event.preventDefault();

  var numero1 = document.getElementById("resta_n_1").value;
  var numero2  = document.getElementById("resta_n_2").value;
  var resultado = parseFloat(numero1) - parseFloat(numero2) ;// 12.512
  alert("el resultado es: " + resultado);
}
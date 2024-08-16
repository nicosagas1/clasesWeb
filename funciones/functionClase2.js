//En este ejercicio, deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.

//Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120

function numero (num){

var acumulador = 1
for (var i = 1; i <= num; i++) {
    acumulador = acumulador * i
   
}
 return acumulador
}
numero(5)
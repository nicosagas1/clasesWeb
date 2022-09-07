//console.log("Hola");
/**
// variables

var x = 41;
var y = 59;

var suma = x + y;

var resta = x - y;

var div = x / y;

var mult = x * y;

// tipos de datos
//String
//num(int-float)
//null
//underfinal

//String
var nombre = "alan";
nombre = "juan";
//num
var edad = 27;

//bool(true o false)
var casado = false;

//undefined (no definido)
// null (vacio)
var pepe = null;

// bool(son la respuesta a una condicion)

// > mayor a que
var cond = 10 > 5; // true

// < menor a que 
var cod2 = 20 < 50; // false

// ===  igual a que (comparacion de valor)
// = asignacion de v
* 
*/
var nombre = prompt("Como te llamas?");

var edad  = prompt("Que edad tenes?");

if(edad>=18){
    alert ("Podes ingresar");
    
}else{
    alert("No podes ingresar");
    alert("No tenes acseso de edad");
}

//El usuario tiene que adivinar un numero secreto
//Creamos una variable llamada secreto y le damos un valor un numero
// Creamos un prompt preguntando al usuario que adivine el numero
//Si el numero ingresado por el usuario es igual que el numero secreto, mostramos en un alert acertaste!
//Si el numero ingresado por el usuario no es igual que el numero secreto, mostramos en un alert no acertaste!

var secreto = 10;
var respuesta = prompt("Adivine el número");

if(respuesta==secreto){
console.log("acertaste");
}else{
console.log("No acertaste");
}
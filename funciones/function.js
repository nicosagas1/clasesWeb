function saludar(nombre = "fulano", edad = 67){
    console.log("Hola "+ nombre + " tu edad es "+ edad)
}
// crear una funcion llamada multiplicar 
// la funcion tiene recivir 2 numeros
// se tienen que multiplicar esos dos numeros
// la funcion devuelve el resultado de la multiplicacion

function multiplicacion (num1, num2){
        var resultado = num1 * num2
        return resultado
}

// debws crear la funcion llamar esPar
// la funcion recibe un numero por parametro
// la funcion devuelve true, si el numero por parametro es par y devuelve false si es imPar

function esPar (num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}
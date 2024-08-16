var contador = 10


while(contador > 5){
    console.log(contador)
    contador = contador - 1 
}
// log = imprimir en consola

var respuesta = prompt ("Adivine un numero")

var numeroSecreto = 6

while(numeroSecreto != respuesta){
    alert ("Numero incorrecto, vuelva a intentar")
    
    respuesta = prompt("Adivine un número")
    
}
alert ("Adivinaste el número")
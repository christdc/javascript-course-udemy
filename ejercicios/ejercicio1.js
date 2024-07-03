//pide dos numeros y que nos diga cual es el mayor el menor y si son iguales
var num1 = prompt("Introduce un número", 0)
var num2 = prompt("Introduce otro número", 0)

if(num1>num2){
    console.log(num1 + "es mayor que "+ num2)
}else if(num2>num1){
    console.log(num2 + "es mayor que "+ num1)
}else{
    console.log("Son iguales")
}
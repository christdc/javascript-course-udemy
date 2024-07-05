// DOCUMENT OBJECT MODEL

var caja = document.getElementById("micaja")// .innerHTML para que te salga sin el div, solo el texto
caja.innerHTML = "NUEVO TEXTO"
console.log(caja)

//conseguir elementos por su etiqueta
var todosLosDiv = document.getElementsByTagName("div")

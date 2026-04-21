/** Crie um programa que solicite dois números e simule um menu de uma calculadora:
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
Use switch...Case*/

let val1:number = Number(prompt("informe o primero numero: "))
let val2:number = Number(prompt("informe o segundo numero: "))
let opcao:number = Number(prompt("informe a opiçao  1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão "))

let resultado:Number

if(opcao === 1){
    resultado = val1 + val2
    console.log("Soma: " + resultado)
}
else if(opcao === 2){
    resultado = val1 - val2
    console.log("subtração: " + resultado)
}
else if(opcao === 3){
    resultado = val1 * val2
    console.log("multiplicação: " + resultado)
}
else if(opcao === 4){
    resultado = val1 / val2
    console.log("divisão: " + resultado)
}
/** Crie um programa que solicite dois números e simule um menu de uma calculadora:
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
Use switch...Case*/
export function quest3C():void{
let val1:number = Number(prompt("informe o primero numero: "))
let val2:number = Number(prompt("informe o segundo numero: "))
let opcao:number = Number(prompt("informe a opiçao  1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão "))

let resultado:Number

switch(opcao){
    case 1:  
        resultado = val1 + val2
        console.log("Soma: " + resultado)
    break
    case 2: 
        resultado = val1 - val2
        console.log("subtração: " + resultado)
    break
    case 3:
        resultado = val1 * val2
        console.log("multiplicação: " + resultado)
    break
    case 4:
        resultado = val1 / val2
        console.log("divisão: " + resultado)
    break
}

}
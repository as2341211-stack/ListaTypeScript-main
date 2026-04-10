/** 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
 Quantidade de números digitados
 Soma total*/
let num3:number = 0
let num2:number = 0
let nem:number = Number(prompt(" informe o numero: "))

while(nem!=0){

    num3 = num3 + nem
    num2++

  nem = Number(prompt(" informe o numero: "))

}

console.log(" Quantidade de números digitados " + num2)
console.log(" Soma total " + num3)
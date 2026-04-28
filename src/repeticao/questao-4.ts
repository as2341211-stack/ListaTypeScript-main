/**Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
valor -1 é utilizado como sentinela para fim de leitura. */

let QPares:number = 0,QImpares:number = 0

let numero:number = Number(prompt("informe um numero: "))
while(numero !== -1){
    numero = Number(prompt("informe um numero: "))

    if(numero % 2 == 0){
        QPares++
    }
    else if(numero % 2 !== 0){
        QImpares++
    }
}

console.log("Quantidade de numero pares: " + QPares + " e Quantidade de numero impares: " + QImpares)
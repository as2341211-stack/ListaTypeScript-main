function soma(n1:number,n2:number):number{
    return n1 + n2
}
function subtracao(n1:number,n2:number):number{
    return n1 - n2
}
function multiplicacao(n1:number,n2:number):number{
    return n1 * n2
}
function divisao(n1:number,n2:number):number{
    return n1 / n2
}
let n1 :number = Number(prompt( "informe o numero: "))
let n2 :number = Number(prompt( "informe o numero: "))
let oper:number = Number(prompt( "informe a operação: 1-soma, 2-subtração, 3-multiplicação, 4-divisão"))
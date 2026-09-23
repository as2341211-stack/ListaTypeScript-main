/** Ler dois valores e imprimir uma das três mensagens a seguir:
● ‘Números iguais’, caso os números sejam iguais;
● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
● ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

export function quest4C(): void{
let nm2:number = Number(prompt("informe o primeiro numero: "))
let nm3:number = Number(prompt("informe o segundo numero: "))

if(nm2 === nm3){
    console.log("Números iguais")
}
else if(nm2 > nm3){
    console.log("Primero é maior")
}
else{
    console.log("Segundo é maior")
}
}
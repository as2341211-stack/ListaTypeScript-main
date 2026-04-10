/**Crie um programa que leia um número e informe se ele é:
 Par ou Ímpar
 Positivo ou Negativo */

function Numeros(){
let numero:number = Number(prompt(" informe o numero : "));

if(numero%2 == 0){
    console.log(" numero Par")
}
else{
    console.log(" numero Impar")
}
if(numero > 0){
    console.log(" numero Positivo")
}
else{
    console.log("numero Negativo")
}
}
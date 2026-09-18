// *Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo 

export function queste1C():void{

let numero1:number = Number(prompt(" informe o numero : "))

if(numero1 %2 == 0){
    console.log(" numero Par")
}
else{
    console.log(" numero Impar")
}
if(numero1 > 0){
    console.log(" numero Positivo")
}
else{
    console.log("numero Negativo")
}

}
/**3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
programa.
Calcule e imprima:
● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
recebeu;
● O número de funcionários do sexo masculino e feminino cadastrado;
● O percentual de funcionários homens e mulheres cadastrados.*/


let salahr:number = 0
let numF:number = 0,numM:number = 0

let nom2:string = String(prompt("Informe o nome: "))
let clt:number = Number(prompt("Horas de trabalho: "))
salahr = Number(prompt("Informe o salario por hora: "))
let SexGruOper:string = String(prompt(" Informe o sexo (F para feminino e M para Masculino: ")).toUpperCase()
let PerUsu:string = String(prompt("Você que continuar (S para sim e N para não): ")).toUpperCase()
while( PerUsu != "S"){
nom2 = String(prompt("Informe o nome: "))
clt = Number(prompt("Horas de trabalho: "))
salahr = Number(prompt("Informe o salario por hora: "))
SexGruOper = String(prompt(" Informe o sexo (F para feminino e M para Masculino: ")).toUpperCase()
PerUsu = String(prompt("Você que continuar (S para sim e N para não): ")).toUpperCase()

switch(SexGruOper){
    case "F":
        numF++
    break
    case "N":
        numM++
    break

}
salahr++

}

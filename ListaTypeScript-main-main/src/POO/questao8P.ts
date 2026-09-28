/**Arrays Repetição
Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
todos os funcionários cadastrados, utilizando um método da classe. */

export function quest8P():void {

class funcionario{
    nome:string
    salario:number
    cargo:string

    constructor(no:string,sala:number, cargo:string){

        this.nome =no
        this.salario = sala
        this.cargo = cargo

    }

    Exibir(): void {
    window.alert(
        `📄 COMPROVANTE DE CADASTRO\n` +
        `----------------------------------------\n` +
        `👤 Nome: ${this.nome}\n` +
        `💼 Cargo: ${this.cargo}\n` +
        `💰 Salário: R$ ${this.salario.toFixed(2)}\n` +
        `----------------------------------------`
    )
}

}
let no:string,sala:number,cargo:string
let op = ""
let informações:funcionario [] = []

while (op != "N") {

        no = String(prompt("Informe o nome: "))
        sala = Number(prompt("Informe o salario: "))
        cargo = String(prompt("informe o cargo: "))
        op = String(prompt("Que continua:(s)para sim ou (n)para não ")).toUpperCase()
        let funcionário = new funcionario(no,sala,cargo)
        informações.push(funcionário)

    }
    for(let funcionario of informações){
        funcionario.Exibir()
    }
}
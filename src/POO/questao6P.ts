/*Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.*/



export function queste6P(): void {
    class Conta {
        numero: string
        nome: string
        saldo: number

        constructor(

            nume: string,
            nome: string,
            saldo: number = 0
        ) {

            this.numero = nume
            this.nome = nome
            this.saldo = saldo

        }

        AlterarNome(NovoNome: string): any {

            this.nome = NovoNome

        }

        Deposito(NovoValor: number): void {

            this.saldo = this.saldo + NovoValor

        }

        saldoRetirado(retirado: number): void {

            this.saldo = this.saldo - retirado

        }

        Executa(): void {
            window.alert(`Nome: ${this.nome}| Saldo: ${this.saldo}| Numero Da Conta: ${this.numero}`)
        }


    }

    let saldo: number, numero: string, nome: string

    nome = String(prompt("informe o nome: "))
    numero = String(prompt("informe o numero da conta: "))
    saldo = Number(prompt("informe do saldo da conta: "))

    let conta = new Conta(nome, numero, saldo)
    let informações:Conta [] = []
    let op = Number(prompt("esquole una opição 1-(para munda o nome) 2-(colocar dimheiro) 3-(retira dinheiro) ou 0-(sair)"))

    while( op != 0){
    if (op == 1) {
        let NovoNome = String(prompt("informe o novo nome: "))
        conta.AlterarNome(NovoNome)
    }
    else if (op == 2) {
        let NovoValor = Number(prompt("informe o novo valora recebido: "))
        conta.Deposito(NovoValor)
    }
    else if (op == 3) {
        let retirado = Number(prompt("informe o valor retira: "))
        conta.saldoRetirado(retirado)
    }
    op = Number(prompt("esquole una opição 1-(para munda o nome) 2-(colocar dimheiro) 3-(retira dinheiro) ou 0-(sair)"))

    }
    for(let conta of informações){
        conta.Executa()
    }
}
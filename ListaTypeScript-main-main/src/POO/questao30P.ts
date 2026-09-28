/**30. O Sistema de Bilhetagem de Transporte Intermunicipal
O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
faturamento total do dia utilizando uma estrutura de redução ou soma acumulada. */

export function quest30P(): void {

    abstract class Passagem {

        private _nome: string
        private _cpf: string
        private _valorBase: number

        constructor(
            nome: string,
            cpf: string,
            valorBase: number
        ) {
            this._nome = nome
            this._cpf = cpf
            this._valorBase = valorBase
        }

        public get nome(): string {
            return this._nome
        }

        public get cpf(): string {
            return this._cpf
        }

        public get valorBase(): number {
            return this._valorBase
        }

        public abstract calcularValor(): number

        public abstract exibir(): string
    }


    class PassagemComum extends Passagem {

        public calcularValor(): number {
            return this.valorBase
        }

        public exibir(): string {
            return `Passagem Comum
                    Passageiro: ${this.nome}
                    CPF: ${this.cpf}
                    Valor: R$ ${this.calcularValor().toFixed(2)}`
        }
    }


    class PassagemEstudantil extends Passagem {

        public calcularValor(): number {
            return this.valorBase * 0.5
        }

        public exibir(): string {
            return `Passagem Estudantil
                    Passageiro: ${this.nome}
                    CPF: ${this.cpf}
                    Valor com 50% de desconto: R$ ${this.calcularValor().toFixed(2)}`
        }
    }


    let passagens: Passagem[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt(
            "SISTEMA DE BILHETAGEM: 1 - Passagem Comum | 2 - Passagem Estudantil | 0 - Encerrar vendas"))

        if (opcao == "1") {

            let nome = String(
                prompt("Nome do passageiro:")
            )

            let cpf = String(
                prompt("CPF do passageiro:")
            )

            let valor = Number(
                prompt("Valor base da passagem:")
            )

            if (nome != "" && cpf != "" && valor > 0) {

                let passagem = new PassagemComum(nome,cpf,valor)
                passagens.push(passagem)

                window.alert("Passagem vendida!")

            } else {
                window.alert("Digite dados válidos!")
            }

        } else if (opcao == "2") {

            let nome = String(
                prompt("Nome do passageiro:")
            )

            let cpf = String(
                prompt("CPF do passageiro:")
            )

            let valor = Number(
                prompt("Valor base da passagem:")
            )

            if (nome != "" && cpf != "" && valor > 0) {

                let passagem = new PassagemEstudantil(nome,cpf,valor)
                passagens.push(passagem)

                window.alert("Passagem estudantil vendida!")

            } else {
                window.alert("Digite dados válidos!")
            }
        }
    }


    let relatorio = "RELATÓRIO DE PASSAGENS\n"
    let faturamento = 0

    for (let passagem of passagens) {

        relatorio = relatorio + passagem.exibir() 
            

        faturamento = faturamento + passagem.calcularValor()
    }


    if (passagens.length == 0) {

        relatorio = "Nenhuma passagem foi vendida."

    } else {

        relatorio = relatorio +`Faturamento total do dia: R$ ${faturamento.toFixed(2)}`
    }

    window.alert(relatorio)
}
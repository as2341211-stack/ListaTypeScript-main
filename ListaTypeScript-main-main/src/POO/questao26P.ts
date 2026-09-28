/** 26. Simulador de Contas Bancárias Cooperativas
Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
atualizado de forma protegida após cada operação.*/

export function quest26P(): void {

    abstract class Conta {

        private _titular: string
        protected _saldo: number

        constructor(titular: string, saldo: number) {
            this._titular = titular
            this._saldo = saldo
        }

        public get titular(): string {
            return this._titular
        }

        public get saldo(): number {
            return this._saldo
        }

        public depositar(valor: number): void {
            if (valor > 0) {
                this._saldo = this._saldo + valor
            }
        }

        public sacar(valor: number): void {
            if (valor > 0 && valor <= this._saldo) {
                this._saldo = this._saldo - valor
            }
        }

        public abstract exibir(): string
    }


    class ContaCorrente extends Conta {

        public sacar(valor: number): void {

            let valorTotal = valor + 2

            if (valor > 0 && valorTotal <= this.saldo) {
                this._saldo = this._saldo - valorTotal
                window.alert("Saque realizado com taxa de R$ 2,00.")
            } else {
                window.alert("Saldo insuficiente!")
            }
        }

        public exibir(): string {
            return `Conta Corrente
                    Titular: ${this.titular}
                    Saldo: R$ ${this.saldo.toFixed(2)}`
        }
    }


    class ContaPoupanca extends Conta {

        public render(): void {
            this._saldo = this._saldo + (this._saldo * 0.01)
        }

        public exibir(): string {
            return `Conta Poupança
                    Titular: ${this.titular}
                    Saldo: R$ ${this.saldo.toFixed(2)}`
        }
    }


    let contas: Conta[] = []

    let nome = String(prompt("Digite o nome do titular:"))

    let contaCorrente = new ContaCorrente(nome, 0)
    let contaPoupanca = new ContaPoupanca(nome, 0)
    contas.push(contaCorrente)
    contas.push(contaPoupanca)

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("Escolha a conta: 1 - Conta Corrente | 2 - Conta Poupança | 0 - Sair"))

        if (opcao == "1") {

            let operacao = ""

            while (operacao != "0") {

                operacao = String(prompt( "Conta Corrente: 1 - Depositar | 2 - Sacar | 3 - Ver saldo | 0 - Voltar"))

                if (operacao == "1") {

                    let valor = Number(prompt("Digite o valor do depósito:"))

                    contaCorrente.depositar(valor)

                    window.alert(contaCorrente.exibir())

                } else if (operacao == "2") {

                    let valor = Number(prompt("Digite o valor do saque:"))

                    contaCorrente.sacar(valor)

                    window.alert(contaCorrente.exibir())

                } else if (operacao == "3") {

                    window.alert(contaCorrente.exibir())
                }
            }

        } else if (opcao == "2") {

            let operacao = ""

            while (operacao != "0") {

                operacao = String(prompt("Conta Poupança; 1 - Depositar | 2 - Sacar | 3 - Rendimento de 1% | 4 - Ver saldo | 0 - Voltar"))

                if (operacao == "1") {

                    let valor = Number(prompt("Digite o valor do depósito:"))
                    
                    contaPoupanca.depositar(valor)

                    window.alert(contaPoupanca.exibir())

                } else if (operacao == "2") {

                    let valor = Number(prompt("Digite o valor do saque:"))

                    contaPoupanca.sacar(valor)

                    window.alert(contaPoupanca.exibir())

                } else if (operacao == "3") {

                    contaPoupanca.render()

                    window.alert("Rendimento de 1% aplicado!" + contaPoupanca.exibir())

                } else if (operacao == "4") {

                    window.alert(contaPoupanca.exibir())
                }
            }
        }
    }

    window.alert("Programa encerrado!")
}
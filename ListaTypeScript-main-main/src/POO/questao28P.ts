/** 28. Gestão de Diárias de um Hotel Fazenda
Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
temporada.*/

export function quest28P(): void {

    abstract class Acomodacao {

        private _quarto: number
        private _precoDiaria: number
        private _dias: number

        constructor(
            quarto: number,
            precoDiaria: number,
            dias: number
        ) {
            this._quarto = quarto
            this._precoDiaria = precoDiaria
            this._dias = dias
        }

        public get quarto(): number {
            return this._quarto
        }

        public get precoDiaria(): number {
            return this._precoDiaria
        }

        public get dias(): number {
            return this._dias
        }

        public abstract calcularTotal(): number

        public abstract exibir(): string
    }


    class AcomodacaoBasica extends Acomodacao {

        public calcularTotal(): number {
            return this.precoDiaria * this.dias
        }

        public exibir(): string {
            return `Quarto: ${this.quarto}
                    Tipo: Acomodação Básica
                    Dias hospedado: ${this.dias}
                    Valor total: R$ ${this.calcularTotal().toFixed(2)}`
        }
    }


    class SuiteMaster extends Acomodacao {

        private _adicionalHidro: number

        constructor(
            quarto: number,
            precoDiaria: number,
            dias: number,
            adicionalHidro: number
        ) {
            super(quarto, precoDiaria, dias)
            this._adicionalHidro = adicionalHidro
        }

        public get adicionalHidro(): number {
            return this._adicionalHidro
        }

        public calcularTotal(): number {
            return (this.precoDiaria + this.adicionalHidro) * this.dias
        }

        public exibir(): string {
            return `Quarto: ${this.quarto}
                    Tipo: Suíte Master
                    Dias hospedado: ${this.dias}
                    Adicional da hidromassagem: R$ ${this.adicionalHidro.toFixed(2)}
                    Valor total: R$ ${this.calcularTotal().toFixed(2)}`
        }
    }


    let checkouts: Acomodacao[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("GESTÃO DE DIÁRIAS: 1 - Cadastrar Acomodação Básica | 2 - Cadastrar Suíte Master | 0 - Finalizar"))

        if (opcao == "1") {

            let quarto = Number(
                prompt("Número do quarto:")
            )

            let preco = Number(
                prompt("Preço da diária:")
            )

            let dias = Number(
                prompt("Quantos dias o hóspede ficou?")
            )

            if (quarto > 0 && preco > 0 && dias > 0) {

                let acomodacao = new AcomodacaoBasica(quarto,preco,dias)
                checkouts.push(acomodacao)

                window.alert("Check-out cadastrado!")

            } else {
                window.alert("Digite valores válidos!")
            }

        } else if (opcao == "2") {

            let quarto = Number(
                prompt("Número do quarto:")
            )

            let preco = Number(
                prompt("Preço da diária:")
            )

            let dias = Number(
                prompt("Quantos dias o hóspede ficou?")
            )

            let adicional = Number(
                prompt("Valor adicional da hidromassagem:")
            )

            if (
                quarto > 0 &&
                preco > 0 &&
                dias > 0 &&
                adicional >= 0
            ) {

                let suite = new SuiteMaster(quarto,preco,dias,adicional)
                checkouts.push(suite)

                window.alert("Check-out cadastrado!")

            } else {
                window.alert("Digite valores válidos!")
            }
        }
    }


    let resultado = "QUARTOS COM FATURAMENTO ACIMA DE R$ 1.000,00\n"

    let encontrou = false

    for (let acomodacao of checkouts) {

        if (acomodacao.calcularTotal() > 1000) {

            resultado = resultado + acomodacao.exibir()
            encontrou = true
        }
    }


    if (encontrou == false) {
        resultado = "Nenhum quarto faturou mais de R$ 1.000,00."
    }

    window.alert(resultado)
}
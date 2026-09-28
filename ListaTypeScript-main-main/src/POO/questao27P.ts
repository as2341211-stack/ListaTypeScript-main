/**27. Inventário Automatizado de Equipamentos de TI
Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado. */

export function quest27P(): void {

    abstract class Equipamento {

        private _tombamento: string
        private _descricao: string

        constructor(tombamento: string, descricao: string) {
            this._tombamento = tombamento
            this._descricao = descricao
        }

        public get tombamento(): string {
            return this._tombamento
        }

        public get descricao(): string {
            return this._descricao
        }

        public abstract autoInspecao(): string
    }


    class Computador extends Equipamento {

        private _ram: number

        constructor(
            tombamento: string,
            descricao: string,
            ram: number
        ) {
            super(tombamento, descricao)
            this._ram = ram
        }

        public get ram(): number {
            return this._ram
        }

        public autoInspecao(): string {
            return `FICHA TÉCNICA
                    Tipo: Computador
                    Tombamento: ${this.tombamento}
                    Descrição: ${this.descricao}
                    Memória RAM: ${this.ram} GB`
        }
    }


    class Roteador extends Equipamento {

        private _portas: number

        constructor(
            tombamento: string,
            descricao: string,
            portas: number
        ) {
            super(tombamento, descricao)
            this._portas = portas
        }

        public get portas(): number {
            return this._portas
        }

        public autoInspecao(): string {
            return `FICHA TÉCNICA
                    Tipo: Roteador
                    Tombamento: ${this.tombamento}
                    Descrição: ${this.descricao}
                    Portas disponíveis: ${this.portas}`
        }
    }


    let equipamentos: Equipamento[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt(
            "1 - Cadastrar Computador | 2 - Cadastrar Roteador | 0 - Finalizar cadastro"
        ))

        if (opcao == "1") {

            let tombamento = ""

            while (tombamento == "") {
                tombamento = String(
                    prompt("Digite o número de tombamento:")
                )

                if (tombamento == "") {
                    window.alert("O tombamento não pode ser vazio!")
                }
            }

            let descricao = ""

            while (descricao == "") {
                descricao = String(
                    prompt("Digite a descrição do computador:")
                )

                if (descricao == "") {
                    window.alert("A descrição não pode ser vazia!")
                }
            }

            let ram = 0

            while (ram <= 0 || isNaN(ram)) {

                ram = Number(
                    prompt("Digite a quantidade de RAM em GB:")
                )

                if (ram <= 0 || isNaN(ram)) {
                    window.alert("Digite uma quantidade de RAM válida!")
                }
            }

            let computador = new Computador(tombamento,descricao,ram)
            equipamentos.push(computador)

            window.alert("Computador cadastrado!")


        } else if (opcao == "2") {

            let tombamento = ""

            while (tombamento == "") {
                tombamento = String(
                    prompt("Digite o número de tombamento:")
                )

                if (tombamento == "") {
                    window.alert("O tombamento não pode ser vazio!")
                }
            }

            let descricao = ""

            while (descricao == "") {
                descricao = String(
                    prompt("Digite a descrição do roteador:")
                )

                if (descricao == "") {
                    window.alert("A descrição não pode ser vazia!")
                }
            }

            let portas = 0

            while (portas <= 0 || isNaN(portas)) {

                portas = Number(
                    prompt("Digite a quantidade de portas:")
                )

                if (portas <= 0 || isNaN(portas)) {
                    window.alert("Digite uma quantidade de portas válida!")
                }
            }

            let roteador = new Roteador(tombamento,descricao,portas)
            equipamentos.push(roteador)

        }
    }


    let resultado = "AUTO-INSPEÇÃO DO INVENTÁRIO\n\n"

    for (let equipamento of equipamentos) {

        resultado = resultado +
            equipamento.autoInspecao()
    }

    if (equipamentos.length == 0) {
        resultado = "Nenhum equipamento foi cadastrado."
    }

    window.alert(resultado)
}
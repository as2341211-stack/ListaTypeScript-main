/**34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Sistema de Gestão de Estacionamento Rotativo
Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o

expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
item e exibe o faturamento total arrecadado no dia. */

export function quest34P(): void {

    abstract class Veiculo {

        private _placa: string
        private _horaEntrada: string

        constructor(
            placa: string,
            horaEntrada: string
        ) {
            this._placa = placa
            this._horaEntrada = horaEntrada
        }

        public get placa(): string {
            return this._placa
        }

        public get horaEntrada(): string {
            return this._horaEntrada
        }

        public abstract calcularValor(
            horasPermanencia: number
        ): number
    }


    class Carro extends Veiculo {

        public calcularValor(
            horasPermanencia: number
        ): number {

            return horasPermanencia * 5
        }
    }


    class Moto extends Veiculo {

        public calcularValor(
            horasPermanencia: number
        ): number {

            return horasPermanencia * 3
        }
    }


    let veiculos: Veiculo[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt(
            "ESTACIONAMENTO ROTATIVO:1 - Cadastrar Carro | 2 - Cadastrar Moto | 0 - Encerrar expediente"))

        if (opcao == "1") {

            let placa = String(
                prompt("Digite a placa do carro:")
            )

            let horaEntrada = String(
                prompt("Digite a hora de entrada:")
            )

            if (placa != "" && horaEntrada != "") {

                let carro = new Carro(placa,horaEntrada)
                veiculos.push(carro)

                window.alert(
                    "Carro cadastrado!"
                )

            } else {

                window.alert(
                    "Digite dados válidos!"
                )
            }


        } else if (opcao == "2") {

            let placa = String(
                prompt("Digite a placa da moto:")
            )

            let horaEntrada = String(
                prompt("Digite a hora de entrada:")
            )

            if (placa != "" && horaEntrada != "") {

                let moto = new Moto(placa,horaEntrada)
                veiculos.push(moto)

                window.alert(
                    "Moto cadastrada!"
                )

            } else {

                window.alert(
                    "Digite dados válidos!"
                )
            }
        }
    }


    let faturamento = 0

    let resultado =
        "FATURAMENTO DO DIA\n\n"


    for (let veiculo of veiculos) {

        let horas = Number(prompt(`Quantas horas o veículo ${veiculo.placa} permaneceu?`))

        if (horas > 0) {

            let valor =veiculo.calcularValor(horas)

            faturamento = faturamento + valor

            resultado = resultado + `Placa: ${veiculo.placa}\n` + `Hora de entrada: ${veiculo.horaEntrada}\n` + `Horas: ${horas}\n` + `Valor: R$ ${valor.toFixed(2)}\n\n`
        }
    }


    resultado = resultado +`Faturamento total: R$ ${faturamento.toFixed(2)}`

    window.alert(resultado)
}
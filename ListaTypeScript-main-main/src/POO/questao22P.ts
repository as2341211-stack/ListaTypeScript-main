/**Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Oficina Mecânica e Revisão de Frotas
O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
manutenção imediata.*/

export function quest22P(): void {

    abstract class Veiculo {
        private _placa: string
        private _quilometragem: number

        constructor(placa: string, quilometragem: number) {
            this._placa = placa
            this._quilometragem = quilometragem
        }

        public get placa(): string {
            return this._placa
        }

        public get quilometragem(): number {
            return this._quilometragem
        }

        public set quilometragem(quilometragem: number) {
            this._quilometragem = quilometragem
        }

        public abstract precisaRevisao(): boolean
    }

    class Onibus extends Veiculo {

        public precisaRevisao(): boolean {
            return this.quilometragem >= 10000
        }
    }

    class Ambulancia extends Veiculo {

        public precisaRevisao(): boolean {
            return this.quilometragem >= 5000
        }
    }

    let veiculos: Veiculo[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("1 - Cadastrar ônibus | 2 - Cadastrar ambulância | 0 - Encerrar cadastro"
        ))

        if (opcao == "1") {

            let placa = String(prompt("Placa do ônibus:"))
            let quilometragem = Number(prompt("Quilometragem atual:"))

            let onibus = new Onibus(placa, quilometragem)
            veiculos.push(onibus)

            window.alert("Ônibus cadastrado!")

        } else if (opcao == "2") {

            let placa = String(prompt("Placa da ambulância:"))
            let quilometragem = Number(prompt("Quilometragem atual:"))

            let ambulancia = new Ambulancia(placa, quilometragem)
            veiculos.push(ambulancia)

            window.alert("Ambulância cadastrada!")
        }
    }

    let placaProcurada = String(prompt("Digite a placa do veículo para consultar:"))
    let novaQuilometragem = Number(prompt("Digite a quilometragem atual:"))

    let encontrado = false

    for (let veiculo of veiculos) {

        if (veiculo.placa == placaProcurada) {

            veiculo.quilometragem = novaQuilometragem

            encontrado = true

            if (veiculo.precisaRevisao()) {
                window.alert(
                    `O veículo ${veiculo.placa} precisa ser retido para manutenção imediata!`
                )
            } else {
                window.alert(
                    `O veículo ${veiculo.placa} não precisa de manutenção imediata.`
                )
            }
        }
    }
    if (encontrado == false) {
        window.alert("Veículo não encontrado!")
    }
}
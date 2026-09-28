/**35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Controle de Clientes do Posto de Saúde
O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
quantidade total de pacientes prioritários atendidos. */

export function quest35P(): void {

    abstract class Paciente {

        private _nome: string
        private _cartaoSUS: string

        constructor(
            nome: string,
            cartaoSUS: string
        ) {
            this._nome = nome
            this._cartaoSUS = cartaoSUS
        }

        public get nome(): string {
            return this._nome
        }

        public get cartaoSUS(): string {
            return this._cartaoSUS
        }

        public abstract exibirFicha(): string
    }


    class PacienteComum extends Paciente {

        public exibirFicha(): string {

            return `FICHA DE ATENDIMENTO
                    Nome: ${this.nome}
                    Cartão SUS: ${this.cartaoSUS}
                    Tipo: Paciente Comum`
        }
    }


    class PacientePrioritario extends Paciente {

        private _prioridade: string

        constructor(
            nome: string,
            cartaoSUS: string,
            prioridade: string
        ) {
            super(nome, cartaoSUS)
            this._prioridade = prioridade
        }

        public get prioridade(): string {
            return this._prioridade
        }

        public exibirFicha(): string {

            return `*** ATENDIMENTO PRIORITÁRIO ***
                    Nome: ${this.nome}
                    Cartão SUS: ${this.cartaoSUS}
                    Prioridade: ${this.prioridade}`
        }
    }


    let pacientes: Paciente[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("POSTO DE SAÚDE: 1 - Paciente Comum | 2 - Paciente Prioritário | 0 - Finalizar cadastro"))

        if (opcao == "1") {

            let nome = String(
                prompt("Nome do paciente:")
            )

            let cartaoSUS = String(
                prompt("Número do cartão SUS:")
            )

            if (nome != "" && cartaoSUS != "") {

                let paciente = new PacienteComum(nome,cartaoSUS)
                pacientes.push(paciente)

                window.alert("Paciente comum cadastrado!")

            } else {

                window.alert("Digite dados válidos!")
            }


        } else if (opcao == "2") {

            let nome = String(prompt("Nome do paciente:"))
            let cartaoSUS = String(prompt("Número do cartão SUS:"))
            let prioridade = String(prompt("Tipo de prioridade: Ex: Idoso, Gestante..."))

            if (nome != "" && cartaoSUS != "" && prioridade != "") {

                let paciente =new PacientePrioritario(nome,cartaoSUS,prioridade)
                pacientes.push(paciente)

                window.alert("Paciente prioritário cadastrado!")

            } else {

                window.alert("Digite dados válidos!")
            }
        }
    }


    let resultado =
        "FICHAS DE ATENDIMENTO\n\n"

    let totalPrioritarios = 0


    for (let paciente of pacientes) {

        resultado = resultado + paciente.exibirFicha() + "\n\n----------------------\n\n"

        if (paciente instanceof PacientePrioritario) {

            totalPrioritarios = totalPrioritarios + 1
        }
    }


    resultado = resultado + `Total de pacientes prioritários: ${totalPrioritarios}`

    window.alert(resultado)
}
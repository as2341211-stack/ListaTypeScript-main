/**Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Gerenciador de Tarefas e Produtividade Acadêmica
Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
contidos na lista. */

export function quest24P(): void {

    abstract class Tarefa {
        private _descricao: string
        private _concluida: boolean

        constructor(descricao: string) {
            this._descricao = descricao
            this._concluida = false
        }

        public get descricao(): string {
            return this._descricao
        }

        public get concluida(): boolean {
            return this._concluida
        }

        public marcarConcluida(): void {
            this._concluida = true
        }

        public abstract exibir(): string
    }

    class TarefaAcademica extends Tarefa {
        private _disciplina: string

        constructor(descricao: string, disciplina: string) {
            super(descricao)
            this._disciplina = disciplina
        }

        public exibir(): string {
            return `Acadêmica - ${this.descricao} | Disciplina: ${this._disciplina}`
        }
    }

    class TarefaPessoal extends Tarefa {
        private _prioridade: string

        constructor(descricao: string, prioridade: string) {
            super(descricao)
            this._prioridade = prioridade
        }

        public exibir(): string {
            return `Pessoal - ${this.descricao} | Prioridade: ${this._prioridade}`
        }
    }

    let tarefas: Tarefa[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt(
            "1 - Cadastrar tarefa acadêmica | 2 - Cadastrar tarefa pessoal | 3 - Marcar tarefa como concluída | 4 - Listar tarefas acadêmicas pendentes | 0 - Encerrar"))

        if (opcao == "1") {

            let descricao = String(prompt("Descrição da tarefa:"))
            let disciplina = String(prompt("Disciplina:"))

            let tarefa = new TarefaAcademica(descricao,disciplina)
            tarefas.push(tarefa)

            window.alert("Tarefa cadastrada!")

        } else if (opcao == "2") {

            let descricao = String(prompt("Descrição da tarefa:"))
            let prioridade = String(prompt("Prioridade:"))

            let tarefa = new TarefaPessoal(descricao,prioridade)
            tarefas.push(tarefa)

            window.alert("Tarefa cadastrada!")

        } else if (opcao == "3") {

            let resultado = "=== TAREFAS ===\n"

            for (let i = 0; i < tarefas.length; i++) {
                resultado = resultado +`${i} - ${tarefas[i].exibir()}\n`
            }

            let numero = Number(
                prompt(resultado + "\nDigite o número da tarefa:")
            )

            if (numero >= 0 && numero < tarefas.length) {
                tarefas[numero].marcarConcluida()

                window.alert("Tarefa marcada como concluída!")
            } else {
                window.alert("Tarefa não encontrada!")
            }

        } else if (opcao == "4") {

            for (let tarefa of tarefas) {

                if (
                    tarefa instanceof TarefaAcademica &&
                    tarefa.concluida == false
                ) {
                        tarefa.exibir()
                }
            }
        }
    }
}
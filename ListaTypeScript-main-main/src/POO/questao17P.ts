/**Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Controle de Frequência do Refeitório do IFS
O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores. */




export function quest17P(): void {

    abstract class Usuario {
        private _id: number
        private _nome: string

        constructor(id: number, nome: string) {
            this._id = id
            this._nome = nome
        }

        public get id(): number {
            
            return this._id
        }

        public get nome(): string {
            
            return this._nome
        }

        public abstract identificar(): string
    }

    class Aluno extends Usuario {
        private _curso: string

        constructor(id: number, nome: string, curso: string) {
            super(id, nome)
            this._curso = curso
        }

        public identificar(): string {
            return `Aluno: ${this.nome} | Curso: ${this._curso}`
        }
    }

    class Servidor extends Usuario {
        private _departamento: string

        constructor(id: number, nome: string, departamento: string) {
            super(id, nome)
            this._departamento = departamento
        }

        public identificar(): string {
            return `Servidor: ${this.nome} | Departamento: ${this._departamento}`
        }
    }

    let historico: Usuario[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("1 - Cadastrar aluno 2 - Cadastrar servidor 0 - Encerrar"))

        if (opcao == "1") {

            let id = Number(prompt("ID do aluno:"))
            let nome = String(prompt("Nome do aluno:"))
            let curso = String(prompt("Curso:"))

            let aluno = new Aluno(id, nome, curso)
            historico.push(aluno)

            window.alert("Acesso registrado!")

        } else if (opcao == "2") {

            let id = Number(prompt("ID do servidor:"))
            let nome = String(prompt("Nome do servidor:"))
            let departamento = String(prompt("Departamento:"))

            let servidor = new Servidor(id, nome, departamento)
            historico.push(servidor)

            window.alert("Acesso registrado!")
        }
    }

    let totalAlunos = 0
    let totalServidores = 0

    let resultado = "=== PESSOAS QUE ALMOÇARAM ===\n\n"

    for (let usuario of historico) {

        resultado = resultado + usuario.identificar() + "\n"

        if (usuario instanceof Aluno) {
            totalAlunos++
        } else if (usuario instanceof Servidor) {
            totalServidores++
        }

    }
    resultado = resultado + "-----------------------------\n"
    resultado = resultado + `Total de alunos: ${totalAlunos}\n`
    resultado = resultado + `Total de servidores: ${totalServidores}`

    window.alert(resultado)
}
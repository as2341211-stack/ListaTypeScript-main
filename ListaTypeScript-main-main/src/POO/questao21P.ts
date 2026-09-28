/**Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Concurso de Projetos de Extensão Reforest

O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição. */

export function quest21P(): void {

    abstract class Projeto {
        private _titulo: string
        private _coordenador: string
        private _nota: number

        constructor(titulo: string, coordenador: string, nota: number) {
            this._titulo = titulo
            this._coordenador = coordenador
            this._nota = nota
        }

        public get titulo(): string {
            return this._titulo
        }

        public get coordenador(): string {
            return this._coordenador
        }

        public get nota(): number {
            return this._nota
        }

        public setNota(nota: number): void {
            if (nota >= 0 && nota <= 10) {
                this._nota = nota
            } else {
                this._nota = 0
            }
        }

        public abstract identificar(): string
    }

    class ProjetoVerde extends Projeto {

        public identificar(): string {
            return `Projeto Verde: ${this.titulo} | Coordenador: ${this.coordenador}`
        }
    }

    class ProjetoCultural extends Projeto {

        public identificar(): string {
            return `Projeto Cultural: ${this.titulo} | Coordenador: ${this.coordenador}`
        }
    }

    let projetos: Projeto[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("1 - Projeto Verde | 2 - Projeto Cultural | 0 - Encerrar"))

        if (opcao == "1") {

            let titulo = String(prompt("Título do projeto:"))
            let coordenador = String(prompt("Coordenador:"))
            let nota = Number(prompt("Nota de avaliação (0 a 10):"))

            let projeto = new ProjetoVerde(titulo,coordenador,nota)
            projetos.push(projeto)

        } else if (opcao == "2") {

            let titulo = String(prompt("Título do projeto:"))
            let coordenador = String(prompt("Coordenador:"))
            let nota = Number(prompt("Nota de avaliação (0 a 10):"))

            let projeto = new ProjetoCultural(titulo,coordenador,nota)
            projetos.push(projeto)

        }
    }

    let soma = 0

    for (let projeto of projetos) {
        soma = soma + projeto.nota
    }

    let media = soma / projetos.length

    let resultado = `Média da competição: ${media.toFixed(2)}\n\n`
    resultado = resultado + "Projetos acima da média:\n\n"

    for (let i = projetos.length - 1; i >= 0; i--) {

        if (projetos[i].nota > media) {
            resultado = resultado + projetos[i].identificar() + "\n"
            resultado = resultado + `Nota: ${projetos[i].nota}\n\n`
        }
    }

    window.alert(resultado)
}
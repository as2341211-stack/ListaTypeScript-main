/**29. Catálogo de Biblioteca com Penalidades de Atraso
Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
exibe o valor total de multas que a biblioteca deve recolher. */

export function quest29P(): void {

    abstract class Obra {

        private _titulo: string
        private _autor: string

        constructor(titulo: string, autor: string) {
            this._titulo = titulo
            this._autor = autor
        }

        public get titulo(): string {
            return this._titulo
        }

        public get autor(): string {
            return this._autor
        }

        public abstract calcularPenalidade(dias: number): number
    }


    class LivroFisico extends Obra {

        public calcularPenalidade(dias: number): number {

            return dias * 2.50
        }
    }


    class ArtigoDigital extends Obra {

        public calcularPenalidade(dias: number): number {

            return 0
        }

        public advertencia(): string {

            return `Advertência virtual para o usuário.
                    Artigo: ${this.titulo}`
        }
    }


    let obras: Obra[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt(
            "BIBLIOTECA: 1 - Livro Físico | 2 - Artigo Científico Digital | 0 - Encerrar"))

        if (opcao == "1") {

            let titulo = String(
                prompt("Digite o título do livro:")
            )

            let autor = String(
                prompt("Digite o autor do livro:")
            )

            let dias = Number(
                prompt("Digite a quantidade de dias de atraso:")
            )

            if (titulo != "" && autor != "" && dias >= 0) {

                let livro = new LivroFisico(titulo,autor)
                obras.push(livro)

                let multa = livro.calcularPenalidade(dias)

                window.alert(
                    `Livro registrado!\n` +
                    `Título: ${livro.titulo}\n` +
                    `Autor: ${livro.autor}\n` +
                    `Multa: R$ ${multa.toFixed(2)}`
                )

            } else {
                window.alert("Digite dados válidos!")
            }

        } else if (opcao == "2") {

            let titulo = String(
                prompt("Digite o título do artigo:")
            )

            let autor = String(
                prompt("Digite o autor do artigo:")
            )

            let dias = Number(
                prompt("Digite a quantidade de dias de atraso:")
            )

            if (titulo != "" && autor != "" && dias >= 0) {

                let artigo = new ArtigoDigital(titulo,autor)
                obras.push(artigo)

                window.alert(
                    artigo.advertencia()
                )

            } else {
                window.alert("Digite dados válidos!")
            }
        }
    }


    let totalMultas = 0

    for (let obra of obras) {

        totalMultas = totalMultas + obra.calcularPenalidade(Number(prompt(`Quantos dias de atraso para "${obra.titulo}"?`))
            )
    }

    window.alert(
        `Total de multas a recolher:\n` +
        `R$ ${totalMultas.toFixed(2)}`
    )
}
/**33. Crie um sistema de gestão de empréstimos para a biblioteca do campus. A superclasse abstrata Obra
possui os atributos privados título e autor, e declara o método abstrato registrarAtraso(diasDeAtraso)
que deve ser sobrescrito pelas subclasses. LivroFisico calcula uma multa de R$ 2,50 por dia, enquanto
ArtigoDigital não gera multa, mas registra uma string de advertência ao usuário. O bibliotecário
informa continuamente o título e os dias de atraso de cada devolução. O sistema chama
registrarAtraso() polimorficamente para cada objeto e, ao encerrar, exibe o valor total de multas a ser
recolhido pela biblioteca.
Requisitos mínimos:
• Superclasse abstrata Obra com método abstrato registrarAtraso(dias).
• LivroFisico retorna valor de multa; ArtigoDigital retorna mensagem de advertência.
• Atributos titulo e autor privados, acessíveis apenas por getters.
• Polimorfismo: percorrer lista com tipo Obra e chamar registrarAtraso().
• Acumular e exibir total de multas ao final. */

export function quest33P(): void {

    abstract class Obra {

        private _titulo: string
        private _autor: string

        constructor(
            titulo: string,
            autor: string
        ) {
            this._titulo = titulo
            this._autor = autor
        }

        public get titulo(): string {
            return this._titulo
        }

        public get autor(): string {
            return this._autor
        }

        public abstract registrarAtraso(
            dias: number
        ): number | string
    }


    class LivroFisico extends Obra {

        public registrarAtraso(dias: number): number {

            return dias * 2.50
        }
    }


    class ArtigoDigital extends Obra {

        public registrarAtraso(dias: number): string {

            return `Advertência virtual registrada para o artigo "${this.titulo}".`
        }
    }


    let obras: Obra[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("GESTÃO DE EMPRÉSTIMOS: 1 - Livro Físico | 2 - Artigo Digital | 0 - Encerrar"))

        if (opcao == "1") {

            let titulo = String(
                prompt("Título do livro:")
            )

            let autor = String(
                prompt("Autor do livro:")
            )

            let dias = Number(
                prompt("Dias de atraso:")
            )

            if (titulo != "" && autor != "" && dias >= 0) {

                let livro = new LivroFisico(titulo,autor)
                obras.push(livro)

                window.alert(
                    `Livro registrado!\n\n` +
                    `Título: ${livro.titulo}\n` +
                    `Autor: ${livro.autor}`
                )

            } else {

                window.alert("Digite dados válidos!")
            }


        } else if (opcao == "2") {

            let titulo = String(
                prompt("Título do artigo:")
            )

            let autor = String(
                prompt("Autor do artigo:")
            )

            let dias = Number(
                prompt("Dias de atraso:")
            )

            if (titulo != "" && autor != "" && dias >= 0) {

                let artigo = new ArtigoDigital(titulo,autor)
                obras.push(artigo)

                window.alert(
                    `Artigo registrado!\n\n` +
                    `Título: ${artigo.titulo}\n` +
                    `Autor: ${artigo.autor}`
                )

            } else {

                window.alert("Digite dados válidos!")
            }
        }
    }


    let totalMultas = 0
    let resultado = "RESULTADO DOS EMPRÉSTIMOS\n\n"

    for (let obra of obras) {

        let dias = Number(
            prompt(
                `Dias de atraso da obra "${obra.titulo}":`
            )
        )

        let resultadoAtraso =
            obra.registrarAtraso(dias)

        if (typeof resultadoAtraso == "number") {

            totalMultas =
                totalMultas + resultadoAtraso

            resultado = resultado +
                `Livro: ${obra.titulo}\n` +
                `Multa: R$ ${resultadoAtraso.toFixed(2)}\n\n`

        } else {

            resultado = resultado + `${resultadoAtraso}\n\n`
        }
    }

    resultado = resultado + `Total de multas: R$ ${totalMultas.toFixed(2)}`
    window.alert(resultado)
}
/**31. O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para propostas de reflorestamento no campus
do IFS Tobias Barreto. Crie a superclasse Projeto com os atributos privados título, coordenador e
nota. O setter setNota(valor) deve validar estritamente o intervalo de 0 a 10, lançando exceção ou
mensagem de erro para valores inválidos. As subclasses ProjetoVerde (plantio urbano) e
ProjetoCultural (conscientização) sobrescrevem o método descricaoCategoria() com textos distintos.
O usuário preenche os projetos pelo terminal. O programa calcula a média das notas e, ao final, exibe
os projetos com nota acima da média, mostrando a categoria de cada uma via polimorfismo.
Requisitos mínimos:
• nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
• descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
• Cálculo de média com laço sobre os projetos cadastrados.
• Filtro e exibição dos projetos acima da média.
• Chamada polimórfica a descricaoCategoria() na exibição final. */

export function quest31P(): void {

    abstract class Projeto {

        private _titulo: string
        private _coordenador: string
        private _nota: number

        constructor(
            titulo: string,
            coordenador: string
        ) {
            this._titulo = titulo
            this._coordenador = coordenador
            this._nota = 0
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

        public setNota(valor: number): void {

            if (valor >= 0 && valor <= 10) {

                this._nota = valor

            } else {

                throw new Error(
                    "A nota deve estar entre 0 e 10."
                )
            }
        }

        public abstract descricaoCategoria(): string
    }


    class ProjetoVerde extends Projeto {

        public descricaoCategoria(): string {

            return "Categoria: Plantio urbano"
        }
    }


    class ProjetoCultural extends Projeto {

        public descricaoCategoria(): string {

            return "Categoria: Conscientização"
        }
    }


    let projetos: Projeto[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("PROJETO FLOR&SER: 1 - Projeto Verde | 2 - Projeto Cultural | 0 - Finalizar cadastro"))

        if (opcao == "1") {

            let titulo = String(
                prompt("Título do projeto:")
            )

            let coordenador = String(
                prompt("Nome do coordenador:")
            )

            let nota = Number(
                prompt("Nota do projeto (0 a 10):")
            )

            if (titulo != "" && coordenador != "" && !isNaN(nota)) {

                try {

                    let projeto = new ProjetoVerde(titulo,coordenador)
                    projeto.setNota(nota)
                    projetos.push(projeto)

                    window.alert("Projeto cadastrado!")

                } catch (erro) {

                    window.alert("Erro: a nota deve estar entre 0 e 10.")
                }

            } else {

                window.alert("Digite dados válidos!")
            }


        } else if (opcao == "2") {

            let titulo = String(
                prompt("Título do projeto:")
            )

            let coordenador = String(
                prompt("Nome do coordenador:")
            )

            let nota = Number(
                prompt("Nota do projeto (0 a 10):")
            )

            if (titulo != "" && coordenador != "" && !isNaN(nota)) {

                try {

                    let projeto = new ProjetoCultural(titulo,coordenador)
                    projeto.setNota(nota)
                    projetos.push(projeto)

                    window.alert("Projeto cadastrado!")

                } catch (erro) {

                    window.alert(
                        "Erro: a nota deve estar entre 0 e 10."
                    )
                }

            } else {

                window.alert("Digite dados válidos!")
            }
        }
    }


    if (projetos.length == 0) {

        window.alert("Nenhum projeto foi cadastrado.")
        return
    }


    let soma = 0

    for (let projeto of projetos) {

        soma = soma + projeto.nota
    }

    let media = soma / projetos.length


    let resultado =
        `MÉDIA DAS NOTAS: ${media.toFixed(2)}\n\n`

    let encontrou = false

    for (let projeto of projetos) {

        if (projeto.nota > media) {

            resultado = resultado +
                `Título: ${projeto.titulo}\n` +
                `Coordenador: ${projeto.coordenador}\n` +
                `Nota: ${projeto.nota}\n` +
                `${projeto.descricaoCategoria()}\n\n`

            encontrou = true
        }
    }


    if (encontrou == false) {

        resultado = resultado +
            "Nenhum projeto ficou acima da média."
    }


    window.alert(resultado)
}
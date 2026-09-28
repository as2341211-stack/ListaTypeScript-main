/**36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Portal de Cursos e Treinamentos Online
Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
curso, exibindo quais certificados foram liberados e quais ficaram pendentes. */

export function quest36P(): void {

    abstract class Curso {

        private _titulo: string
        private _cargaHoraria: number

        constructor(
            titulo: string,
            cargaHoraria: number
        ) {
            this._titulo = titulo
            this._cargaHoraria = cargaHoraria
        }

        public get titulo(): string {
            return this._titulo
        }

        public get cargaHoraria(): number {
            return this._cargaHoraria
        }

        public abstract emitirCertificado(): string
    }


    class CursoLivre extends Curso {

        public emitirCertificado(): string {

            return `CERTIFICADO LIBERADO
                    Curso: ${this.titulo}
                    Carga horária: ${this.cargaHoraria} horas
                    Tipo: Curso Livre`
        }
    }


    class CursoTecnico extends Curso {

        private _numeroProjeto: number
        private _notaProjeto: number

        constructor(
            titulo: string,
            cargaHoraria: number,
            numeroProjeto: number,
            notaProjeto: number
        ) {
            super(titulo, cargaHoraria)
            this._numeroProjeto = numeroProjeto
            this._notaProjeto = notaProjeto
        }

        public get numeroProjeto(): number {
            return this._numeroProjeto
        }

        public get notaProjeto(): number {
            return this._notaProjeto
        }

        public emitirCertificado(): string {

            if (this.notaProjeto >= 7) {

                return `CERTIFICADO LIBERADO
                        Curso: ${this.titulo}
                        Carga horária: ${this.cargaHoraria} horas
                        Projeto final: ${this.numeroProjeto}
                        Nota: ${this.notaProjeto}`

            } else {

                return `CERTIFICADO PENDENTE
                        Curso: ${this.titulo}
                        Projeto final: ${this.numeroProjeto}
                        Nota: ${this.notaProjeto}
                        Motivo: Projeto final não aprovado`
            }
        }
    }


    let cursos: Curso[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("PORTAL DE CURSOS: 1 - Curso Livre | 2 - Curso Técnico | 0 - Finalizar cadastro"))

        if (opcao == "1") {

            let titulo = String(prompt("Título do curso:"))
            let cargaHoraria = Number(prompt("Carga horária:"))

            if ( titulo != "" && cargaHoraria > 0) {

                let curso = new CursoLivre(titulo,cargaHoraria)
                cursos.push(curso)
                window.alert("Curso livre cadastrado!")

            } else {

                window.alert("Digite dados válidos!")
            }

        } else if (opcao == "2") {

            let titulo = String(prompt("Título do curso:"))
            let cargaHoraria = Number(prompt("Carga horária:"))
            let numeroProjeto = Number(prompt("Número do projeto final:"))
            let notaProjeto = Number(prompt("Nota do projeto final:"))

            if ( titulo != "" && cargaHoraria > 0 && numeroProjeto > 0 && notaProjeto >= 0 && notaProjeto <= 10) {

                let curso = new CursoTecnico(titulo,cargaHoraria,numeroProjeto,notaProjeto)
                cursos.push(curso)

                window.alert("Curso técnico cadastrado!")

            } else {

                window.alert("Digite dados válidos!")
            }
        }
    }


    let resultado = "RESULTADO DOS CERTIFICADOS\n"


    for (let curso of cursos) {

        resultado = resultado + curso.emitirCertificado() + "\n\n----------------------\n\n"
    }


    window.alert(resultado)
}
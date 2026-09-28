/**32. Desenvolva o motor de pontuação de um jogo arcade. A superclasse Jogador possui os atributos
privados nickname e pontuacao (iniciada em zero), sendo pontuação acessível somente pelo método
realizarMissao() — nunca diretamente. JogadorComum ganha 100 pontos por missão.
JogadorPremium sobrescreve realizarMissao() e acumula 150 pontos (100 + 50% de bônus). O
programa solicita ao usuário o tipo e o apelido de cada jogador. A cada rodada, o usuário informa qual
jogador realizou uma missão. Ao final do torneio, o programa exibe a classificação completa e destaca
quem ultrapassou 1.000 pontos.
Requisitos mínimos:
• pontuacao privada: modificada apenas por realizarMissao(), nunca diretamente.
• JogadorPremium sobrescreve realizarMissao() com bônus de 50%.
• Getter getPontuacao() para leitura controlada.
• Loop de rodadas com condição de parada por comando do usuário.
• Exibição final com classificação e destaque para campeões. */

export function quest32P(): void {

    abstract class Jogador {

        private _nickname: string
        private _pontuacao: number

        constructor(nickname: string) {
            this._nickname = nickname
            this._pontuacao = 0
        }

        public get nickname(): string {
            return this._nickname
        }

        public getPontuacao(): number {
            return this._pontuacao
        }

        protected adicionarPontos(valor: number): void {
            this._pontuacao = this._pontuacao + valor
        }

        public abstract realizarMissao(): void
    }


    class JogadorComum extends Jogador {

        public realizarMissao(): void {

            this.adicionarPontos(100)
        }
    }


    class JogadorPremium extends Jogador {

        public realizarMissao(): void {

            this.adicionarPontos(150)
        }
    }


    let jogadores: Jogador[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("CADASTRO DE JOGADORES: 1 - Jogador Comum | 2 - Jogador Premium | 0 - Finalizar cadastro"))

        if (opcao == "1") {

            let nickname = String(
                prompt("Digite o nickname:")
            )

            if (nickname != "") {

                let jogador = new JogadorComum(nickname)
                jogadores.push(jogador)

                window.alert("Jogador comum cadastrado!")

            } else {

                window.alert("Nickname inválido!")
            }


        } else if (opcao == "2") {

            let nickname = String(
                prompt("Digite o nickname:")
            )

            if (nickname != "") {

                let jogador = new JogadorPremium(nickname)
                jogadores.push(jogador)

                window.alert("Jogador Premium cadastrado!")

            } else {

                window.alert("Nickname inválido!")
            }
        }
    }


    if (jogadores.length == 0) {

        window.alert("Nenhum jogador foi cadastrado.")
        return
    }


    let rodada = ""

    while (rodada != "0") {

        let lista = ""

        for (let i = 0; i < jogadores.length; i++) {

            lista = lista +
                `${i + 1} - ${jogadores[i].nickname}\n`
        }

        rodada = String(prompt(
            "RODADA\n\n" +lista +
            "\nDigite o número do jogador que realizou uma missão.\n" +
            "Digite 0 para finalizar."
        ))

        if (rodada != "0") {

            let indice = Number(rodada) - 1

            if (
                indice >= 0 &&
                indice < jogadores.length
            ) {

                jogadores[indice].realizarMissao()

                window.alert(
                    `${jogadores[indice].nickname} realizou uma missão!\n` +
                    `Pontuação atual: ${jogadores[indice].getPontuacao()}`
                )

            } else {

                window.alert("Jogador inválido!")
            }
        }
    }


    let resultado = "CLASSIFICAÇÃO FINAL\n"

    for (let jogador of jogadores) {

        resultado = resultado + `${jogador.nickname} - ` + `${jogador.getPontuacao()} pontos`

        if (jogador.getPontuacao() > 1000) {

            resultado = resultado + "CAMPEÃO"
        }

    }


    window.alert(resultado)
}
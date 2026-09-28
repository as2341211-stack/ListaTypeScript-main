/**Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
Mamíferos têm tipo de alimentação (ex: &quot;Carnívoro&quot;, &quot;Herbívoro”, ...). Para as aves precisa-se saber
se são migratórias ou não. Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente.
O Método &quot;Hora da Alimentação&quot; (Rotina Polimórfica): Crie uma função ou método executável
chamado simularHoraAlimentacao(listaAnimais: Animal[]). Esse método deve percorrer o array de
animais com um laço de repetição, imprimindo o nome do animal sendo alimentado pelo tratador e
acionando o seu método emitirSom()
Fluxo do Programa: O sistema deve cadastrar vários animais, listar por tipo (Mamíferos ou Aves) e
ao final a disparar a rotina simularHoraAlimentacao() chamando o método de som de cada um. */

export function quest26P(): void {

    abstract class Animal {

        private _nome: string
        private _especie: string
        private _idade: number
        private _sexo: string

        constructor(nome: string, especie: string, idade: number, sexo: string) {
            this._nome = nome
            this._especie = especie
            this._idade = idade
            this._sexo = sexo
        }

        public get nome(): string {
            return this._nome
        }

        public get especie(): string {
            return this._especie
        }

        public get idade(): number {
            return this._idade
        }

        public get sexo(): string {
            return this._sexo
        }

        public abstract emitirSom(): string
        public abstract mover(): string
        public abstract exibir(): string
    }


    class Mamifero extends Animal {

        private _alimentacao: string

        constructor(
            nome: string,
            especie: string,
            idade: number,
            sexo: string,
            alimentacao: string
        ) {
            super(nome, especie, idade, sexo)
            this._alimentacao = alimentacao
        }

        public get alimentacao(): string {
            return this._alimentacao
        }

        public emitirSom(): string {
            return "O mamífero está emitindo seu som."
        }

        public mover(): string {
            return "O mamífero está andando."
        }

        public exibir(): string {
            return `Nome: ${this.nome}
Espécie: ${this.especie}
Idade: ${this.idade}
Sexo: ${this.sexo}
Alimentação: ${this.alimentacao}`
        }
    }


    class Ave extends Animal {

        private _migratoria: boolean

        constructor(
            nome: string,
            especie: string,
            idade: number,
            sexo: string,
            migratoria: boolean
        ) {
            super(nome, especie, idade, sexo)
            this._migratoria = migratoria
        }

        public get migratoria(): boolean {
            return this._migratoria
        }

        public emitirSom(): string {
            return "A ave está cantando."
        }

        public mover(): string {
            return "A ave está voando."
        }

        public exibir(): string {
            let migratoriaTexto = this.migratoria ? "Sim" : "Não"

            return `Nome: ${this.nome}
Espécie: ${this.especie}
Idade: ${this.idade}
Sexo: ${this.sexo}
Migratória: ${migratoriaTexto}`
        }
    }


    function simularHoraAlimentacao(listaAnimais: Animal[]): void {

        let resultado = "HORA DA ALIMENTAÇÃO\n\n"

        for (let animal of listaAnimais) {

            resultado = resultado +
                `O tratador está alimentando ${animal.nome}.\n`

            resultado = resultado +
                `${animal.emitirSom()}\n\n`
        }

        window.alert(resultado)
    }


    let listaAnimais: Animal[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("Zoológico | 1 - Cadastrar Mamífero | 2 - Cadastrar Ave | 3 - Listar Mamíferos | 4 - Listar Aves | 5 - Hora da Alimentação | 0 - Sair"))

        if (opcao == "1") {

            let nome = String(prompt("Nome do mamífero:"))
            let especie = String(prompt("Espécie:"))
            let idade = Number(prompt("Idade:"))
            let sexo = String(prompt("Sexo:"))
            let alimentacao = String(
                prompt("Tipo de alimentação: Carnívoro, Herbívoro...")
            )

            let mamifero = new Mamifero(nome,especie,idade,sexo,alimentacao)
            listaAnimais.push(mamifero)

            window.alert("Mamífero cadastrado!")

        } else if (opcao == "2") {

            let nome = String(prompt("Nome da ave:"))
            let especie = String(prompt("Espécie:"))
            let idade = Number(prompt("Idade:"))
            let sexo = String(prompt("Sexo:"))
            let resposta = String(
                prompt("É migratória? 1 - Sim / 2 - Não")
            )

            let migratoria = resposta == "1"

            let ave = new Ave(nome,especie,idade,sexo,migratoria)
            listaAnimais.push(ave)

            window.alert("Ave cadastrada!")

        } else if (opcao == "3") {

            let resultado = "MAMÍFEROS"
            let encontrou = false

            for (let animal of listaAnimais) {

                if (animal instanceof Mamifero) {

                    resultado = resultado +
                        animal.exibir() 

                    encontrou = true
                }
            }

            if (encontrou == false) {
                resultado = "Nenhum mamífero cadastrado."
            }

            window.alert(resultado)

        } else if (opcao == "4") {

            let resultado = "AVES"
            let encontrou = false

            for (let animal of listaAnimais) {

                if (animal instanceof Ave) {

                    resultado = resultado +
                        animal.exibir()

                    encontrou = true
                }
            }

            if (encontrou == false) {
                resultado = "Nenhuma ave cadastrada."
            }

            window.alert(resultado)

        } else if (opcao == "5") {

            simularHoraAlimentacao(listaAnimais)
        }
    }
}
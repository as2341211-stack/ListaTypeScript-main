/**25. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Aplicativo de Streaming e Assinaturas de Vídeo
Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o

atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
correto do plano escolhido por meio de polimorfismo.*/

export function quest25P(): void {

    abstract class Assinatura {
        private _email: string
        private _valor: number

        constructor(email: string, valor: number) {
            this._email = email
            this._valor = valor
        }

        public get email(): string {
            return this._email
        }

        public get valor(): number {
            return this._valor
        }

        public abstract exibir(): string
    }

    class AssinaturaPadrao extends Assinatura {

        constructor(email: string) {
            super(email, 29.90)
        }

        public exibir(): string {
            return `E-mail: ${this.email}\n` +
                   `Plano: Padrão\n` +
                   `Telas simultâneas: 2\n` +
                   `Preço: R$ ${this.valor.toFixed(2)}`
        }
    }

    class AssinaturaPremium extends Assinatura {

        constructor(email: string) {
            super(email, 49.90)
        }

        public exibir(): string {
            return `E-mail: ${this.email}\n` +
                   `Plano: Premium\n` +
                   `Telas simultâneas: 4\n` +
                   `Resolução: 4K\n` +
                   `Preço: R$ ${this.valor.toFixed(2)}`
        }
    }

    let contratos: Assinatura[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("1 - Assinatura Padrão | 2 - Assinatura Premium | 0 - Encerrar cadastro"))

        if (opcao == "1") {

            let email = String(prompt("E-mail do usuário:"))

            let assinatura = new AssinaturaPadrao(email)
            contratos.push(assinatura)

            window.alert("Assinatura cadastrada!")

        } else if (opcao == "2") {

            let email = String(prompt("E-mail do usuário:"))

            let assinatura = new AssinaturaPremium(email)
            contratos.push(assinatura)

            window.alert("Assinatura cadastrada!")
        }
    }

    let emailBusca = String(
        prompt("Digite o e-mail para buscar o contrato:")
    )

    let encontrado = false

    for (let contrato of contratos) {

        if (contrato.email == emailBusca) {

            window.alert(contrato.exibir())

            encontrado = true
        }
    }

    if (encontrado == false) {
        window.alert("Contrato não encontrado!")
    }
}
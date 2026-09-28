/**Cadastro de Produtos de um Supermercado com Desconto Progressivo
Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
valor final que o cliente pagará. */

export function quest23P(): void {

    abstract class Produto {
        private _codigo: number
        private _nome: string
        private _precoCusto: number

        constructor(codigo: number, nome: string, precoCusto: number) {
            this._codigo = codigo
            this._nome = nome
            this._precoCusto = precoCusto
        }

        public get codigo(): number {
            return this._codigo
        }

        public get nome(): string {
            return this._nome
        }

        public get precoCusto(): number {
            return this._precoCusto
        }

        public abstract calcularPreco(): number
    }

    class ProdutoPerecivel extends Produto {
        private _validade: string

        constructor(
            codigo: number,
            nome: string,
            precoCusto: number,
            validade: string
        ) {
            super(codigo, nome, precoCusto)
            this._validade = validade
        }

        public calcularPreco(): number {

            let hoje = new Date()
            let dataValidade = new Date(this._validade)

            if (
                hoje.getDate() == dataValidade.getDate() &&
                hoje.getMonth() == dataValidade.getMonth() &&
                hoje.getFullYear() == dataValidade.getFullYear()
            ) {
                return this.precoCusto * 0.70
            }

            return this.precoCusto
        }
    }

    class ProdutoNaoPerecivel extends Produto {

        public calcularPreco(): number {
            return this.precoCusto
        }
    }

    let produtos: Produto[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt(
            "1 - Produto Perecível\n" +
            "2 - Produto Não Perecível\n" +
            "0 - Finalizar cadastro"
        ))

        if (opcao == "1") {

            let codigo = Number(prompt("Código do produto:"))
            let nome = String(prompt("Nome do produto:"))
            let preco = Number(prompt("Preço de custo:"))
            let validade = String(prompt("Data de validade (AAAA-MM-DD):"))

            let produto = new ProdutoPerecivel(
                codigo,
                nome,
                preco,
                validade
            )

            produtos.push(produto)

            window.alert("Produto cadastrado!")

        } else if (opcao == "2") {

            let codigo = Number(prompt("Código do produto:"))
            let nome = String(prompt("Nome do produto:"))
            let preco = Number(prompt("Preço de custo:"))

            let produto = new ProdutoNaoPerecivel(
                codigo,
                nome,
                preco
            )

            produtos.push(produto)

            window.alert("Produto cadastrado!")
        }
    }

    let resultado = "=== CAIXA ===\n"

    for (let produto of produtos) {

        let precoFinal = produto.calcularPreco()

        resultado = `Código: ${produto.codigo} | Produto: ${produto.nome} | Valor final: R$ ${precoFinal.toFixed(2)}`
    }

    window.alert(resultado)
}
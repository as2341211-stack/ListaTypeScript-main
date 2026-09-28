/**Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Gestão de Pedidos de uma Pizzaria Local
Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
faturamento total do estabelecimento. */

export function quest20P(): void {

    abstract class Pedido {
        private _mesa: number
        private _valor: number

        constructor(mesa: number, valor: number) {
            this._mesa = mesa
            this._valor = valor
        }

        public get mesa(): number {
            return this._mesa
        }

        public get valor(): number {
            return this._valor
        }

        public abstract calcularValor(): number
    }

    class PedidoNormal extends Pedido {

        public calcularValor(): number {
            return this.valor
        }
    }

    class PedidoEntrega extends Pedido {
        protected _taxa: number
        private _endereco: string

        constructor(
            mesa: number,
            valor: number,
            taxa: number,
            endereco: string
        ) {
            super(mesa, valor)
            this._taxa = taxa
            this._endereco = endereco
        }

        public calcularValor(): number {
            return this.valor + this._taxa
        }
    }

    let pedidos: Pedido[] = []

    let opcao = ""

    while (opcao != "0") {

        opcao = String(prompt("1 - Pedido normal | 2 - Pedido delivery | 0 - Encerrar"))

        if (opcao == "1") {

            let mesa = Number(prompt("Número da mesa:"))
            let valor = Number(prompt("Valor dos ingredientes:"))

            let pedido = new PedidoNormal(mesa, valor)
            pedidos.push(pedido)

            window.alert("Pedido cadastrado!")

        } else if (opcao == "2") {

            let mesa = Number(prompt("Número da mesa:"))
            let valor = Number(prompt("Valor dos ingredientes:"))
            let taxa = Number(prompt("Taxa de entrega:"))
            let endereco = String(prompt("Endereço:"))

            let pedido = new PedidoEntrega(mesa,valor,taxa,endereco)
            pedidos.push(pedido)

            window.alert("Pedido cadastrado!")
        }
    }

    let total = 0

    for (let pedido of pedidos) {
        total = total + pedido.calcularValor()
    }

    window.alert(`Faturamento total da pizzaria: R$ ${total.toFixed(2)}`)
}
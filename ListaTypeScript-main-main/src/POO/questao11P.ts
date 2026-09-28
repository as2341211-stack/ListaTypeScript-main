
export function quest11P():void{
class Pedido {
    private _nomeCliente: string;
    private _nomeItem: string;
    private _valor: number;

    constructor(nocli: string, noite:string, valor: number) {
        this._nomeCliente = nocli;
        this._nomeItem = noite;
        this._valor = valor;
    }

    
    public get nomeCliente(): string {
        return this._nomeCliente;
    }
    
    public get valor(): number {
        return this._valor;
    }
   
    public get nomeItem(): string {
        return this._nomeItem;
    }

    public set nomeCliente(nome: string) {
        this._nomeCliente = nome;
    }

    public set nomeItem(item: string) {
        this._nomeItem = item;
    }

    public set valor(novoValor: number) {
        if (novoValor >= 0) {
            this._valor = novoValor;
        }
    }
}


function exibirResumoETotal(pedidos: Pedido[]): void {
    let valorTotal = 0

    for (const pedido of pedidos) {
        //window.alert(`Cliente: ${pedido.nomeCliente} | Item: ${pedido.nomeItem} | Valor: R$ ${pedido.valor.toFixed(2)}`);
        window.alert(
        `DETALHES DO PEDIDO\n` +
        `----------------------------------------\n` +
        `Cliente: ${pedido.nomeCliente}\n` +
        `Item:    ${pedido.nomeItem}\n` +
        `Valor:   R$ ${pedido.valor.toFixed(2)}\n` +
        `----------------------------------------`
        )
        valorTotal = valorTotal + pedido.valor
    }

    window.alert(
    `----------------------------------------\n` +
    `VALOR TOTAL DOS PEDIDOS: R$ ${valorTotal.toFixed(2)}\n` +
    `----------------------------------------`
    )
}

    let listaDePedidos: Pedido[] = [];
    let continuar = "s";
   
    while (continuar.toLowerCase() === 's') {
            let cliente = String(prompt("\nDigite o nome do cliente: "))
            let item =String(prompt("Digite o nome do pedido (item): "))
            let valorStr =Number(prompt("Digite o valor do item: R\$ "))
            let valor = valorStr || 0;

        
            let novoPedido = new Pedido(cliente, item, valor);
            listaDePedidos.push(novoPedido);

        continuar = String(prompt("Deseja registrar outro pedido? (s/n): "))
    }

    if (listaDePedidos.length > 0) {
        exibirResumoETotal(listaDePedidos);
    } else {
        window.alert("Nenhum pedido foi registrado.");
    }

    
}
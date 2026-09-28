/**Repetição Encapsulamento
Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
nova locação. */


export function quest12P():void {


class Locacao {
    private _modeloCarro: string;
    private _valorDiaria: number;
    private _quantidadeDias: number;

    constructor(modeloCarro: string, valorDiaria: number, quantidadeDias: number) {
        this._modeloCarro = modeloCarro;
        this._valorDiaria = valorDiaria;
        this._quantidadeDias = quantidadeDias;
    }

    
    public get modeloCarro(): string {
        return this._modeloCarro;
    }

    public set modeloCarro(modelo: string) {
        this._modeloCarro = modelo;
    }

    public get valorDiaria(): number {
        return this._valorDiaria;
    }

    public set valorDiaria(valor: number) {
        if (valor > 0){ 
            this._valorDiaria = valor
        }
    }

    public get quantidadeDias(): number {
        return this._quantidadeDias;
    }

    public set quantidadeDias(dias: number) {
        if (dias > 0) this._quantidadeDias = Math.floor(dias);
    }

    
    calcularValorTotal(): number {
        return this._valorDiaria * this._quantidadeDias;
    }

    exibirResumo(): void {
        window.alert(`=================================\n` +
        `       RESUMO DA LOCAÇÃO         \n` +
        `=================================\n` +
        `Carro Alugado:  ${this._modeloCarro}\n` +
        `Valor da Diária: R$ ${this._valorDiaria.toFixed(2)}\n` +
        `Quantidade de Dias: ${this._quantidadeDias} dia(s)\n` +
        `---------------------------------\n` +
        `VALOR TOTAL:     R$ ${this.calcularValorTotal().toFixed(2)}\n` +
        `=================================\n`);
    }
}

    let continuar = "s";

    while (continuar.toLowerCase() === 's') {
        let modelo = String(("Digite o modelo do carro: "))
        let valorDiariaStr =Number(prompt("Digite o valor da diária: R\$ "))
        let valorDiaria = valorDiariaStr || 0
        let diasStr = Number(prompt("Digite a quantidade de dias do aluguel: "))
        let dias = diasStr || 0

        let novaLocacao = new Locacao(modelo, valorDiaria, dias)
        novaLocacao.exibirResumo()
        continuar = String(prompt("Deseja fazer uma nova locação? (s - sim / n - não): "))
    }
}
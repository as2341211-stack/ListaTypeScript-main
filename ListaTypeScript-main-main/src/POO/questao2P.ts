/**Classe Quadrado: Crie uma classe que modele um quadrado:
 Atributos: Tamanho do lado
 Métodos: Mudar valor do Lado,
 Retornar valor do Lado e calcular Área;*/

class Quadrado{
    
    Tamanho:number

    constructor(tamanho:number){

        this.Tamanho = tamanho

    }

    MudarValor(NovoValor:number): void{

        this.Tamanho = NovoValor
    }

    CalularArea(): number {

        return this.Tamanho * this.Tamanho

    }
}

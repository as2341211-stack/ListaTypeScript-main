/**Classe Retângulo: Crie uma classe que modele um retângulo:
A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
B. Métodos:
 Mudar valor dos lados,
 Retornar/apresentar valor dos lados,
 Calcular Área,
 Calcular Perímetro. */

class retangulo{
    ladoA:number
    ladoB:number

    constructor(
        
        LadoA:number,
        LadoB:number
            
    ){

        this.ladoA = LadoA
        this.ladoB = LadoB

    }

    NovoValor(NovoValorA:number,NovoValorB:number): void{

        this.ladoA = NovoValorA
        this.ladoB = NovoValorB

    }

    Area(): number{

        return this.ladoA * this.ladoB

    }

    Perimentro(): number{

        return 2 *(this.ladoA + this.ladoB)

    }

}
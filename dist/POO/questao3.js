/**Classe Retângulo: Crie uma classe que modele um retângulo:
A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
B. Métodos:
 Mudar valor dos lados,
 Retornar/apresentar valor dos lados,
 Calcular Área,
 Calcular Perímetro. */
class retangulo {
    constructor(LadoA, LadoB) {
        this.ladoA = LadoA;
        this.ladoB = LadoB;
    }
    NovoValor(NovoValorA, NovoValorB) {
        this.ladoA = NovoValorA;
        this.ladoB = NovoValorB;
    }
    Area() {
        return this.ladoA * this.ladoB;
    }
    Perimentro() {
        return 2 * (this.ladoA + this.ladoB);
    }
}
export {};

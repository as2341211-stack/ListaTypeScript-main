/**Classe Quadrado: Crie uma classe que modele um quadrado:
 Atributos: Tamanho do lado
 Métodos: Mudar valor do Lado,
 Retornar valor do Lado e calcular Área;*/
class Quadrado {
    constructor(tamanho) {
        this.Tamanho = tamanho;
    }
    MudarValor(NovoValor) {
        this.Tamanho = NovoValor;
    }
    CalularArea() {
        return this.Tamanho * this.Tamanho;
    }
}
export {};

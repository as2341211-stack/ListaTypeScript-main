/** Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
necessárias para o local.*/
class Retangulo {
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
let ladoA = Number(prompt(" informe o tamanho (A): "));
let ladoB = Number(prompt("informe tamanho (B): "));
let Baco = new Retangulo(ladoA, ladoB);
let area = Baco.Area();
let perimentro = Baco.Perimentro();
console.log(`São nessearios ${area} m² de piso para cobrir o Chão`);
console.log(`São nessearios ${perimentro} metros de rodapé para contornar as paredes`);
export {};

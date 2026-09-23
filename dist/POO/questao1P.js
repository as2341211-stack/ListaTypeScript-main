/** Classe Bola: Crie uma classe que modele uma bola:
 Atributos: Cor, circunferência, material
 Métodos: trocaCor e mostraCor*/
export function queste1P() {
    class Bola {
        constructor(cor, circunferencia, material) {
            this.Cor = cor;
            this.circunferencia = circunferencia;
            this.material = material;
        }
        TrocaCor(NovaCor) {
            this.Cor = NovaCor;
        }
        MostraCor() {
            return this.Cor;
        }
    }
}

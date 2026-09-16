/** Classe Bola: Crie uma classe que modele uma bola:
 Atributos: Cor, circunferência, material
 Métodos: trocaCor e mostraCor*/

export function queste1(): void {
    class Bola {
        Cor: string
        circunferencia: number
        material: string

        constructor(

            cor: string,
            circunferencia: number,
            material: string) {

            this.Cor = cor
            this.circunferencia = circunferencia
            this.material = material

        }

        TrocaCor(NovaCor: string): void {

            this.Cor = NovaCor

        }

        MostraCor(): string {

            return this.Cor

        }
    }


}
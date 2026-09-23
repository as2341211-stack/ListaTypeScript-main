/**Classe Pessoa: Crie uma classe que modele uma pessoa:
1. Atributos: nome, idade, peso e altura
2. Métodos: Envelhecer, engordar, emagrecer, crescer.
Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
ela deve crescer 0,5 cm. */
class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    Envelhecer() {
        this.idade = this.idade + 1;
        if (this.idade < 21) {
            this.Crecer(0.05);
        }
    }
    Engordar(quilo) {
        this.peso = this.peso + quilo;
    }
    Emagrecer(quilo) {
        this.peso = this.peso - quilo;
    }
    Crecer(cetimetro) {
        this.altura = this.altura + cetimetro;
    }
}
export {};

/**Classe Pessoa: Crie uma classe que modele uma pessoa:
1. Atributos: nome, idade, peso e altura
2. Métodos: Envelhecer, engordar, emagrecer, crescer.
Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
ela deve crescer 0,5 cm. */

class Pessoa{

    nome:string
    idade:number
    peso:number
    altura:number

    constructor(

        nome:string,
        idade:number,
        peso:number,
        altura:number
    ){

        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura

    }
    
    Envelhecer(): void {
       
        this.idade = this.idade + 1
        if(this.idade < 21){

           this.Crecer(0.05)

        }
    }
    
    Engordar(quilo:number): void{
        
        this.peso = this.peso + quilo

    }

    Emagrecer(quilo:number): void{

        this.peso = this.peso - quilo 

    }

    Crecer(cetimetro:number): void{

        this.altura = this.altura + cetimetro
    }
    
}
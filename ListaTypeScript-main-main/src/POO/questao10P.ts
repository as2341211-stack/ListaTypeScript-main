/**Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico) com as
seguintes regras:
A. Atributos: Nome, Fome, Saúde e Idade
B. Métodos: Alterar Nome, Fome, Saúde e Idade;
C. Retornar Nome, Fome, Saúde e Idade
Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então
não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a
qualquer momento.
Cálculo do Humor (Campo Calculado): O humor não deve ser um atributo salvo no construtor. Ele
deve ser um método getter público (get humor()) que calcula a média ponderada ou simples da
felicidade do bichinho.
 Fórmula do Humor: (Saúde + (10 - Fome)) / 2
 Regra de Negócio do Humor:
o Média entre 8.0 e 10.0  &quot;Muito Feliz &quot;
o Média entre 5.0 e 7.9  &quot;Neutro / Ok &quot;
o Média abaixo de 5.0  &quot;Triste / Transtornado&quot; */

export function quest10P():void {
    class Tamagushi{
        
        Nome:string
        Fome:number
        Saude:number
        Idade:number
        Humor:number = 0
        
        constructor(no:string,fo:number,sa:number,ida:number,){
            
            this.Nome=no
            this.Fome=fo
            this.Saude=sa
            this.Idade=ida

        }

        AlteraNome():void{

        }
        AlteraFome():void{

        }
        AlteraSaude():void{

        }
        AlteraIdade():void{

        }
        get humor():{
            let Calculor = this.Saude +(10 - this.Fome)/2
        }
    }
    let no:string,sau:number,fo:number,ida:number

    no = String(prompt("Informe o nome: "))
    sau = Number(prompt("Informe a saude: "))
    fo = Number(prompt("informe a fome: "))
    ida = Number(prompt("informe a idade: "))
}
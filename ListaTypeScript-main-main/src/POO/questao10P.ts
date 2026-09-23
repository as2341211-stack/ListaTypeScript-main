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

        AlteraNome(NovoNome:string):void{
            
            this.Nome= NovoNome
        }
        AlteraFome(NovaFome:number):void{
            
            this.Fome = NovaFome
        }
        AlteraSaude(NovaSaude:number):void{
            
            this.Saude = NovaSaude
        }
        AlteraIdade(NovaIdade:number):void{
            
            this.Idade= NovaIdade
        }
        get humor(){
            let Calculor = this.Saude +(10 - this.Fome)/2
            if(8.0<= Calculor && 10.0 >= Calculor){
                return(`Muito Feliz`)
            }
            else if(5.0<= Calculor && 7.9>= Calculor){
                return(`Neutro / Ok`)
            }
            else if(5.0 > Calculor){
                return(`Triste / Transtornado`)
            }
        }
    }
    let no:string,sau:number,fo:number,ida:number,NovoNome:string,NovaFome:number,NovaSaude:number,NovaIdade:number
    
    no = String(prompt("Informe o nome: "))
    sau = Number(prompt("Informe a saude: "))
    fo = Number(prompt("informe a fome: "))
    ida = Number(prompt("informe a idade: "))
    let bixinho = new Tamagushi(no,sau,fo,ida)
    let tamagushi:Tamagushi [] = []
    tamagushi.push(bixinho)
    let op = String(prompt("Que munda (  1- O nome | 2- o saude | 3- a fome| 4- a idade ) ou s para sim e n para não ")).toUpperCase()
    while( op != "N"){
        if(op == "1"){
            NovoNome = String(prompt("Novo nome:"))
            bixinho.AlteraNome(NovoNome)

        }
        else if(op == "2"){
            NovaFome = Number(prompt("Novo fome:"))
            bixinho.AlteraFome(NovaFome)

        }
        else if(op == "3"){
            NovaSaude = Number(prompt("Novo saude:"))
            bixinho.AlteraSaude(NovaSaude)

        }
        else if(op == "4"){
            NovaIdade = Number(prompt("Novo idade:"))
            bixinho.AlteraIdade(NovaIdade)

        }
        
    }
}
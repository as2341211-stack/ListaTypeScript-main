/*Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.*/



export function queste6():void{
class Conta {
    numero:string
    nome:string
    saldo:number

    constructor(
        
        nume:string,
        nome:string,
        saldo:number = 0
    ){

        this.numero = nume
        this.nome = nome
        this.saldo = saldo

    }

    AlterarNome(NovoNome:string): void {
        
        this.nome = NovoNome

    }

    Deposito(NovoValor:number): void {

        this.saldo = this.saldo + NovoValor

    }

    Saldo(retirado:number): void {

        this.saldo = this.saldo - retirado

    }

    Executa():void{

    }
    

}

let saldo:number,numero:string,nome:string

}
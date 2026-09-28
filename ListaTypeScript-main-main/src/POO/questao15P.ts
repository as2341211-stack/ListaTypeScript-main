/**Herança Polimorfismo Encapsulamento
Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
(salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
via teclado e calcular o salário de cada um. */

export function quest15P():void{

    abstract class Funcionario {
        private _nome: string;
        private _cargo: string;

        constructor(nome: string, cargo: string) {
            this._nome = nome;
            this._cargo = cargo;
        }

        public get nome(): string { 
        
            return this._nome;
        }

        public get cargo(): string {
        
            return this._cargo;
        }

        public abstract calcularSalario(): number;

        public exibirResumo(): string {
            return `Nome: ${this._nome} | Cargo: ${this._cargo}\n` +
                   `Salário Final: R$ ${this.calcularSalario().toFixed(2)}\n` +
                   `----------------------------------------\n`;
        }
    }

    class FuncionarioHorista extends Funcionario {
        private _valorHora: number;
        private _horasTrabalhadas: number;

        constructor(nome: string, cargo: string, valorHora: number, horasTrabalhadas: number) {
            super(nome, cargo)
            this._valorHora = valorHora;
            this._horasTrabalhadas = horasTrabalhadas;
        }

        public calcularSalario(): number {
            return this._valorHora * this._horasTrabalhadas;
        }
    }

    class FuncionarioAssalariado extends Funcionario {
        private _salarioFixo: number;

        constructor(nome: string, cargo: string, salarioFixo: number) {
            super(nome, cargo);
            this._salarioFixo = salarioFixo;
        }

        public calcularSalario(): number {
            return this._salarioFixo;
        }
    }

    let continu =""
while(continu != "n"){
    continu = String(prompt(" informe o trabalhador: (1 - horista e 2 - assalariado);"))
    
    if(continu == "1"){
        let nomeH = String(prompt("Nome do horista: "))
        let cargoH = String(prompt("Cargo do horista: "))
        let valorHora = Number(prompt("Valor pago por hora (R$):"))
        let horas = Number(prompt("Quantidade de horas trabalhadas:"))

        let horista = new FuncionarioHorista(nomeH, cargoH, valorHora, horas)
       window.alert(horista.exibirResumo())
    }
    
    else if(continu == "2"){
        let nomeA = String(prompt("Nome do assalariado:"))
        let cargoA = String(prompt("Cargo do assalariado:"))
        let salarioFixo = Number(prompt("Salário fixo mensal (R$):"))

        let assalariado = new FuncionarioAssalariado(nomeA, cargoA, salarioFixo);
        window.alert(assalariado.exibirResumo())
    }
    continu = String(prompt(" Que continua ( s - sim/ n - não)"))
}
}
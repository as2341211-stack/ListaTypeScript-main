/**13. Repetição Encapsulamento
Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
(média &gt;= 7) ou reprovado (caso contrário).*/


export function quest13P():void{

    class Aluno {
        private _nome: string;
        private _nota1: number;
        private _nota2: number;

        constructor(nome: string, nota1: number, nota2: number) {
            this._nome = nome;
            this._nota1 = nota1;
            this._nota2 = nota2;
        }

        public get nome(): string {
            return this._nome;
        }
        
        public get nota1(): number {
            return this._nota1;
        }

        public get nota2(): number {
            return this._nota2;
        }
        
        public set nome(nome: string) {
            this._nome = nome;
        }

        public set nota1(nota: number) {
            if (nota >= 0 && nota <= 10) this._nota1 = nota
        }

        public set nota2(nota: number) {
            if (nota >= 0 && nota <= 10) this._nota2 = nota
        }

        public calcularMedia(): number {
            return (this._nota1 + this._nota2) / 2
        }

        public exibirStatus(): void {
            let media = this.calcularMedia();
            let statusTexto
            if(media >= 7){
                statusTexto = "APROVADO"
            }
            else{
                statusTexto = "REPROVADO"
            }

            window.alert(
                `BOLETIM ESCOLAR\n` +
                `----------------------------------------\n` +
                `Aluno: ${this._nome}\n` +
                `Nota 1: ${this._nota1.toFixed(1)}\n` +
                `Nota 2: ${this._nota2.toFixed(1)}\n` +
                `----------------------------------------\n` +
                `Média Final: ${media.toFixed(1)}\n` +
                `Status:      ${statusTexto}\n` +
                `----------------------------------------`
            )
        }
    }

    let continuar = "s";
    
    while (continuar.toLowerCase() === 's') {
        let nome = String(prompt("Digite o nome do aluno:"))
        let n1 = Number(prompt(`Digite a primeira nota de ${nome}:`))
        let n2 = Number(prompt(`Digite a segunda nota de ${nome}:`))


        let alunoAtual = new Aluno(nome, n1, n2)
        alunoAtual.exibirStatus();

        continuar = String(prompt("Deseja cadastrar outro aluno? (s/n): "));
    }

    
}
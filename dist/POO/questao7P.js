/**Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
funcionário, exibindo o seu nome e novo valor.*/
export function queste7P() {
    class empresa {
        constructor(no, car, sala) {
            this.salario = 1000;
            this.nome = no;
            this.cargo = car;
            this.salario = sala;
        }
        Percentual(Novosalario) {
            this.salario = Novosalario + this.salario;
        }
        Exiber() {
            window.alert(``);
        }
    }
    let sala, no, car, Novosalario;
    let op = "";
    let informações = [];
    while (op != "N") {
        no = String(prompt("Informe o nome: "));
        sala = Number(prompt("Informe o salario: "));
        car = String(prompt("informe o cargo: "));
        op = String(prompt("Que continua:(s)para sim ou (n)para não ")).toUpperCase();
        Novosalario = Number(prompt("quanto vc vai almenta: "));
        let funcionário = new empresa(no, car, sala);
        informações.push(funcionário);
    }
    for (let funcionário of informações) {
        funcionário.Exiber();
    }
}

/**Arrays Repetição
Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
todos os funcionários cadastrados, utilizando um método da classe. */
export function quest8P() {
    class funcionario {
        constructor(no, sala, cargo) {
            this.nome = no;
            this.salario = sala;
            this.cargo = cargo;
        }
        Exibir() {
            window.alert(`Nome: ${this.nome}| Cargo: ${this.cargo}| Salario: ${this.salario.toFixed(2)}`);
        }
    }
    let no, sala, cargo;
    let op = "";
    let informações = [];
    while (op != "N") {
        no = String(prompt("Informe o nome: "));
        sala = Number(prompt("Informe o salario: "));
        cargo = String(prompt("informe o cargo: "));
        op = String(prompt("Que continua:(s)para sim ou (n)para não ")).toUpperCase();
        let funcionário = new funcionario(no, sala, cargo);
        informações.push(funcionário);
    }
    for (let funcionario of informações) {
        funcionario.Exibir();
    }
}

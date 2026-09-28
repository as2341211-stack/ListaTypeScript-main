/**Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
funcionário, exibindo o seu nome e novo valor.*/

export function quest7P(): void {

    class empresa {

        nome: string
        cargo: string
        salario: number = 1000

        constructor(no: string, car: string, sala: number) {

            this.nome = no
            this.cargo = car
            this.salario = sala

        }

        Percentual(Novosalario: number): void {
            this.salario = Novosalario*this.salario
        }

        Exiber(): void {
           window.alert(
            `📄 AUMENTO SALARIAL CONCLUÍDO\n` +
            `----------------------------------------\n` +
            `👤 Funcionário: ${this.nome}\n` +
            `💼 Cargo Ocupado: ${this.cargo}\n` +
            `📈 Aumento Aplicado: ${this.Percentual}%\n` +
            `----------------------------------------\n` +
            `💰 NOVO SALÁRIO: R$ ${this.salario.toFixed(2)}\n` +
            `----------------------------------------`
        )
        }
    }

    let sala: number, no: string, car: string, Novosalario: number
    let op = ""
    let informações: empresa[] = []


    while (op != "N") {

        no = String(prompt("Informe o nome: "))
        sala = Number(prompt("Informe o salario: "))
        car = String(prompt("informe o cargo: "))

        Novosalario = Number(prompt("quanto vc vai almenta: "))
        op = String(prompt("Que continua:(s)para sim ou (n)para não ")).toUpperCase()
        let funcionário = new empresa(no, car, sala)
        informações.push(funcionário)

    }
    for (let funcionário of informações) {
        funcionário.Exiber()
    }
}
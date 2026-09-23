/**9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
cada produto. */
export function quest9P() {
    class Estoque {
        constructor(no, pre, quanti) {
            this.nome = no;
            this.preco = pre;
            this.quantidade = quanti;
        }
        Calculo() {
            return this.preco * this.quantidade;
        }
        Exibir(cal) {
            window.alert(`Nome: ${this.nome} | Preço: ${this.preco.toFixed(2)} | Quantidade e estoque: ${this.quantidade} | Valor e produto: ${cal.toFixed(2)}`);
        }
    }
    let no, preco, quanto, valorpro;
    let op = "";
    let estoque = [];
    while (op != "N") {
        no = String(prompt("Informe o nome do produnto: "));
        preco = Number(prompt("Informe o valor do produnto: "));
        quanto = Number(prompt("informe a quantidade: "));
        op = String(prompt("Que continua:(s)para sim ou (n)para não ")).toUpperCase();
        let funcionário = new Estoque(no, preco, quanto);
        estoque.push(funcionário);
    }
    for (let Estoque of estoque) {
        Estoque.Calculo();
        let cal = Estoque.Calculo();
        Estoque.Exibir(cal);
    }
}

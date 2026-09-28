/**9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
cada produto. */
export function quest9P():void {

class Estoque{
    
    nome:string 
    preco:number
    quantidade:number

    constructor(no:string,pre:number,quanti:number){
        
        this.nome = no
        this.preco = pre
        this.quantidade = quanti

    }

    Calculo():number{
         
        return this.preco*this.quantidade

    }
    Exibir(cal:number):void{
    
        window.alert(`🛒 DETALHES DO PRODUTO\n` +
            `----------------------------------------\n` +
            `📦 Produto: ${this.nome}\n` +
            `💰 Preço Unitário: R$ ${this.preco.toFixed(2)}\n` +
            `🔢 Em Estoque: ${this.quantidade} unidade(s)\n` +
            `----------------------------------------\n` +
            `💵 VALOR EM ESTOQUE: R$ ${cal.toFixed(2)}\n` +
            `----------------------------------------`)
        }
}
    let no:string,preco:number,quanto:number,valorpro:number
    let op = ""
    let estoque:Estoque [] = []

    while (op != "N") {
        no = String(prompt("Informe o nome do produnto: "))
        preco = Number(prompt("Informe o valor do produnto: "))
        quanto = Number(prompt("informe a quantidade: "))
        op = String(prompt("Que continua:(s)para sim ou (n)para não ")).toUpperCase()
        let funcionário = new Estoque(no, preco, quanto)
        estoque.push(funcionário);
    }

    for (let Estoque of estoque) {
        Estoque.Calculo()
        let cal = Estoque.Calculo()
        Estoque.Exibir(cal)
    }


}
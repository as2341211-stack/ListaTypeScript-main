/**Arrays Repetição Encapsulamento
Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título. */

export function quest14P():void {

    class Livro {
        
        private _titulo: string;
        private _autor: string;
        private _disponivel: boolean;

        constructor(titulo: string, autor: string) {
            
            this._titulo = titulo
            this._autor = autor
            this._disponivel = true
        }

        public get titulo(): string { 
            return this._titulo; 
        }

        public get disponivel(): boolean { 
            return this._disponivel; 
        }

        public set disponivel(status: boolean) { 
            this._disponivel = status; 
        }

        public exibir(): string {
            return `Titulo: ${this._titulo} (Autor: ${this._autor})\n`;
        }
    }

    let catalogo: Livro[] = [];
    let continuar = "s";

    while (continuar.toLowerCase() === "s" && catalogo.length < 15) {
        let titulo = String(prompt("Digite o título do livro:"))
        let autor = String(prompt("Digite o autor:"))

        let novoLivro = new Livro(titulo, autor);
        catalogo.push(novoLivro);

        continuar = window.prompt("Quer cadastrar mais um livro? (s/n):") || "n";
    }

    let textoLista = "LIVROS DISPONÍVEIS:\n-------------------------\n";
    for (let livro of catalogo) {
        if (livro.disponivel) {
            textoLista += livro.exibir();
        }
    }
    window.alert(textoLista)

    let busca = String(prompt("Digite o título do livro para emprestar:"))
    let achou = false;

    for (let livro of catalogo) {
        if (livro.titulo.toLowerCase() === busca.toLowerCase()) {
            achou = true;
            
            if (livro.disponivel) {
                livro.disponivel = false
                window.alert(`Pronto! O livro "${livro.titulo}" foi emprestado.`);
            } else {
                window.alert("Esse livro já está emprestado!");
            }
        }
    }
}
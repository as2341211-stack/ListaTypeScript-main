/** 31. O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para propostas de reflorestamento no campus do IFS Tobias
Barreto. Crie a superclasse Projeto com os atributos privados titulo, coordenador e nota. O setter setNota(valor)
deve validar estritamente o intervalo de 0 a 10, lançando exceção ou mensagem de erro para valores inválidos. As
subclasses ProjetoVerde (plantio urbano) e ProjetoCultural (conscientização) sobrescrevem o método
descricaoCategoria() com textos distintos. O usuário preenche os projetos pelo terminal. O programa calcula a
média das notas e, ao final, exibe os projetos com nota acima da média, mostrando a categoria de cada um via
polimorfismo.
Requisitos mínimos:
• nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
• descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
• Cálculo de média com laço sobre os projetos cadastrados.
• Filtro e exibição dos projetos acima da média.
• Chamada polimórfica a descricaoCategoria() na exibição final.*/
class Projeto {
    constructor(titulo, coordenador, nota) {
        this._titulo = titulo;
        this._coordenador = coordenador;
        this._nota = nota;
    }
    get nota() {
        return this._nota;
    }
    set nota(valor) {
        if (valor >= 0 && valor <= 10) {
            this._nota = valor;
        }
        else {
            console.log("Valor invalido!!");
        }
    }
}
class ProjetoVerde extends Projeto {
    constructor(titulo, coordenador, nota) {
        super(titulo, coordenador, nota);
    }
    descricaoCategoria() {
        console.log("Bem vindo ao projeto verde, filho do projeto Original");
    }
    calculodeMedia() {
        let contador = 0, media = 0, acum = 0, op = 0;
        op = Number(prompt("Informe um valor ou -1 para sair: "));
        while (op != 0) {
        }
    }
}
export {};

/** 3. Gerador de Lista de Compras Personalizada
Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
adicionar itens e a quantidade de cada um.
Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
● Permitir que o usuário apresente todos os itens da lista.
● Permitir que o usuário apresente quantos itens há na lista.
● Permitir que o usuário remova itens da lista.*/
function gerar_lista_compras() {
    let lista = [];
    let opcao = "";
    while (opcao !== "5") {
        opcao = prompt("1-Adicionar  2-Ver lista  3-Quantidade  4-Remover  5-Sair");
        if (opcao === "1") {
            let item = prompt("Digite o item (ou 'fim'):");
            if (item !== "fim")
                lista.push(item);
        }
        else if (opcao === "2") {
            console.log(lista);
        }
        else if (opcao === "3") {
            console.log("Quantidade:", lista.length);
        }
        else if (opcao === "4") {
            let item = prompt("Item para remover:");
            lista = lista.filter(i => i !== item);
        }
    }
}
gerar_lista_compras();
export {};

/**Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
esse intervalo e imprimir apenas os números que são múltiplos de 3. */
function multi(inicio, fim) {
    let i = inicio;
    while (i <= fim) {
        if (i % 3 === 0) {
            console.log(i);
        }
        i++;
    }
}
let inicio = Number(prompt("Digite o inicio: "));
let fim = Number(prompt("Digite o fim: "));
multi(inicio, fim);
export {};

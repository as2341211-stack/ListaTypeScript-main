/**Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos:
inicio e fim. A função deve seguir os seguintes requisitos:
 Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. Caso não
seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
 Utilize uma estrutura de repetição (for ou while) para percorrer todos os números inteiros
contidos nesse intervalo (inclusive o início e o fim).
 Durante a iteração, armazene todos os números do intervalo em um array.
 Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer
a lista criada.
 Imprima no console apenas os números que são múltiplos e divisores da sua idade.
 Ao final, exiba a quantidade total de números que foram impressos. */

function gerarIntervaloFiltrado(inicio: number, fim: number) {
  if (inicio > fim) {
    let temp = inicio;
    inicio = fim;
    fim = temp;
  }

  let lista: number[] = [];

  for (let i = inicio; i <= fim; i++) {
    lista.push(i);
  }

  let idade = Number(prompt("Digite sua idade:"));
  let cont = 0;

  for (let n of lista) {
    if (n % idade === 0 || idade % n === 0) {
      console.log(n);
      cont++;
    }
  }

  console.log("Quantidade:", cont);
}
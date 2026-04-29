/** Controle de Estoque de Loja (Loop e Relatório)
Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
preço unitário do produto e a quantidade comprada.
 Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
 O programa deve repetir a solicitação até que o preço informado seja zero.
 Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
cadastrados.*/

function calc(preco: number, qtd: number) {
  let total = preco * qtd;
  if (qtd > 10) total *= 0.95; // desconto
  return total;
}

let total = 0;
let soma = 0;
let cont = 0;

let preco = Number(prompt("Preço (0 para sair):"));

while (preco !== 0) {
  let qtd = Number(prompt("Quantidade:"));

  total += calc(preco, qtd);
  soma += preco;
  cont++;

  preco = Number(prompt("Preço (0 para sair):"));
}

console.log("Total:", total.toFixed(2));
console.log("Média:", (cont ? soma / cont : 0).toFixed(2));
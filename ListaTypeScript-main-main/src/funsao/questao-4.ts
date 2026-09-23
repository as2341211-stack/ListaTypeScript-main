/**Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
para ir subtraindo do valor total. */

function saque(valor: number) {
  let n50 = 0, n20 = 0, n10 = 0

  while (valor >= 10) {
    if (valor >= 50) {
      valor -= 50; n50++
    } else if (valor >= 20) {
      valor -= 20; n20++
    } else {
      valor -= 10; n10++
    }
  }

  return { n50, n20, n10 }
}


const entrada = prompt("Digite o valor do saque:")

if (entrada) {
  const valor = Number(entrada)
  console.log(saque(valor))
}
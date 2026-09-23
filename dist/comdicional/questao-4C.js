/** Ler dois valores e imprimir uma das três mensagens a seguir:
● ‘Números iguais’, caso os números sejam iguais;
● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
● ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/
export function queste4C() {
    let nm2 = Number(prompt("informe o primeiro numero: "));
    let nm3 = Number(prompt("informe o segundo numero: "));
    if (nm2 === nm3) {
        console.log("Números iguais");
    }
    else if (nm2 > nm3) {
        console.log("Primero é maior");
    }
    else {
        console.log("Segundo é maior");
    }
}

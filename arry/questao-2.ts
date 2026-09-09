/** 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
entrada de dados, faça o seguinte:
a) Mostre a quantidade de notas que foram lidas.
b) Exiba todas as notas na ordem em que foram informadas.
c) Exiba todas as notas na ordem inversa à que foram informadas.
d) Calcule e mostre a soma das notas.
e) Calcule e mostre a média das notas.
f) Calcule e mostre a quantidade de notas acima da média calculada.*/

let notas: number[] = [];
let soma1 = 0;

let nota = Number(prompt("Digite uma nota (-1 para sair):"));

while (nota !== -1) {
    notas.push(nota);
    soma1 += nota;

    nota = Number(prompt("Digite uma nota (-1 para sair):"));
}

console.log("Quantidade de notas:" + notas.length);

console.log("Notas:"+  notas);

console.log("Notas (inverso):" +[...notas].reverse());

console.log("Soma:"+  soma1);

let media = notas.length > 0 ? soma1 / notas.length : 0;
console.log("Média:" + media.toFixed(2));

let acima = 0;
for (let n of notas) {
    if (n > media) acima++;
}
console.log("Notas acima da média:"+ acima);
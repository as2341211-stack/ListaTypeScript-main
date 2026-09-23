/**1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
a) Números pares
b) Números ímpares
c) Todos os múltiplos de 2,3 e 4
d) Lista reversa */
let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let pares = lista.filter(n => n % 2 === 0);
let impares = lista.filter(n => n % 2 !== 0);
let multiplos = lista.filter(n => n % 2 === 0 || n % 3 === 0 || n % 4 === 0);
let reversa = [...lista].reverse();
console.log("Pares:" + pares);
console.log("Ímpares:" + impares);
console.log("Múltiplos de 2, 3 ou 4:" + multiplos);
console.log("Reversa:" + reversa);
export {};

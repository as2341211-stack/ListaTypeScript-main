/** 7. Sistema de Eficiência de Combustível
Crie um programa que ajude um motorista a saber a autonomia do seu carro.
 Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
o consumo médio (km/l).
 Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
quilômetros o carro percorre com o tanque cheio.*/
function consumoMedio(distancia, combustivel) {
    return distancia / combustivel;
}
function autonomia(consumo, tanque) {
    return consumo * tanque;
}
let distancia = Number(prompt("Distância percorrida (km):"));
let combustivel = Number(prompt("Combustível gasto (litros):"));
let tanque = Number(prompt("Capacidade do tanque (litros):"));
let consumo = consumoMedio(distancia, combustivel);
let autonomiaTotal = autonomia(consumo, tanque);
console.log("Consumo médio: " + consumo.toFixed(2) + "km/l");
console.log("Autonomia do carro: " + autonomiaTotal.toFixed(2) + " km");
export {};

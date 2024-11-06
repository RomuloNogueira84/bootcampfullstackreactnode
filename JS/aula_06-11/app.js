console.log("===============================================");
//Questão 1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.
let numeros = [1, 2, 3, 4, 5];
let soma = 0;
let i = 0;
while(i < numeros.length){
    soma += numeros[i];
    i++;
}
console.log("Soma de todos os elementos: " + soma  + " 🔢 ");
console.log("===============================================");
//Questão 2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. Use um loop while para verificar cada elemento e um contador para contar os números pares.
let numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contador = 0;
let j = 0;
while(j < numeral.length){
    if(numeral[j] % 2 === 0){
        contador++;
    }
    j++;
}
console.log("Quantidade de números pares:", contador + " 🔢 ");
console.log("===============================================");
//Questão 3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.
let frutas = ["maçã 🍎 ", "banana 🍌 ", "uva 🍇 ", "laranja 🍊 ", "melancia 🍉 "];
for (let item of frutas) {
    console.log(`Item: ${item}`);
}
console.log("===============================================");
//Questão 4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.
let ordinais = [1, 2, 3, 4];
let multiplicador = 3;
let novoVetor = [];
  for (let k = 0; k < ordinais.length; k++) {
   novoVetor.push(ordinais[k] * multiplicador); }
    console.log("Novo vetor:", novoVetor);
console.log("===============================================");

//Questão 5.  Escreva um programa que receba um vetor de números e mostre o maior valor contido nele. Utilize um loop for para comparar cada valor e encontrar o maior.
let recebeNumeros = [3, 6, 2, 8, 5];
let maior = recebeNumeros[0];

for (let l = 1; l < recebeNumeros.length; l++) {
    if (recebeNumeros[l] > maior) {
        maior = recebeNumeros[l];
    }
}

console.log("Maior valor:", maior);
console.log("===============================================");

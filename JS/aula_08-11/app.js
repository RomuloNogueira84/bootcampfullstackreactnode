//Questão 1. Escreva uma função anônima que recebe um número e retorna o dobro desse número. Atribua a função a uma variável chamada dobro e teste-a com alguns valores.
const dobro = num => num * 2;
console.log(dobro(5));
console.log(dobro(10));
console.log(dobro(15));

//Questão 2. Crie uma arrow function chamada cubo que recebe um número e retorna o cubo dele. Teste a função com diferentes valores para verificar se o resultado está correto.
const cubo = num => num ** 2;
console.log(cubo(5));
console.log(cubo(10));
console.log(cubo(15));
//Questão 3. Desenvolva uma função chamada calculaDesconto que recebe um preço e uma taxa de desconto (com valor padrão de 5%). A função deve retornar o preço com o desconto aplicado. Teste a função passando apenas o preço e depois passando o preço e a taxa.
function calculaDesconto(preco, taxa = 0.05) {
    return preco - (preco * taxa);
}
console.log(calculaDesconto(100));
console.log(calculaDesconto(200));
console.log(calculaDesconto(300));  
//Questão 4. Crie uma função chamada executaOperacao que recebe dois números e uma função de callback como parâmetros. A função deve executar a operação fornecida pelo callback com os dois números. Teste a função com operações de adição, subtração e multiplicação, passando funções anônimas como callbacks.
function executaOperacao(num1, num2, callback) {
    callback(num1, num2);
}
executaOperacao(10, 5, function (num1, num2) {
    console.log(num1 + num2);
});
executaOperacao(10, 5, function (num1, num2) {
    console.log(num1 - num2);
});
executaOperacao(10, 5, function (num1, num2) {
    console.log(num1 * num2);
}); 
//Questão 5. Dado um vetor de números [1, 2, 3, 4, 5], utilize o método forEach e uma função de callback para imprimir cada número multiplicado por 2. Use uma função anônima ou uma arrow function como callback para simplificar o código.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (num) {
    console.log(num * 2);
});
numeros.forEach((num) => {
    console.log(num * 2);
});
//Questão 6. Crie uma função chamada calculaMedia que recebe um vetor de números e retorne a média aritmética desse vetor. Use a função reduce para calcular a média.
function calculaMedia(vetor) {
    return vetor.reduce((acumulador, valor) => acumulador + valor) / vetor.length;
}
console.log(calculaMedia([1, 2, 3, 4, 5]));
console.log(calculaMedia([10, 20, 30, 40, 50]));
console.log(calculaMedia([100, 200, 300, 400, 500]));
//Questão 7. Crie uma função chamada calculaPilha que recebe um número e retorne a soma de todos os números entre 1 e esse número. Use a função map para calcular cada número da soma.
function calculaPilha(numero) {
    return numero.map((num) => num + 1).reduce((acumulador, valor) => acumulador + valor);
}
console.log(calculaPilha(5));
console.log(calculaPilha(10));
console.log(calculaPilha(15));
//Questão 8. Crie uma função chamada calculaPilha que recebe um número e retorne a soma de todos os números entre 1 e esse número. Use a função map para calcular cada número da soma.
function calculaPilha(numero) {
    return numero.map((num) => num + 1).reduce((acumulador, valor) => acumulador + valor);
}
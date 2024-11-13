// Questão 1. Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.
const { soma, multiplica } = require('./operacoes');
const valor1 = 10;
const valor2 = 20;
console.log(`Resultado da soma de ${valor1} e ${valor2} é: ${soma(valor1, valor2)}`);
console.log(`Resultado da multiplicação de ${valor1} e ${valor2} é: ${multiplica(valor1, valor2)}`);
const valor3 = 5;
const valor4 = 7;
console.log(`Resultado da soma de ${valor3} e ${valor4} é: ${soma(valor3, valor4)}`);
console.log(`Resultado da multiplicação de ${valor3} e ${valor4} é: ${multiplica(valor3, valor4)}`);
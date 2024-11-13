// Questão 1. Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.
function soma(a, b) {
  console.log(`Pikachu usa Thundershock  em ${a} e ${b}`);
  return a + b;
}
function multiplica(a, b) {
  console.log(`Charmander lança Flamethrower  em ${a} e ${b}`);
  return a * b;
}
module.exports = { 
  soma,
  multiplica
};
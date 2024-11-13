// Questão 1. Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.
function soma(a, b) {
  console.log(`Pikachu usa Thundershock em ${a} e ${b}`);
  return a + b;
}
function multiplica(a, b) {
  console.log(`Charmander lança Flamethrower em ${a} e ${b}`);
  return a * b;
}
module.exports = { 
  soma,
  multiplica
};

// Questão 2. Crie um arquivo (math.js) com duas funções: uma chamada subtrai que retorna a diferença entre dois números e uma função padrão (export default) chamada divide que retorna a divisão de dois números. Importe ambas as funções em outro arquivo e teste-as.

// Questão 3. Crie dois vetores de números, vetor1 e vetor2, com valores distintos. Crie uma função que receba ambos os vetores e retorne um novo vetor que combine todos os elementos dos dois vetores. Use o operador spread para concatenar os vetores.

// Questão 4. Crie um objeto usuario com as propriedades nome, idade, e email. Crie um novo objeto usuarioCompleto que contenha todas as propriedades de usuario mais uma propriedade adicional, telefone. Use o operador spread para copiar as propriedades.

// Questão 5. Crie um objeto livro com as propriedades titulo, autor, ano e genero. Use destructuring para extrair titulo e autor em variáveis separadas e exiba essas variáveis no console.

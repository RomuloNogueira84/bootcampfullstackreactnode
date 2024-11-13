// Questão 2. Crie um arquivo (math.js) com duas funções: uma chamada subtrai que retorna a diferença entre dois números e uma função padrão (export default) chamada divide que retorna a divisão de dois números. Importe ambas as funções em outro arquivo e teste-as.
export function subtrai(a, b) {
  console.log(`Squirtle usa Water Gun em ${a} e ${b}`);
  return a - b;
}
export default function divide(a, b) {
  console.log(`Bulbasaur usa Vine Whip em ${a} e ${b}`);
  if (b === 0) {
    return 'Erro: Divisão por zero';
  }
  return a / b;
}
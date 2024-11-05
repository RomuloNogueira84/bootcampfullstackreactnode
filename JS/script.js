//Atividade - JavaScript (Introdução)
//1. Considerando as variáveos x = 7 e y = 8, crie um código que receba dois números e retorne:
//A soma dos números.
let x = 7;
let y = 8;
let soma = x + y;
console.log("A soma dos números é: " + soma);

//A diferença entre os números.
let diferenca = x - y;
console.log("A diferença entre os números é: " + diferenca);

//A multiplicação dos números.
let multiplicacao = x * y;
console.log("A multiplicação dos números é: " + multiplicacao);

//A divisão dos números.
let divisao = x / y;
console.log("A divisão dos números é: " + divisao);


//2. Dado o valor let x = 10, utilize operadores de atribuição para modificar e exibir o valor de x da seguinte forma:
//Adicione 5 a x.
let j = 10;
j += 5;
console.log(j);

//Subtraia 3 de x.
let k = 10;
k -= 3;
console.log(k);

//Multiplique x por 2.
let l = 10;
l *= 2;
console.log(l);

//Divida x por 4.
let m = 10;
m /= 4;
console.log(m);



//3. Escreva um código que tenha duas strings e verifica:
//Se as duas strings são iguais (utilizando ==).
let string1 = "Olá";
let string2 = "Olá";
console.log(string1 == string2);

//Se as duas strings são diferentes (utilizando !=).
let palavra1 = "Olá";
let palavra2 = "Ola";
console.log(palavra1 != palavra2);

//4. Escreva um código que tenha duas strings e verifica:
//Se a primeira string é maior que a segunda.
let time1 = "Flamengo";
let time2 = "Corinthians";
console.log(time1 > time2);

//Se a primeira string é menor que a segunda.
let time3 = "Vasco";
let time4 = "Palmeiras";
console.log(time1 < time2);

//5. Crie um código que tenha três valores booleanos e mostre:
//A conjunção de todos eles.
let time5 = true;
let time6 = true;
let time7 = true;
console.log(time5 && time6 && time7);

//A disjunção de todos eles.
let time8 = false;
let time9 = false;
let time10 = false;
console.log(time8 || time9 || time10);

//A negação da disjunção de todos eles.
let time11 = true;
let time12 = true;
let time13 = true;
console.log(!time11 || !time12 || !time13);

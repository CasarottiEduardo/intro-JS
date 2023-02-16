// fazendo referencia para biblioteca de entrada de dados

let entrada = require('prompt-sync')();

// let nome = entrada('Digite seu nome:  ');

// console.log('Nome digitado:  ' + nome);

// var idade = entrada('Digite sa data de seu nascimento: ');

// console.log('Data digitada:  ' + idade);


// trabalhando com numeros
let vDigitado;
vDigitado = entrada('Digite o 1° numero:  ');
let n1 = parseInt(vDigitado);

vDigitado = entrada('Digite o 2° numero:  ');
let n2 = parseInt(vDigitado);

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;

console.log('Resultado da soma:  ' + n1 + ' e ' + n2 + ' = '  + soma);
console.log('Resultado da subtracao:  ' + n1 + ' e ' + n2 + ' = '  + subtracao);
console.log('Resultado da multiplicacao:  ' + n1 + ' e ' + n2 + ' = '  + multiplicacao);
console.log('Resultado da divisao:  ' + n1 + ' e ' + n2 + ' = '  + divisao.toFixed(2));




entrada('Precione enter para cancelar' );


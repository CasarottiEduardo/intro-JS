let entrada = require('prompt-sync')();


let vDigitado;
vDigitado = entrada('Digite o 1° numero:  ');
let n1 = parseInt(vDigitado);

vDigitado = entrada('Digite o 2° numero:  ');
let n2 = parseInt(vDigitado);

let soma = n1 + n2;
let media= soma / 2;

if (media <= 5 ){
    console.log('Sua nota é: ' + media);
}



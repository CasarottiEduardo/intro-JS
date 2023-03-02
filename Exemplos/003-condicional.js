const { getIdFromPath } = require('in/lib/normalizeArguments');

let entrada = require('prompt-sync')();

let idade = entrada('Digite sua idade: ');

    // if(idade === 18 )   {

    //     console.log('Voce pode se matricular na auto-escola');
    // }

    // if(idade > 18 )  {

    //     console.log('Voce ja pode dirigir caso tenha habilitação');
    // }
    // if(idade < 18 )   {

    //     console.log('Voce nao tem idade para tirar habilitação');

         //outra forma de fazer este exemplo

        if(idade >= 18) {
            console.log('Voce ja pode dirigir caso tenha habilitação');
         }   
            else {
            console.log('Voce nao tem idade para tirar habilitação');
    }

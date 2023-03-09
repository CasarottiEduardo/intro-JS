
/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/

let valor1 = parseInt(prompt("Digite o valor inicial: "));
let valor2 = parseInt(prompt("Digite o valor final: "));

if (valor1 < valor2) {
  let i = valor1;
  while (i <= valor2) {
    console.log(i);
    i++;
  }}
// } else {
//   let i = valor_inicial;
//   while (i >= valor_final) {
//     console.log(i);
//     i--;
//   }
// }
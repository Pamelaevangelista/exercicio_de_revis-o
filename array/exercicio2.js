//Crie um array de números e some todos os seus valores,exibindo o resultado.
let numero = [10,20,30];
let soma = 0;

for (var i=0; i<numero.length; i++){
    soma += numero[i];
}
console.log("A soma dos numeros é: " + soma)
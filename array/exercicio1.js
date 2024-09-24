// crie um arry com 10 numeros inteiros.Exiba apenas os números pares presente no array.

/*/forma 1 
let numero = [2, 4, 6, 8, 11, 13, 14, 20, 22];

for( var i = 0; i<=10; i++){
    if(numero[i]%2==0)
    console.log(numero[i])
}


//forma 2
*/
var numeros = [2,4,6,8,11,13,14,20,22];

let pares = numeros.filter(function(numero){
    return numero% 2 ==0;
});
console.log(`Números pares: ${pares}`)
   
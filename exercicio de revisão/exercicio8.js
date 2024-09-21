//Implemente um loop while que continue pedindo para o usuário 
//inserir um número até que ele digite um número maior que 100
//Parseint é usado para converter 

let num = 0;

while (num <= 100){
    num = parseInt(prompt("Digite um numero maior que 100 ")) 
}
console.log("Você digitou:" ,num)
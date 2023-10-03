alert('Olá Boas vindas ao jogo do número seceto');
let numeroSecreto = 8;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se o chute for igual ao número secreto
if (chute == numeroSecreto ) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto){
        alert(`o número secreto é menor que ${chute}`)
    } else {
        alert(`o número secreto é maior que ${chute}`)
    }
}
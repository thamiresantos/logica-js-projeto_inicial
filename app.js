alert('Olá Boas vindas ao jogo do número seceto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute ;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
    //significado desse true - chute != numeroSecreto
while (true) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto ) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);




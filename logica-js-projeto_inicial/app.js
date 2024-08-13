alert('Boas Vindas ao jogo do número secreto!');
let numeroMaximo = 500;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativa = 1;

//enquanto o chute não for igual ao numeroSecreto. . .
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao número secreto.
    if (chute == numeroSecreto) {
        // PARA O WHILE...
        break; 
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativa = tentativa + 1
        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa';
alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com [${tentativa}] ${palavraTentativa}.`);


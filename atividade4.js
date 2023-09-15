function somar(NumerosUSR) {
    return NumerosUSR.reduce((total, elemento) => total + elemento, 0);
}

const numeros = [];

function atualizarResultado() {
    const resultadoElement = document.getElementById("resultado");
    const resultado = somar(numeros);
    resultadoElement.textContent = `Resultado: ${resultado}`;
}

while (true) {
    const escolha = prompt("Escolha uma das opções:\n1. Adicionar números à lista para serem somados;\n2. Somar os números e exibir o resultado para encerrar o programa\nDigite o número da sua escolha:");

    if (escolha == 1) {
        var numero = prompt("Digite um número que será adicionado à lista para soma");
        numeros.push(Number(numero));
    } else if (escolha == 2) {
        atualizarResultado();
        console.log("Encerrando programa...");
        break;
    }
}

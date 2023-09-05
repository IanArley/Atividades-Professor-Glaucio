let alturasHomens = [];
let alturasMulheres = [];

class Altura {
  constructor(alturasH, alturasM) {
    this.alturasH = alturasH;
    this.alturasM = alturasM;
  }

  calculosHomens() {
    const numeroDeHomens = alturasHomens.length;
    const maiorAltura = Math.max(...alturasHomens);
    const menorAltura = Math.min(...alturasHomens);
    const mediaHomens = alturasHomens.reduce((acc, altura) => acc + altura, 0) / numeroDeHomens;

    console.log(`Nesta lista com ${numeroDeHomens} Homens:\nO homem mais alto tem: ${maiorAltura} metros;\nO homem mais baixo tem : ${menorAltura} metros;\nA média das alturas é: ${mediaHomens}`);
  }

  calculosMulheres() {
    const numeroDeMulheres = alturasMulheres.length;
    const maiorAltura = Math.max(...alturasMulheres);
    const menorAltura = Math.min(...alturasMulheres);
    const mediaMulheres = alturasMulheres.reduce((acc, altura) => acc + altura, 0) / numeroDeMulheres;

    console.log(`Nesta lista com ${numeroDeMulheres} mulheres:\nA mulher mais alta tem: ${maiorAltura} metros;\nA mulher mais baixa tem : ${menorAltura} metros;\nA média das alturas é: ${mediaMulheres}`);
  }
}

while (true) {
  const escolha = parseInt(prompt("1. Homens\n2. Mulheres\n3. Encerrar programa\nDigite o número correspondente ao gênero que será utilizado ou digite 3 para encerrar o programa: "));

  if (escolha === 1) {
    const homem = parseFloat(prompt("\nDigite a altura de um homem (a altura deve ser digitada usando um ponto ao invés da vírgula): "));
    alturasHomens.push(homem);

    let escolha2 = parseInt(prompt("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas (Necessário para obter as respostas)\n2. Seguir para as respostas: "));

    while (escolha2 === 1) {
      const homem = parseFloat(prompt("Digite a altura de um homem: "));
      alturasHomens.push(homem);
      escolha2 = parseInt(prompt("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas (Necessário para obter as respostas)\n2. Seguir para as respostas: "));
    }

    if (escolha2 === 2) {
      const altura = new Altura(alturasHomens, []);
      altura.calculosHomens();
    }
  } else if (escolha === 2) {
    const mulher = parseFloat(prompt("\nDigite a altura de uma mulher (a altura deve ser digitada usando um ponto ao invés da vírgula): "));
    alturasMulheres.push(mulher);

    let escolha2 = parseInt(prompt("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas (Necessário para obter as respostas)\n2. Seguir para as respostas: "));

    while (escolha2 === 1) {
      const mulher = parseFloat(prompt("Digite a altura de uma mulher: "));
      alturasMulheres.push(mulher);
      escolha2 = parseInt(prompt("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas (Necessário para obter as respostas)\n2. Seguir para as respostas: "));
    }

    if (escolha2 === 2) {
      const altura = new Altura([], alturasMulheres);
      altura.calculosMulheres();
    }
  } else if (escolha === 3) {
    console.log("Encerrando Programa...");
    break;
  } else {
    console.log("Erro!!! Digite apenas números e/ou apenas os que o programa pede...\n\n");
  }
}

// Exercício 1

const calcularAnosParaUltrapassar = (populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) => {
    if (populacaoA >= populacaoB) {
        return 0;
    }

    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA *= 1 + (taxaCrescimentoA / 100);
        populacaoB *= 1 + (taxaCrescimentoB / 100);
        anos++;
    }

    return anos;
};

const populacaoA = 80000;
const taxaCrescimentoA = 3;
const populacaoB = 200000;
const taxaCrescimentoB = 1.5;

const anosNecessarios = calcularAnosParaUltrapassar(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);

console.log(`Serão necessários ${anosNecessarios} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

// Exercício 2

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numerosPares = 0;
let numerosImpares = 0;
let contador = 0;

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}

function solicitarNumero() {
    rl.question(`Digite o ${contador + 1}º número: `, (numero) => {
        const numeroInteiro = parseInt(numero);
        if (isNaN(numeroInteiro)) {
            console.log("Isso não é um número inteiro válido. Tente novamente.");
            solicitarNumero();
        } else {
            verificarParOuImpar(numeroInteiro);
            contador++;
            if (contador < 10) {
                solicitarNumero();
            } else {
                rl.close();
                console.log(`Quantidade de números pares: ${numerosPares}`);
                console.log(`Quantidade de números ímpares: ${numerosImpares}`);
            }
        }
    });
}

solicitarNumero();


// Exercício 3

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularValores(numeros) {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let somaValores = 0;

    for (const numero of numeros) {
        menorValor = Math.min(menorValor, numero);
        maiorValor = Math.max(maiorValor, numero);
        somaValores += numero;
    }

    return { menorValor, maiorValor, somaValores };
}

function validarNumero(numero) {
    return !isNaN(numero) && numero >= 0;
}

function solicitarNumeros() {
    rl.question("Quantos números deseja inserir? ", (numero) => {
        const totalNumeros = parseInt(numero);

        if (isNaN(totalNumeros) || totalNumeros <= 0) {
            console.log("Por favor, insira um número válido maior que zero.");
            solicitarNumeros();
        } else {
            console.log(`Digite ${totalNumeros} números:`);

            const inserirNumero = (contador, numeros) => {
                if (contador < totalNumeros) {
                    rl.question(`Número ${contador + 1}: `, (inputNumero) => {
                        const numero = parseFloat(inputNumero);

                        if (!validarNumero(numero)) {
                            console.log("Por favor, insira um número válido não negativo.");
                            inserirNumero(contador, numeros);
                        } else {
                            numeros.push(numero);
                            inserirNumero(contador + 1, numeros);
                        }
                    });
                } else {
                    rl.close();
                    const { menorValor, maiorValor, somaValores } = calcularValores(numeros);
                    console.log(`Menor valor: ${menorValor}`);
                    console.log(`Maior valor: ${maiorValor}`);
                    console.log(`Soma dos valores: ${somaValores}`);
                }
            };

            inserirNumero(0, []);
        }
    });
}

solicitarNumeros();
 
// Exercício 4

function calcularAumentoSalarial(salarioInicial) {
    let salarioAtual = salarioInicial;
    let percentualAumento = 1.5;

    for (let ano = 1996; ano <= new Date().getFullYear(); ano++) {
        salarioAtual += (percentualAumento / 100) * salarioAtual;
        percentualAumento *= 2;
    }

    return salarioAtual;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o salário inicial do funcionário: R$ ", (inputSalarioInicial) => {
    const salarioInicial = parseFloat(inputSalarioInicial);

    if (isNaN(salarioInicial) || salarioInicial <= 0) {
        console.log("Por favor, insira um valor de salário válido.");
        rl.close();
        return;
    }

    const salarioAtual = calcularAumentoSalarial(salarioInicial);

    console.log(`O salário atual em ${new Date().getFullYear()} é de R$ ${salarioAtual.toFixed(2)}`);
    rl.close();
});

// Exercício 5

function calcularAreaEPerimetroDoCirculo(raio) {
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    return {
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    };
}

const raio = 5;

if (raio <= 0) {
    console.log("O raio deve ser um número positivo.");
} else {
    const resultado = calcularAreaEPerimetroDoCirculo(raio);
    console.log(`Área do círculo com raio ${raio}: ${resultado.area} unidades quadradas`);
    console.log(`Perímetro do círculo com raio ${raio}: ${resultado.perimetro} unidades`);
}

// Exercício 6

function validarValores(capitalInicial, taxaJurosMensal, tempoMeses) {
    if (capitalInicial <= 0 || taxaJurosMensal <= 0 || tempoMeses <= 0) {
        return "Os valores de entrada devem ser positivos.";
    }
    return null; // Valores válidos
}

function calcularMontante(capitalInicial, taxaJurosMensal, tempoMeses) {
    const taxaJurosDecimal = taxaJurosMensal / 100;
    const montante = capitalInicial * Math.pow(1 + taxaJurosDecimal, tempoMeses);
    
    return montante.toFixed(2);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o capital inicial investido: R$ ", (inputCapitalInicial) => {
    const capitalInicial = parseFloat(inputCapitalInicial);

    rl.question("Digite a taxa de juros mensal (em percentual): ", (inputTaxaJurosMensal) => {
        const taxaJurosMensal = parseFloat(inputTaxaJurosMensal);

        rl.question("Digite o tempo do investimento (em meses): ", (inputTempoMeses) => {
            const tempoMeses = parseInt(inputTempoMeses);

            const erroValidacao = validarValores(capitalInicial, taxaJurosMensal, tempoMeses);

            if (erroValidacao) {
                console.log(erroValidacao);
            } else {
                const resultado = calcularMontante(capitalInicial, taxaJurosMensal, tempoMeses);
                console.log(`O montante após ${tempoMeses} meses será de R$ ${resultado}`);
            }

            rl.close();
        });
    });
});

// Exercício 7

var alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];

function calcularMedia(notas) {
    const somaNotas = notas.reduce((total, nota) => total + nota, 0);
    return somaNotas / notas.length;
}

function imprimirAlunosAprovados(listaAlunos) {
    console.log("Alunos aprovados:");

    for (const aluno of listaAlunos) {
        const media = calcularMedia(aluno.notas);
        if (media >= 7) {
            console.log(`Nome: ${aluno.nome}`);
            console.log(`Média Aritmética: ${media.toFixed(2)}`);
            console.log(`Curso: ${aluno.curso}`);
            console.log("--------------");
        }
    }
}

imprimirAlunosAprovados(alunos);

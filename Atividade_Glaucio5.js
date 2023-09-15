let notas = [];

function calcularMedia(notas) {
    const soma = notas.reduce((total, elemento) => total + elemento, 0);
    return soma / notas.length;
}


document.getElementById("calcularMedia").addEventListener("click", function () {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira todas as notas.");
        return;
    }

    notas = [nota1, nota2, nota3];
    const mediaFinal = calcularMedia(notas);

    let textoResultado = `Notas: ${nota1}, ${nota2}, ${nota3}<br>`;
    textoResultado += `Média: ${mediaFinal.toFixed(2)}`;

    document.getElementById("result").innerHTML = textoResultado;

    if (mediaFinal >= 7.0) {
        document.getElementById("recuperacao").textContent = 'O aluno foi aprovado.';
    } else if (mediaFinal > 4 && mediaFinal < 7) {
        document.getElementById("recuperacao").textContent = 'O aluno está na recuperação.';
        let notarec = parseFloat(document.getElementById("notarec").value);
        let final = (mediaFinal + notarec)/2
        if (final >= 5){
            document.getElementById("recuperacao").textContent = 'O aluno foi aprovado pela recuperação.';     
        }
        else{
            document.getElementById("recuperacao").textContent = 'O aluno foi reprovado.'; 
        }

    } else {
        document.getElementById("recuperacao").textContent = 'O aluno foi reprovado.';
    }
});

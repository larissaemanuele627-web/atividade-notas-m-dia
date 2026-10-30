
function calcularMedia() {

    let nome = document.getElementById("nome").value;

    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    let resultado = document.getElementById("resultado");

    if (nome.trim() === "") {
        resultado.innerHTML = "Digite o nome do estudante.";
        return;
    }

    if (nota1 === "" || nota2 === "" || nota3 === "") {
        resultado.innerHTML = "Preencha todas as notas.";
        return;
    }

    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10 ||
        !Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        !Number.isFinite(nota3)
    ) {
        resultado.innerHTML = "Digite notas válidas entre 0 e 10.";
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    resultado.innerHTML =
        "Estudante: " + nome +
        "<br>Média: " + media.toFixed(2) +
        "<br>Situação: " + situacao;
}

function limparCampos() {

    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    document.getElementById("resultado").innerHTML = "";
}

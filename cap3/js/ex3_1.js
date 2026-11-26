function calcularMedia() {
	var inAluno = document.getElementById("inAluno");
	var inNota1 = document.getElementById("inNota1");
	var inNota2 = document.getElementById("inNota2");
	var outMedia = document.getElementById("outMedia");
	var outSituacao = document.getElementById("outSituacao");
	// Entrada de Dados
	var aluno = inAluno.value;
	var nota1 = Number(inNota1.value);
	var nota2 = Number(inNota2.value);
	// Processamento
	var media = (nota1 + nota2) / 2;
	// Saída de Dados
	if (media >= 7) {
		outSituacao.textContent = `Parabéns ${aluno}! Você foi aprovado(a)`;
		outSituacao.style = "color: blue;"
	} else {
		outSituacao.textContent = `Que pena ${aluno}. Você foi reprovado(a)`;
		outSituacao.style = "color: red;"
	}
	outMedia.textContent = `Média das Notas: ${media.toFixed(1)}`;
}
// Ouvinte de Evento
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMedia);
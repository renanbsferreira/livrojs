function ConverterMinutos() {
    var filme = document.getElementById("inFilme").value;
    var duracao = Number(document.getElementById("inDuracao").value);
    var outFilme = document.getElementById("outFilme");
    var outResultado = document.getElementById("outResultado");
    // Processamento
    var horas = Math.floor(duracao / 60);
    var minutos = duracao % 60;
    // Saída de Dados
    outFilme.textContent = filme;
    outResultado.textContent = `${horas} horas(s) e ${minutos} minutos(s)`;
}
// Ouvinte de Evento
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", ConverterMinutos);
function ConverterMinutos() {
    var inFilme = document.getElementById("inFilme");
    var inDuracao = document.getElementById("inDuracao"); 
    var outFilme = document.getElementById("outFilme");
    var outResultado = document.getElementById("outResultado");
    // Entrada de Dados
    var filme = inFilme.value;
    var duracao = Number(inDuracao.value);
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
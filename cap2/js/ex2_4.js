function calcularPreco() {
    var inPrecoKg = document.getElementById("inPrecoKg");
    var inConsumoGr = document.getElementById("inConsumoGr");
    var outValor = document.getElementById("outValor");
    // Entrada de Dados
    var precoKg = Number(inPrecoKg.value);
    var consumoGr = Number(inConsumoGr.value);
    // Processamento
    var valor = (precoKg / 1000) * consumoGr;
    // Saída de Dados
    outValor.textContent = `Valor a pagar R$: ${valor.toFixed(2)}`;
}
// Ouvinte de Evento
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
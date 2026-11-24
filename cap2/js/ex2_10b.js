function calcularValor() {
    var inValor = document.getElementById("inValor");
    var inMinutos = document.getElementById("inMinutos");
    var outValorAPagar = document.getElementById("outValorAPagar");
    // Entrada de Dados
    var valor = Number(inValor.value);
    var minutos = Number(inMinutos.value);
    // Processamento
    var valorAPagar = Math.ceil(minutos / 15) * valor;
    // Saída de Dados
    outValorAPagar.textContent = `Valor a Pagar: R$${valorAPagar.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);
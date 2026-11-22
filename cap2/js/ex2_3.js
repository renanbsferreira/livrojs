function calcularPromocao() {
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");
    // Entrada de Dados
    var veiculo = inVeiculo.value;
    var preco =  Number(inPreco.value);
    // Processamento
    var entrada = preco * 0.5;
    var parcela = (preco - entrada) / 12;
    // Saída de Dados
    outVeiculo.textContent = `Modelo: ${veiculo}`
    outEntrada.textContent = `Entrada de R$: ${entrada.toFixed(2)}`
    outParcela.textContent = `+ 12 x de R$: ${parcela.toFixed(2)}`
}
// Ouvinte de Evento
var btVerPromo = document.getElementById("btVerPromo");
btVerPromo.addEventListener("click", calcularPromocao);
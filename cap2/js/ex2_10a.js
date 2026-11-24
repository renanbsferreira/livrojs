function mostrarPromo() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");
    // Entrada de Dados
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);
    // Processamento
    var promocao = Math.floor(preco * 2);
    // Saída de Dados
    outMedicamento.textContent = `Promoção de ${medicamento}`;
    outPromocao.textContent = `Leve 2 por apenas: R$${promocao.toFixed(2)}`;
}
var btMostrarPromo = document.getElementById("btMostrarPromo");
btMostrarPromo.addEventListener("click", mostrarPromo);
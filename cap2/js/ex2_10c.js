function calcularPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outDesconto = document.getElementById("outDesconto");
    // Entrada de Dados
    var produto = inProduto.value;
    var preco = Number(inPreco.value);
    // Processamento
    var desconto = preco * 0.5;
    var promocao = (preco * 2) + desconto;
    // Saída de Dados
    outPromocao.textContent = `${produto} - Promoção: Leve 3 por: R$${promocao.toFixed(2)}`;
    outDesconto.textContent = `O 3° produto custa apenas: R$${desconto.toFixed(2)}`;
}
var btVerPromo = document.getElementById("btVerPromo");
btVerPromo.addEventListener("click", calcularPromocao);
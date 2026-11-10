function mostrarOla() {
    var inNome = document.getElementById("inNome");
    var outResposta = document.getElementById("outResposta");
    // Entrada de Dados
    var nome = inNome.value;
    // Saída de Dados
    outResposta.textContent = `Olá ${nome}, bem-vindo ao nosso site!`
}
var btMostrar = document.getElementById("btMostrar");
// Ouvinte de Evento
btMostrar.addEventListener("click", mostrarOla);
// btMostrar.onclick = mostrarOla; <--Outro Jeito-->
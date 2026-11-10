/* Declara a função Mostrar: */
function mostrarOla() {
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
}
/*  Registra um ouvinte para acionar a função Mostrar,
    pra quando o botão for clicado (evento: click). */
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);
// Outro jeito: mostrar.onclick = mostrarOla; (Limite para somente uma função)
var rafa = { nome: "rafa", vitorias: 8, empates: 2, derrotas: 1, pontos: 0 };
var paulo = { nome: "paulo", vitorias: 5, empates: 2, derrotas: 1, pontos: 0 };
var gui = { nome: "gui", vitorias: 6, empates: 2, derrotas: 2, pontos: 0 };
var murilo = {
  nome: "murilo",
  vitorias: 9,
  empates: 1,
  derrotas: 1,
  pontos: 0
};
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  //console.log(pontos);
  return pontos;
  //console.log(paulo);
  //console.log(rafa);
  //var resultadoDosPontos = calculaPontos(rafa);
  //calculaPontos(rafa);
  rafa.pontos = calculaPontos(rafa);
  paulo.pontos = calculaPontos(paulo);
  gui.pontos = calculaPontos(gui);
  murilo.pontos = calculaPontos(murilo);
}
var jogadores = [rafa, paulo, gui, murilo];
//console.log(jogadores);
//console.log(paulo);
function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" +
      i +
      ")'>vitorias</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);
//elemento+= </tr>
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitoria++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

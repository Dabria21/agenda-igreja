const versiculos = [
  "O Senhor é o meu pastor; nada me faltará. - Salmo 23:1",
  "Tudo posso naquele que me fortalece. - Filipenses 4:13",
  "Entrega o teu caminho ao Senhor; confia nele, e ele o fará. - Salmo 37:5",
  "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito. - João 3:16",
  "O choro pode durar uma noite, mas a alegria vem pela manhã. - Salmo 30:5",
  "Se Deus é por nós, quem será contra nós? - Romanos 8:31",
  "Clama a mim, e responder-te-ei. - Jeremias 33:3",
  "Sede fortes e corajosos, não temais. - Josué 1:9",
  "Alegrai-vos sempre no Senhor. - Filipenses 4:4",
  "Em tudo dai graças. - 1 Tessalonicenses 5:18",
  "1 João 4:19 – Nós o amamos porque ele nos amou primeiro.",
  "Romanos 5:8 – Mas Deus prova o seu amor para conosco em que Cristo morreu por nós.",
  "Salmos 86:5 – Pois tu, Senhor, és bom e perdoador, e abundante em misericórdia.",
  "Jeremias 31:3 – Com amor eterno te amei; por isso, com benignidade te atraí.",
  "Atos 16:31 – Crê no Senhor Jesus Cristo e serás salvo.",
  "Romanos 10:9 – Se com a tua boca confessares ao Senhor Jesus, serás salvo.",
  "Efésios 2:8 – Pela graça sois salvos, por meio da fé.",
  "João 14:6 – Eu sou o caminho, e a verdade, e a vida.",
  "1 João 5:12 – Quem tem o Filho tem a vida.",
  "2 Coríntios 5:17 – Se alguém está em Cristo, nova criatura é.",
  "Mateus 11:28 – Vinde a mim todos os que estais cansados, e eu vos aliviarei.",
  "Isaías 41:10 – Não temas, porque eu sou contigo.",
  "Mateus 5:14 – Vós sois a luz do mundo.",
  "Salmos 119:105 – Lâmpada para os meus pés é tua palavra.",
  "João 8:12 – Eu sou a luz do mundo; quem me segue não andará em trevas.",
  "Marcos 16:15 – Ide por todo o mundo e pregai o evangelho a toda criatura."
];

function gerarVersiculo() {
  const indice = Math.floor(Math.random() * versiculos.length);
  const versiculo = versiculos[indice];
  document.getElementById("versiculo").innerText = versiculo;
}

const readline = require('readline');

// Interface para leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeUsuario = ''; // Variável para armazenar o nome do usuário

// Apresentação inicial
function apresentarAssistente(nomeDoAssistente) {
  console.log(`Olá! Eu sou ${nomeDoAssistente}, seu assistente virtual.`);
  rl.question("Qual é o seu nome? ", function(resposta) {
    nomeUsuario = resposta;
    console.log(`Prazer em te conhecer, ${nomeUsuario}!\n`);
    iniciarLoop();
  });
}

// Mostrar menu de opções
function mostrarMenu() {
  console.log("\n--- Alexo: Seu Assistente Virtual ---");
  console.log(" [1] Que horas são? (Fictício)");
  console.log(" [2] Conte uma curiosidade");
  console.log(" [3] Me diga seu nome");
  console.log(" [4] Conte uma piada");
  console.log(" [5] Previsão do tempo (Fictícia)");
  console.log(" [6] Sair");
  console.log("---------------------------------------");
}

// Simular hora fictícia
function mostrarHoraFicticia() {
  console.log(" De acordo com meus circuitos, agora são 20:30 do dia 23/08/2025.");
}

// Contar uma curiosidade
function contarCuriosidade() {
  const curiosidades = [
    
    "Você sabia que o maior time de futebol do Brasil é o Flamengo, com mais de 40 milhões de torcedores?",
    "O mascote do Flamengo foi adotado em resposta a uma provocação racista que as outras torcidas faziam com o time, que tinha grande número de negros entre os torcedores",
    "O Flamengo foi fundado em 17 de novembro de 1895, mas a data oficial da fundação foi alterada para 15 de novembro, feriado nacional da Proclamação da República"
];
  const indice = Math.floor(Math.random() * curiosidades.length);
  console.log("", curiosidades[indice]);
}

// Mostrar nome do usuário
function dizerNomeDoUsuario() {
  if (nomeUsuario) {
    console.log(` Meu nome é Alexo, se minha memória não falha!`);
  } else {
    console.log(" Ainda não sei seu nome. Que tal me contar?");
  }
}
// Contar uma piada
function contarPiada() {
  const piadas = [
    "O que acontece quando chove na Inglaterra? VIra Inglalama",
    "Como o programador atende ao telefone? Alô, mundo!",
    "O que o pato falou para a pata? Vem quá"
  ];
  const i = Math.floor(Math.random() * piadas.length);
  console.log("Alexo diz:", piadas[i]);
}
// Previsão do tempo fictícia
function mostrarPrevisaoTempo() {
  console.log("Segundo meus sensores, o tempo está nublado com chances de código bugado.");
}
// Iniciar o loop de menu
function iniciarLoop() {
  mostrarMenu();
  rl.question("Escolha uma opção: ", function(opcao) {
    switch(opcao) {
      case "1":
        mostrarHoraFicticia();
        break;
      case "2":
        contarCuriosidade();
        break;
      case "3":
        dizerNomeDoUsuario();
        break;
      case "4":
        contarPiada();
        break;
      case "5":
        mostrarPrevisaoTempo(); 
        break;
      case "6":
        console.log(" Até logo, foi um prazer te ajudar!");
        rl.close();
        return;
      default:
        console.log(" Não entendi essa opção. Tente novamente.");
    }
    iniciarLoop(); // Repetir o menu
  });
}

// Iniciar o assistente
apresentarAssistente("Alexo");

const jokes = [
  {
    piada: "O que o zero disse para o oito? 'Belo cinto!'",
    categoria: "Matemática",
  },
  {
    piada:
      "Por que o livro de matemática se suicidou? Porque tinha muitos problemas.",
    categoria: "Matemática",
  },
  {
    piada:
      "O que a banana falou para a geladeira? 'Não me faça abrir, estou muito quente!'",
    categoria: "Frutas",
  },
  { piada: "Como o oceano se despediu? 'Ele onda!'", categoria: "Natureza" },
  {
    piada: "O que o peixe disse quando bateu na parede? 'Dam!'",
    categoria: "Peixes",
  },
  {
    piada:
      "Qual é o animal mais antigo? A zebra, porque está em preto e branco.",
    categoria: "Animais",
  },
  {
    piada:
      "Por que o coelho atravessou a estrada? Para ir à casa da sua namorada.",
    categoria: "Coelhos",
  },
  {
    piada: "O que é um vegetariano que come carne? Um ex-vegetariano.",
    categoria: "Vegetarianismo",
  },
  { piada: "Como a abelha se despede? 'Beeijos!'", categoria: "Insetos" },
  {
    piada:
      "Por que as aranhas são boas em programação? Porque elas sempre usam o web.",
    categoria: "Tecnologia",
  },
  {
    piada: "O que o tomate foi fazer no banco? Tirar extrato!",
    categoria: "Frutas",
  },
  {
    piada: "Como o café mostrou sua beleza? Ele se fez espresso!",
    categoria: "Bebidas",
  },
  {
    piada:
      "O que o pão falou para o outro pão? 'Você é tão macio, eu gosto de você!'",
    categoria: "Alimentos",
  },
  {
    piada: "Por que o computador foi ao médico? Porque estava com um vírus.",
    categoria: "Tecnologia",
  },
  {
    piada:
      "Qual é o animal que sempre perde? O peixe, porque ele não sabe nadar.",
    categoria: "Peixes",
  },
  {
    piada: "O que acontece quando um sapo sai da água? Ele fica seco!",
    categoria: "Natureza",
  },
  {
    piada: "Por que o pássaro não usa Facebook? Porque ele já tem Twitter.",
    categoria: "Pássaros",
  },
  {
    piada:
      "Como se despede um elétron? 'Eu vou, mas estou sempre aqui, na sua carga!'",
    categoria: "Física",
  },
  {
    piada: "O que um sofá falou para o outro? 'Vamos nos sentar?'",
    categoria: "Móveis",
  },
  {
    piada:
      "Qual é o cúmulo da distração? É o cara que vai ao banheiro e esquece de levar a privada!",
    categoria: "Vida Diária",
  },
  {
    piada:
      "Por que os fantasmas são péssimos mentirosos? Porque você pode ver através deles!",
    categoria: "Fantasia",
  },
  {
    piada:
      "O que o corredor disse para o maratonista? 'Vai correr ou vai assistir?'",
    categoria: "Esportes",
  },
  {
    piada: "Qual é o cúmulo da paciência? Esperar o celular carregar!",
    categoria: "Tecnologia",
  },
  {
    piada:
      "Por que o computador não consegue contar até 10? Porque ele só sabe contar em binário!",
    categoria: "Tecnologia",
  },
  {
    piada: "O que a vaca foi fazer no espaço? Fazer a Via Láctea!",
    categoria: "Animais",
  },
  {
    piada:
      "Por que as plantas são ruins em matemática? Porque elas sempre ficam na sombra!",
    categoria: "Natureza",
  },
  {
    piada: "O que o tomate disse para a cebola? 'Não chore, eu estou aqui!'",
    categoria: "Frutas",
  },
  {
    piada: "Como se chama um boomerangue que não volta? Um pau!",
    categoria: "Brincadeiras",
  },
  {
    piada: "Por que os pássaros não usam celular? Porque eles já têm tweet!",
    categoria: "Pássaros",
  },
  {
    piada: "O que a água disse para o gelo? 'Você está muito frio!'",
    categoria: "Natureza",
  },
  {
    piada:
      "Qual é o cúmulo da falta de memória? Esquecer o nome do seu próprio filho!",
    categoria: "Vida Diária",
  },
  {
    piada: "O que o gato disse para a gata? 'Você é uma gata de primeira!'",
    categoria: "Animais",
  },
  {
    piada:
      "Por que os elefantes não usam computadores? Porque têm medo do mouse!",
    categoria: "Animais",
  },
  {
    piada:
      "O que a vaca foi fazer na escola? Aprender a fazer cálculos de leite!",
    categoria: "Animais",
  },
  {
    piada:
      "Qual é o cúmulo da riqueza? Ter um celular com mais de 200 aplicativos e não usar nenhum!",
    categoria: "Vida Diária",
  },
  {
    piada:
      "O que um pedreiro disse para o outro? 'Precisamos de mais tijolos, ou a casa não vai sair!'",
    categoria: "Construção",
  },
  {
    piada: "Por que o livro foi ao médico? Porque estava com páginas amarelas!",
    categoria: "Literatura",
  },
  {
    piada: "O que a laranja disse para a maçã? 'Você é a fruta da vez!'",
    categoria: "Frutas",
  },
  {
    piada: "Qual é o cúmulo do esquecimento? Esquecer que esqueceu!",
    categoria: "Vida Diária",
  },
  {
    piada:
      "O que o eletricista falou quando terminou o trabalho? 'Foi um prazer fazer a conexão!'",
    categoria: "Profissões",
  },
  {
    piada:
      "Por que a abelha sempre está no trabalho? Porque ela é uma verdadeira 'trabalhadora'!",
    categoria: "Insetos",
  },
  {
    piada:
      "O que um cachorro disse para o outro? 'Vamos dar uma volta no quarteirão?'",
    categoria: "Animais",
  },
  {
    piada: "Qual é o cúmulo da má sorte? Ser atropelado por uma tartaruga!",
    categoria: "Animais",
  },
  {
    piada:
      "O que a geladeira falou para o freezer? 'Estamos congelados na amizade!'",
    categoria: "Eletrodomésticos",
  },
  {
    piada: "Por que o boi foi ao cinema? Para ver a 'cena' do filme!",
    categoria: "Animais",
  },
  {
    piada:
      "O que o sanduíche disse para o pão? 'Você é o recheio da minha vida!'",
    categoria: "Alimentos",
  },
  {
    piada:
      "Qual é o cúmulo da falta de jeito? Quebrar a perna no primeiro dia de aula de dança!",
    categoria: "Vida Diária",
  },
  {
    piada:
      "O que um pássaro disse para o outro no inverno? 'Vamos voar para o calor!'",
    categoria: "Pássaros",
  },
  {
    piada:
      "Por que a galinha se juntou ao gym? Para ficar em forma para a Páscoa!",
    categoria: "Animais",
  },
  {
    piada:
      "O que a estrela disse para o planeta? 'Você brilha muito, mas eu sou a mais brilhante!'",
    categoria: "Espaço",
  },
];

export default jokes;

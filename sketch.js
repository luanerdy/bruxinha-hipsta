let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let alturaHipsta = 135;
let cenario;
let somDoJogo;
let somPulo;
let personagem;
let inimigo;
gameOver = false;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

function preload() {
   
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  soundFormats('ogg', 'mp3');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  somDoJogo.loop();
  cenario = new Cenario(imagemCenario, 5);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, alturaHipsta, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-50, 52, 52, 104, 104);
  frameRate(40);
}

function keyPressed() {

  if(key === ' ') {

    personagem.pula();
    somPulo.play();
  }

  if(key === 'r') {

    loop();

    setTimeout(() => gameOver = false, 1000);
  }
}

function andar() {

  if(keyIsDown(LEFT_ARROW)) {

    personagem.anda(-1);
  }

  if(keyIsDown(RIGHT_ARROW)) {

    personagem.anda(1);
  }
}

function draw() {
  
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if(personagem.estaColidindo(inimigo) && !gameOver) {

    gameOver = true;
    noLoop();
  }

  andar();
}
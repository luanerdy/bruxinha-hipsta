class Personagem extends Animacao {

  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {

    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = height - altura;
    this.y = this.yInicial;

    this.gravidade = 3;
    this.velocidadeDoPulo = 0;
    this.velocidadeDoAndar = 10;
  }

  pula() {

    this.velocidadeDoPulo = -50;
  }

  anda(lado) {

    this.x += lado*this.velocidadeDoAndar;

    if(this.x < 0) {

      this.x = 0;
    }

    if(this.x > width - this.largura) {

      this.x = width - this.largura;
    }
  }

  aplicaGravidade() {

    this.y += this.velocidadeDoPulo;

    this.velocidadeDoPulo += this.gravidade;

    if(this.y > this.yInicial) {

      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {

    const precisao = .7;
    const colisao = collideRectRect(this.x, 
                                    this.y, 
                                    this.largura * precisao, 
                                    this.altura * precisao,
                                    inimigo.x,
                                    inimigo.y,
                                    inimigo.altura,
                                    inimigo.largura
                    );

    return colisao;
  }
}
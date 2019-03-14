var x, y, yIni;
var cabecaW;
var cabecaH;
var troncoW;
var troncoH;
var espaco;
var bracoW;
var bracoH;
var pernaW;
var pernaH;
var rotacaoD
var rotacaoE

function setup() {
  createCanvas(600, 600);
  cabecaW = 60
  cabecaH = 60
  troncoW = 120
  troncoH = 150
  bracoW = 100
  bracoH = 40
  pernaW = 50
  pernaH = 120
  x = width / 2
  y = height / 2
  espaco = 10
  yIni = 20
  rotacaoD = 0
  rotacaoE = 0

}

function draw() {
  background(220);
  smooth()
  //cabeca
  push()
  translate(x, yIni)
  rect(-cabecaW / 2, 0, cabecaW, cabecaH)
  pop()

  //tronco
  push()
  translate(x, yIni)
  rect(-troncoW / 2, cabecaH + espaco, troncoW, troncoH)
  pop()

  //braço direito
  push()
  translate(x - troncoW / 2 - espaco, yIni + cabecaH + bracoH / 2 + espaco + 10)
  if (keyIsDown(68)) {
    rotate(radians(30));
  }
  rect(-bracoW, -bracoH / 2, bracoW, bracoH)
  pop()

  //braço esquerdo
  push()
  translate(x + troncoW / 2 + espaco, yIni + cabecaH + bracoH / 2 + espaco + 10)
  if (keyIsDown(69)) {
    rotate(radians(-30));
  }
  rect(0, -bracoH / 2, bracoW, bracoH)
  pop()

  //perna direita
  push()
  translate(x - troncoW/2, yIni + cabecaH + troncoH + 2*espaco)
  rect(0, 0, pernaW, pernaH)
  pop()

  //perna esquerda
  push()
  translate(x + troncoW/2 - pernaW, yIni + cabecaH + troncoH + 2*espaco)
  rect(0, 0, pernaW, pernaH)
  pop()

}
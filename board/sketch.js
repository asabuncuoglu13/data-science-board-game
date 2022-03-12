let boardMap, cardIst, cardOslo, cardLiv, cardMel;
let cardIstPos, cardOsloPos, cardLivPos, cardMelPos;
let isCardIstPos, isCardOsloPos, isCardLivPos, isCardMelPos;
let imageSize;
let proportion;
let yOff = 0;

function preload() {
  boardMap = loadImage('img/map.jpg');
  cardIst = loadImage('img/race-ist-metro.jpg');
  cardOslo = loadImage('img/race-liv-chart.jpg');
  cardLiv = loadImage('img/race-mel-roof.jpg');
  cardMel = loadImage('img/race-oslo-bike.jpg');
}

function setup() {
  proportion = windowWidth / 4961;
  createCanvas(windowWidth, windowHeight);
  background(230);
  setCardPositions();
  image(boardMap, 0,0, windowWidth,  proportion * 3509);
  image(cardLiv, cardLivPos[0], cardLivPos[1], proportion * 1000, proportion * 1000);
  printTitle('Select a Card', width * 0.1, height * 0.1);
}

function setCardPositions(){
    cardLivPos = [30, 250];
}

function printTitle(str, x, y) {
  fill(255);
  stroke(255);
  textFont('Bangers');
  textSize(min(height * 0.08, width * 0.08));
  text(str, x, y);
}

function draw() {
  checkMouseState();
}

function checkMouseState() {
  isCardLivPos = (mouseX > cardLivPos[0] && mouseX < cardLivPos[0] + imageSize) &&
      (mouseY > cardLivPos[1] && mouseY < cardLivPos[1] + imageSize);
}

function mouseClicked() {
  if (isCardLivPos) {
    console.log('Hello Liverpool');
  }
}

function mouseMoved() {
  if (isCardLivPos) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}
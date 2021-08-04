var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;
var car1,car2,car3,car4;
var c1i,c2i,c31,c4i
var cars;
var tracking;

function preload() {
  c1i = loadImage("images/car1.png");
  c2i = loadImage("images/car2.png");
  c3i = loadImage("images/car3.png");
  c4i = loadImage("images/car4.png");
  tracking = loadImage("images/track.jpg");

}


function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  if (playerCount === 4) {
    game.updateState(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

   if (gameState === 2) {
  game.end();
    
   }

}

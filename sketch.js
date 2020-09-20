var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bg ,gamer,gamer1
var form, player, game,pool;
var score=0;
function preload (){
 bg=loadImage("game 1.jpg" )
 gamer1=loadImage("man for my game.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255,255,255);  
  if(playerCount == 3){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
     
    }


    
  }
 

function keyPressed (){
if (keyDown==UP_ARROW){
  gamer.velocityX=1
  gamer.velocityY=3
  
}
}
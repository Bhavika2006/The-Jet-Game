var database
var playerImg
var gameState = 0
function preload(){
playerImg = loadImage("jet.png")
}
function setup() {
  createCanvas(400,400);
  database = firebase.database()
}

function draw() {
  background("black");  
  drawSprites();
  game = new Game()
  game.getState()
  
}

function particles(){
  if(frameCount%5 ===0){
    var particle = createSprite(0,0,5,5)
    particle.shapeColor="white"
    var position = Math.round(random(1,2))
    if(position ===1){
      particle.x = -5
    particle.velocityX = 2
    }else{
      particle.x = 405
      particle.velocityX = -2
    }
    particle.y = random(5,300)

  }

}
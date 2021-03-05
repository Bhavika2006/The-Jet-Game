


function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background("black");  
  drawSprites();
  particles();
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
      particle.x = 805
      particle.velocityX = -2
    }
    particle.y = random(5,700)

  }

}
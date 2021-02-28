
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var jetImg,skyImg,trackImg;
var zoom = 1
function preload()
{
jetImg = loadImage("images/jet.png")	
trackImg = loadImage("images/tk.jpeg")	
skyImg = loadImage("images/sky.jpeg")	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	track = createSprite(30,windowHeight/4+100,windowWidth,windowHeight)
	track.addImage(trackImg);
	track.scale = 1.5
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  translate(windowWidth/2,windowHeight/4)
  scale(zoom)
  zoom += 0.05
 
  if(zoom>2){
	  zoom = 1	
  }
  drawSprites();
 
}




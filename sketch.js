
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ballSprite, ballBody, holder1, holder2, holder3;
var engine, world;

function setup() {
	createCanvas(1420, 600);

	ground = new Floor(710,570,1420,20);

	//ballSprite = createSprite()

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();

  text(mouseX + "," + mouseY,20,20);
  
  drawSprites();
 
}




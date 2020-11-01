const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground

function preload(){
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	//Creating Bodies Here.
	ground = new Ground(width/2, 380, width, 10)
	dustbin = new Dustbin(800,310,120,130)
	leftSide = new Sides(755,320,20,100)
	rightSide = new Sides(845,320,20,100)
	paper = new Paper(100,370,40) 

	keyPressed();
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(220);
  text(mouseX+" , "+mouseY,100,100);  
  
  leftSide.display();
  rightSide.display();
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:80,y:-80})
	}
}
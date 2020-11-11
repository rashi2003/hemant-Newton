
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

var stand
var bob1, bob2, bob3, bob4, bob5
function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

//ground//
  stand = new Stand(400,100,300,40);


  sling1= new Suspender(bob1.body,stand.body,-50*2,0);
  sling2= new Suspender(bob2.body,stand.body,-25*2,0);
  sling3= new Suspender(bob3.body,stand.body,-0*2,0);
  sling4= new Suspender(bob4.body,stand.body,25*2,0);
  sling5= new Suspender(bob5.body,stand.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("Black");

  rectMode(CENTER);

  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

stand.display()
  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === LEFT_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 





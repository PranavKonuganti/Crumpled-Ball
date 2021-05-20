
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObject,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObject=new Dustbin(1200,650);
	paperObject=new Paper(200,450,70);

	var render = Render.create({
		element: document.body,
		 engine: engine,
		 options: { width: 1600, height: 700, wireframes: false } });
	 Engine.run(engine);
	  Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObject.display();
  paperObject.display();

}

function keyPressed(){
	keyCode===UP_ARROW;
	Matter.Body.applyForce(paperObject.body,paperObject.body,{x:130,y:-145});
}

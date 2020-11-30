
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObj,dustbinObj;
var ground;



function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
    engine = Engine.create();
	world = engine.world;

  paperObj = new Paper(300,300,60);
  ground = new Ground(800,485,1600,20);
  dustbinObj=new Dustbin(1200,465);

  var render = Render.create({
  element: document.body,
  engine: engine,
  options:{
  width: 1200,
  height: 700,
  wireframes: false

  }



  })



  keyPressed();
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  paperObj.display();
  ground.display();
  dustbinObj.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW ){
Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});

}



}



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var Slingshot;
var ball;


function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);

  ground1 = new ground(570,height-30,450,20);
  box1 = new box(430,height-60,70,30,"yellow");
  box2 = new box(500,height-60,70,30,"yellow");
  box3 = new box(570,height-60,70,30,"yellow");
  box4 = new box(640,height-60,70,30,"yellow");
  box5 = new box(710,height-60,70,30,"yellow");
  box6 = new box(465,height-90,70,30,"cyan");
  box7 = new box(535,height-90,70,30,"cyan");
  box8 = new box(605,height-90,70,30,"cyan");
  box9 = new box(675,height-90,70,30,"cyan");
  box10 = new box(500,height-120,70,30,"pink");
  box11 = new box(570,height-120,70,30,"pink");
  box12 = new box(640,height-120,70,30,"pink");
  box13= new box(535,height-150,70,30,"yellow");
  box14 = new box(605,height-150,70,30,"yellow");
  box15 = new box(570,height-180,70,30,"cyan");

  ball = new Polygon(100,height-60,25,25);

  slingshot = new pull(ball.body,{x:100,y:height-60});
  
  Engine.run(engine);

}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  ground1.display();
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display();
  box6.display(); 
  box7.display(); 
  box8.display();
  box9.display();
  box10.display(); 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  slingshot.display();
  
  ball.display();
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(ball.body,{x:100,y:height-60});
    slingshot.attach(ball.body);
  }
}

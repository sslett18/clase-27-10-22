const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var canvas,angle,ground,cannon;

let engine;
let world;

var tower;



function preload(){

  backgroundImg=loadImage("./assets/background.gif");
  towerImage=loadImage("./assets/tower.png");

}


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle=-PI/4;
  

tower=new Tower(150,350,160,310);
cannon=new Cannon(180,110,110,50,angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);

  tower.display();
 
}


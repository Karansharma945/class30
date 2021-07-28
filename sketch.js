const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var backgroundImage, melonImage, rabbitImage,cut_btn;
var rabbit;
function preload(){
  backgroundImage = loadImage("background.png")
  melonImage = loadImage("melon.png")
  rabbitImage = loadImage("Rabbit-01.png")

}





function setup() 

{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
   rabbit = createSprite(250,630,100,100)
   rabbit.addImage("Bunny",rabbitImage)
   rabbit.scale=0.2

  fruit_con = new Link(rope,fruit);
  cut_btn = createImg("cut_btn.png")
  cut_btn.position(220,30)
  cut_btn.size(50,50)
  cut_btn.mouseClicked(drop)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER)

  textSize(50)
  
}

function draw() 
{
  background(51);
  image(backgroundImage,width/2,height/2,500,700)
  rope.show();
  image(melonImage,fruit.position.x,fruit.position.y,90,90);
  Engine.update(engine);
  ground.show();
  drawSprites();
 
   
}
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null
}
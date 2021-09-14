const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,wall1,wall2;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(1000,650,2000,50)
  wall1 = new Base(150,400,300,200)
  wall2 = new Base(1200,400,300,200)

  bridge = new Bridge(20,{x:200,y:300})
  jointPoint = new Base(200,400,10,10)


   Matter.Composite.add(bridge.body,jointPoint);
   jointLink = new Link(bridge,jointPoint)
   Matter.Composite.add(bridge.body,wall2);
   jointLink2 = new Link(bridge,wall2)


    for(var i = 0; i <= 8; i++){
    var x = random(width/2 -200,width/2 +300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone)
  }
}

function draw() {
  background(51);
  Engine.update(engine);



  ground.display()
  wall1.display()
  wall2.display()
  bridge.display()

  
  for(var stone of stones){
    stone.display()
  }
}

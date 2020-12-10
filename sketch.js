const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground (500,400,400,10);
    box1 = new Box(550,50,50,50);
    box2 = new Box(550,50,50,50);
    box3 = new Box(550,50,50,50);
    box4 = new Box(550,50,50,50);
    box5 = new Box(550,50,50,50);
    box6 = new Box(550,50,50,50);

    box7 = new Box(450,50,50,50);
    box8 = new Box(450,50,50,50);
    box9 = new Box(450,50,50,50);
    box10 = new Box(450,50,50,50);
    box11 = new Box(450,50,50,50);
    box12 = new Box(450,50,50,50);

    box13 = new Box(650,50,50,50);
    box14 = new Box(650,50,50,50);
    box15 = new Box(650,50,50,50);
    box16 = new Box(650,50,50,50);
    box17 = new Box(650,50,50,50);
    box18 = new Box(650,50,50,50);

    box19 = new Box(350,50,50,50);
    box20 = new Box(350,50,50,50);
    box21 = new Box(350,50,50,50);
    box22 = new Box(350,50,50,50);
    box23 = new Box(350,50,50,50);
    box24 = new Box(350,50,50,50);
    hexagoon = new Hexagoon(100,100,10,10);
    roopie = new Roopie(hexagoon.body,{x:160,y:300});

}

function draw() {
  background("green");
  Engine.update(engine)
  platform1.display();
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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();  
  box22.display();  
  box23.display();  
  box24.display();  
  hexagoon.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagoon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  roopie.fly();
}
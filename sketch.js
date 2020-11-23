
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground,ground2,ground3;
var box1,box2,box3,box4,box5,box6
,box7,box8,box9,box10,box11,box12
,box13,box14,box15,box16,box17,box18,box19
,box20,box21,box22,box23,box24,box25;
var hexagon;
var point;
var score = 0

function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(430,550,350,10)
  ground2 = new Ground(800,400,270,10)
  ground3 = new Ground(500,580,1000,20)
  box1 = new Box(310,530,30,40)
  box2 = new Box(350,530,30,40)
  box3 = new Box(390,530,30,40)
  box4 = new Box(430,530,30,40)
  box5 = new Box(470,530,30,40)
  box6 = new Box(510,530,30,40)
  box7 = new Box(550,530,30,40)

  box8 = new Box(350,485,30,40)
  box9 = new Box(390,485,30,40)
  box10 = new Box(430,485,30,40)
  box11 = new Box(470,485,30,40)
  box12 = new Box(510,485,30,40)

  box13 = new Box(390,440,30,40)
  box14 = new Box(430,440,30,40)
  box15 = new Box(470,440,30,40)

  box16 = new Box(430,395,30,40)
  
  box17 = new Box(720,380,30,40)
  box18 = new Box(760,380,30,40)
  box19 = new Box(800,380,30,40)
  box20 = new Box(840,380,30,40)
  box21 = new Box(880,380,30,40)

  box22 = new Box(760,335,30,40)
  box23 = new Box(800,335,30,40)
  box24 = new Box(840,335,30,40)

  box25 = new Box(800,290,30,40)
  
  hexagon = new Hexagon(125,250,50,50)

  point = new Point(hexagon.body,{x:125,y:250})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  textSize(30)
  text('Press Space To Get A Second Chance To Play',50,50)
  fill('black')
  textSize(35)
  text("score : " + score , 750 , 100)

  ground.display();
  ground2.display();
  ground3.display();
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
  box25.display();
  point.display();

  hexagon.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  point.fly();
}

function keyPressed(){
  if(keyCode === 32){

    Matter.Body.setPosition(hexagon.body,{x:125,y:250})
    point = new Point(hexagon.body,{x:125,y:250})

  }
}

async function getbackgroundImage()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13)

    if(hour <= 19 && hour >= 6){
       background1 = fill("white")
    }else{
        background1 = fill("black")
    }

}

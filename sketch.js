
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

var ground, tree,treeImg,ground2,box1,ground3,ground4,ground5,ground6,backgroundImg;
var   mango1,tree1;
var engine, world;
var score =0;
getTime();

function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	createCanvas(1200, 600);
	rectMode(CENTER);
  
  box1=new Box(500,475);
  box2=new Box(550,475);
  box3=new Box(600,475);
  box4=new Box(650,475);
  box5=new Box(700,475);
  box6=new Box(550,425);
  box7=new Box(600,425);
  box8=new Box(650,425);
  box9=new Box(600,375);

  box10=new Box(800,275);
  box11=new Box(850,275);
  box12=new Box(900,275);
  box13=new Box(950,275);
  box14=new Box(1000,275);
  box15=new Box(850,225);
  box16=new Box(900,225);
  box17=new Box(950,225);
  box18=new Box(900,175);

  stone1=new Stone(100,400,35,35);
  throw1 = new Throw(stone1.body,{x:100,y:400});

  ground2=createSprite(900, 300, 300,10);
  ground2.shapeColor=color("green")

  ground2 = Bodies.rectangle(900, 300, 300,10 , {isStatic:true} );
   World.add(world, ground2);

	groundSprite=createSprite(600, 500, 300,10);
	groundSprite.shapeColor=color("green")

	ground = Bodies.rectangle(600, 500, 300,10 , {isStatic:true} );
 	World.add(world, ground);

  
   ground3=createSprite(600, 570, 1200,10);
  ground3.shapeColor=color("green")

  ground3 = Bodies.rectangle(600, 570, 1200,10 , {isStatic:true} );
   World.add(world, ground3);

   ground4=createSprite(600, 30, 1200,10);
   ground4.shapeColor=color("green")
 
   ground4 = Bodies.rectangle(600, 30, 1200,10 , {isStatic:true} );
    World.add(world, ground4);

}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  if(backgroundImg){
    background(backgroundImg);
      }   
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
  box16.score();
  box17.score();
  box18.score();
  stone1.display();
  throw1.display();

  drawSprites();
  text("score:"+score,500,100) 

}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased() {
	throw1.fly()
	}

  function keyPressed(){

    if(keyCode==32){
    throw1.attach(stone1.body)
    }
    }

    async function  getTime(){

      var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
      var json1= await response.json(); 
      console.log(json1.datetime.slice(11,13));
      var hour=json1.datetime.slice(11,13);
      if(hour>=06 && hour<=19){
      bg="day.png"
      }else{
          bg = "night.jpg"
      }
      backgroundImg=loadImage(bg)
    }
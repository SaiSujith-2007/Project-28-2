
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy1, boyImage;
var roof, tree1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var stoneObj, launcherObj;
function preload(){
	boyImage=loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy1=createSprite(200,650,50,50);
boy1.addImage(boyImage);
boy1.scale=0.1;


roof=new ground(400,700,800,10);
mango1=new mangoes(700,400,50);
mango2=new mangoes(650,300,50);
mango3=new mangoes(500,420,50);
mango4=new mangoes(600,300,50);
mango5=new mangoes(650,450,50);
mango6=new mangoes(500,500,50);
mango7=new mangoes(650,400,50);
mango8=new mangoes(550,430,50);
stoneObj=new stone(200,300,80);
launcherObj=new launcher(stoneObj.body,{x:230, y:420});
tree1=new tree(600,500,500,500);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  roof.display();
  stoneObj.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
  detectcollision(stoneObj,mango8);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcherObj.fly();
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
    launcherObj.attach(stoneObj.body);
  }
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false);
  }
}
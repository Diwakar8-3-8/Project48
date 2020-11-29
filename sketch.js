const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;
//Declare all the variables
var bluro2;
var ast1, ast2, ast3, ast4;
var bomb1, bomb2, bomb3, bomb4;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8;
var border;

function setup() {
  createCanvas(1280,610);
  engine = Engine.create();
  world = engine.world;

  bluro2 = new Bluro();

  ast1 = new Ast(110,110,175,150);
  ast2 = new Ast(1160,110,175,150);
  ast3 = new Ast(110,500,175,150);
  ast4 = new Ast(1160,500,175,150);

  bomb1 = new Bomb(250,150,120,120);
  bomb2 = new Bomb(1020,150,120,120);
  bomb3 = new Bomb(250,500,120,120);
  bomb4 = new Bomb(1020,500,120,120);

  coin1 = new Coin(630,60,25);
  coin2 = new Coin(630,550,25);
  coin3 = new Coin(60,295,25);
  coin4 = new Coin(1220,295,25);
  coin5 = new Coin(660,60,25);
  coin6 = new Coin(660,550,25);
  coin7 = new Coin(60,325,25);
  coin8 = new Coin(1220,325,25);

  bd1 = new Borders(640,20,1240,10);
  bd2 = new Borders(640,590,1240,10);
  bd3 = new Borders(20,305,10,580);
  bd4 = new Borders(1260,305,10,580);
  
  Engine.run(engine);
}


function draw() {
  background("#003b59"); 

  ast1.display();
  ast2.display();
  ast3.display();
  ast4.display();

  bomb1.display();
  bomb2.display();
  bomb3.display();
  bomb4.display();

  coin1.display();
  coin2.display();
  coin3.display();
  coin4.display();
  coin5.display();
  coin6.display();
  coin7.display();
  coin8.display();

  bluro2.display();

  bd1.display();
  bd2.display();
  bd3.display();
  bd4.display();
  }

  function keyPressed(){
    if(keyCode===UP_ARROW){
    bluro2.body.position.y -= 20;
    }

    if(keyCode===DOWN_ARROW){
      bluro2.body.position.y += 20;
      }

    if(keyCode===RIGHT_ARROW){
      bluro2.body.position.x += 20;
      }

    if(keyCode===LEFT_ARROW){
      bluro2.body.position.x -= 20;
      }
  }


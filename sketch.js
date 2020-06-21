var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var ball;
var slingshot;

function setup() {
  createCanvas(500,500);
  block1 = new Block(200,200,10,20);
  block2 = new Block(180,260,10,20);
  block3 = new Block(220,260,10,20);
  block4 = new Block(160,320,10,20);
  block5 = new Block(200,320,10,20);
  block6 = new Block(240,320,10,20);
  block7 = new Block(140,380,10,20);
  block8 = new Block(180,380,10,20);
  block9 = new Block(220,380,10,20);
  block10 = new Block(240,380,10,20);
  ball= new Ball(50,100,20,20);
  slingshot = new Slingshot(ball.body,{x:50, y:100});
  


}

function draw() {
  background("white"); 

if(ball.isTouching(Block)){
Block.visible=false;

}

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  ball.display();
  
  slingshot.display();
   
  drawSprites();
}


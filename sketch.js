var trex;
var trexImg;
var edge;
var groundImg;

function preload()
{
 trexImg=loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImg=loadImage("ground2.png");
}

function setup()
{
  createCanvas(600,200);

  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trexImg);
  trex.scale=0.5;
  trex.x=50;

  ground=createSprite(200,180,400,20);
  ground.addImage("ground",groundImg);
  ground.x=ground.width/2;

  edge=createEdgeSprites();
}


function draw()
{
  background(180);

  console.log(trex.y);

  ground.velocityX=-2;

  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }

  if(keyDown("space"))
  {
    trex.velocityY=-10;
  }

  trex.velocityY=trex.velocityY+0.5;

  trex.collide(ground);

  drawSprites();

}
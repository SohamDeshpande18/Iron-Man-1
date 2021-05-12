
var bg, backgroundImg,ironman,imImage;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  imImage = loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;

  ironman = createSprite(500,300,20,20);
  ironman.addImage(imImage);
  ironman.scale = 0.25
}

function draw() {
  
  if(keyDown("up")){
    ironman.velocityY = -10;
  }

  if(keyDown("left")){
    ironman.x = ironman.x -5;
  }

  if(keyDown("right")){
    ironman.x = ironman.x +5;
  }
 
  ironman.velocityY = ironman.velocityY + 0.5;
    
    drawSprites();
   
}


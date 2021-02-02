
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground , invisibleGround;
var FOOD ;
var banana , bananaGroup ;
var OBSTACLES , obstaclesGroup;
var survivalTime =0;

function preload(){
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500) ;
ground = createSprite(500,330,1200,20);
ground.x = ground.width /2;
ground.velocityX = -4;
monkey=createSprite(50,280,20,20);
monkey.addAnimation("running" , monkey_running);
monkey.scale= 0.17;
  
bananaGroup = createGroup();
obstaclesGroup = createGroup();
  
invisibleGround = createSprite(200,340,400,10);
invisibleGround.visible = false;
  
      
}



function draw() {
  
  background("lightgreen")
if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);  

  if(keyDown("space")&& monkey.y >= 200) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY =monkey.velocityY + 0.9;              stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " +survivalTime ,100,50)  
  FOOD();
OBSTACLES();
    
  
  
  
  
drawSprites() ;
}
 
function FOOD(){
if(World.frameCount%80===0){ 
  var banana =createSprite(400,200,20,20) ;
  banana.scale= 0.2;
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage) 
  banana.velocityX= -3;
  banana.setlifetimeEach = -1;
  bananaGroup.add(banana);
}  
}

function OBSTACLES(){
if(World.frameCount%300===0){ 
  var obstacles =createSprite(500,300,20,20) ;
  obstacles.scale= 0.2;
  obstacles.velocityX=-2;
  obstacles.addImage(obstaceImage) 
  obstacles.setlifetimeEach = -1;
  obstaclesGroup.add(obstacles);  
}
}



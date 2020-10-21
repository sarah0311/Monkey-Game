var monkey , monkey_running;
var ground;
var banana ,bananaImage;
var obstacle, obstacleImage;
var bananaGroup, obstacleGroup
var score;
var survivalTime = 0;

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(60,330,40,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.11;
  
  ground = createSprite(200,365,1000,10);
  ground.velocityX = -4;
  ground.shapeColor = "green";
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background("lightblue");
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  //console.log(ground.x);
  
  if(keyWentDown("space")){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 120, 50);
  
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(450,200,40,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 150
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 100 === 0){
   obstacle = createSprite(600,340,10,40);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale = 0.12;
   obstacle.lifetime = 130;
    
   obstacleGroup.add(obstacle);
  }
}
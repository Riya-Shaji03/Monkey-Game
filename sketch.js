
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score 
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,10,10)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  createCanvas (900,400)
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score :" + score, 500, 50)  
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime  = Math.ceil(frameCount/frameRate())
  text("Survival Time :" + survivalTime, 100, 50 ) 
  
  
  if(keyDown("space") && monkey.y>=100){
    monkey.velocityY = -12
  }
  
  
  
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  
  if (ground.x < 180){
      ground.x = ground.width/2;
    }
  
  food()
  createObstacles();
  
  drawSprites();
  
}


function food(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(600,100,10,10)  
    banana.y = Math.round(random(120,200))
    banana.scale = 0.1
    banana.addImage(bananaImage)
    banana.velocityX = -10
    banana.lifetime = 65
    
    
   FoodGroup.add(banana) 
  }
  
}

function createObstacles(){
  
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,327,10,10)
    obstacle.scale = 0.1
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -10
    obstacle.lifetime = 65
    
    
    obstacleGroup.add(obstacle)
  }
}



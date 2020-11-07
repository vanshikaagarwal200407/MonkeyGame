
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
    obstacleImage=loadImage("obstacle.png");  
}



function setup() {
  createCanvas(700,500)
monkey=createSprite(70,450,20,50);
  monkey.addAnimation("abcd",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(200,490,1400,20)
  ground.velocityX=-3;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
 score = 0;
  
}


function draw() {
background("lightGreen");
  
   text("survival time: "+ score, 500,50);
   score = score + Math.round(getFrameRate()/60)
     
  monkey.collide(ground);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
 if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  spawnBanana()
    spawnObtacles()
  
drawSprites(); 
}

function spawnBanana()
{
   if (frameCount % 80 === 0) {
      banana = createSprite(700,120,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 400;
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
}

function spawnObtacles()
{
  if(frameCount%300===0){
    obstacle=createSprite(700,550,40,10)
   obstacle.y=Math.round(random(320,430))
    obstacle.addImage(obstacleImage)
     obstacle.velocityX = -(6 + score/100);
    obstacle.scale=0.3;
    
    obstacle.lifetime = 300;
    
     obstacleGroup.add(obstacle);
  }
}





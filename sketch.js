var gameState = "start";
var startState,clone, bgImage , bg, ghost,turtleImg,enemyImg,enemy,kale,kaleImg;

function preload(){
 bgImage = loadImage("images.png")
 turtleImg = loadImage("turtle.png")
 enemyImg = loadImage("enemy1.png")
 kaleImg = loadImage("kale.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  startState = new StateChange();
  
  bg = createSprite(windowWidth/2,windowHeight/2);
  bg.addImage("infinite bg", bgImage);
  bg.scale = 8;

  clone = createSprite(100,windowHeight/2 - 100)
  clone.shapeColor = "blue"
  clone.scale = 0.35
  clone.visible = false;
  clone.addImage( turtleImg);
  //clone.debug = true;
  clone.setCollider("rectangle", 0, 0, 150,170)

  kale = createSprite(windowWidth-100,windowHeight/2)
  kale.addImage(kaleImg);
  kale.visible = false;
  kale.scale = 0.35


  enemyGroup = new Group();
  
}

function draw() {
  background(0);  
  drawSprites();
  
  if(gameState === "start"){
    startState.display();
  }
  if(gameState == "play"){
    clone.visible = true;
    bg.velocityX = -3;
    kale.visible = true;
    createEnemyLevel1()
    
    //infinite bg
    if(bg.x < windowWidth/2-100){
      bg.x = windowWidth/2 ;
    }

   //player control
   if(keyIsDown(UP_ARROW)) {
    clone.y = clone.y  -3.75
   } 
   if(keyIsDown(DOWN_ARROW)) {
    clone.y = clone.y  +3.75
   }
   if(keyIsDown(LEFT_ARROW)) {
    clone.x = clone.x  -3.75
   }
   if(keyIsDown(RIGHT_ARROW)) {
    clone.x = clone.x  +3.75
   }

   //Resetting the clone to it's initial position
   if(enemyGroup.isTouching(clone)) {
    clone.x = 100;
    clone.y = windowHeight/2 - 100;
   }

  }
}

//NPC
function createEnemyLevel1(){
  if(frameCount % 70 == 0){
    enemy = createSprite(random(windowWidth/2 -400 , windowWidth/2 + 600),windowHeight/2-300)
    enemy.addImage(enemyImg)
    enemy.scale = 0.45
    enemy.velocityY = 5;
    enemy.lifetime = windowHeight/5;
    //enemy.debug = true;
    enemyGroup.add(enemy);
  }
} 
var  tower,towerImg;
var  ghost,ghostImg;
var  door,doorImg;
var  climber,climberImg;
var  invisibleBar,invisibleBarGroup;
var  doorGroup,climberGroup;
var  gameState = "PLAY";
var  sound,sound1;




function preload(){
  
    towerImg = loadImage("tower.png");
    ghostImg = loadImage("ghost-standing.png");
    doorImg  = loadImage("door.png");
  climberImg = loadImage("climber.png");
  sound1     = loadSound("spooky.wav");
}


function setup(){
  createCanvas(600,800);
  
    tower = createSprite(300,400);
    tower.addImage("tower",towerImg);
    tower.velocityY = 3;
  
    ghost = createSprite(300,400);
    ghost.addImage("ghost",ghostImg);
    ghost.scale = 0.5;
    ghost.velocityY = 3   
  //ghost.debug = true 
  ghost.setCollider("circle",0,0,)
  
    doorGroup = new Group();
    climberGroup = new Group();
  invisibleBarGroup = new Group();
  
  
}


function draw(){
   background(225);
  
 // sound1.loop();
  
   drawSprites();
  
   
   if(tower.y > 600){
  
   tower.y = height/2;
}
 
  
  if(gameState === "PLAY"){
  
   if(keyDown("space")){
   
   ghost.velocityY = -5;                                     }
  
  ghost.velocityY = ghost.velocityY +1;
  
  
  if(keyDown("LEFT_ARROW")){
    
    ghost.velocityX = -2
    
}
  
  
  
  if(keyDown("RIGHT_ARROW")){
    
    ghost.velocityX = 2
}   
    if(frameCount % 150 === 0){
      
    spawnDoors();
}
    if(climberGroup.isTouching(ghost)){
       
    ghost.velocityY = 0;  
     
}
    if(invisibleBarGroup.isTouching(ghost)||ghost.y>800){
      
      gameState = "END";
    }
    
    
  }
    
    if(gameState === "END"){
    textSize(50);
    text("GAME OVER",200,400);
    
    ghost.destroy();
    doorGroup.destroyEach();
    climberGroup.destroyEach();
    invisibleBarGroup.destroyEach();
      



}
  
  ghost.depth = ghost.depth+1;                              
  
//   edges = createEdgeSprites();
//   ghost.collide(edges);
  
  
}


function spawnDoors(){

    door = createSprite(Math.round(random(100,500)),0,10,10);
    door.addImage("door",doorImg); 
    door.velocityY = 3;
    doorGroup.add(door);
   // door.lifetime = 67;
  
  
    climber = createSprite(door.x,door.y+40,10,10);
    climber.addImage("climber",climberImg);
    climber.velocityY = 3;
    climberGroup.add(climber);
    // climber.debug = true
  climber.setCollider("rectangle",1,-3,100,1)
  
    invisibleBar = createSprite(climber.x,climber.y+10,100,10)
    invisibleBar.debug = true;
    invisibleBar.velocityY = 3;
    invisibleBarGroup.add(invisibleBar);
    invisibleBar.visible = false;
}








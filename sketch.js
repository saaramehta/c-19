var tower,towerImage
 var climber,climberImage
 var ghost,ghostImage 
 var door , doorImage
var gameState="play"

function preload(){
 towerImage= loadImage("tower.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  doorImage=loadImage("door.png")
}
function setup (){
 createCanvas(600,600)
tower=createSprite(300,300)
  tower.addImage(towerImage)
    tower.velocityY=1
  climbersGroup=new Group()
  doorsGroup=new Group ()
  ghost=createSprite(200,200)
  ghost.addImage(ghostImage)
  ghost.scale=0.5

}
function draw () {
  background("black")
  if(gameState==="play"){
    
  
  if(tower.y>400){
    tower.y=300
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
   }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
   }
  if(keyDown("space")){
    ghost.velocityY=-5 
   }
  ghost.velocityY=ghost.velocityY+0.8
  
  if(climbersGroup.isTouching(ghost)||ghost.y>600 ){ 
    ghost.destroy()
    gameState="end"
  }
  
  spawnDoors()
  drawSprites() 
  }
  if(gameState==="end"){
    text("gameover",230,250)
  }
  
}
function spawnDoors (){
  if(frameCount%240===0){
    
  
  door=createSprite(200,-50)
  door.addImage(doorImage)
    door.x=Math.round(random(120,400))
  door.velocityY=1
    door.lifetime=800
    doorsGroup.add(door)
    
    climber=createSprite(200,10)
       climber.addImage(climberImage)  
    climber.x=door.x
    climber.velocityY=1
    climber.lifetime=800
    climbersGroup.add(climber)
    ghost.depth=door.depth
    ghost.depth+=1
}
}
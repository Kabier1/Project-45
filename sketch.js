var bgImg, bg
var alien
var ast
var invGround

function preload(){
bgImg = loadImage("assets/bg.png")


}

function setup(){

  createCanvas(windowWidth - 20, windowHeight - 20)
//background image
bg = createSprite(165,485,1,1);
 bg.addImage(bgImg);
bg.scale = 1.5
bg.x = bg.width/2
bg.velocityX = -10

ast = createSprite(windowWidth - 1100, 700 , 50, 50)
ast.shapeColor = "black"

//creating an invisible ground
invGround = createSprite(200,700,400,20)
// invGround.visible = false




}

function draw() {
  
  background("blue");
    
 if (bg.x < 0) {
   bg.x = bg.width/2
 }

 //jump the astronaut
 if (keyDown("Space")) {
  ast.velocityY = -10
 }
 
  ast.velocityY=ast.velocityY+ 0.7

   drawSprites()   
}





  

var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(300, 200, 50, 80);
  fixedRect.shapeColor = "olive";
  fixedRect1 = createSprite(100,200,50,30);
  fixedRect1.shapeColor = "gold";
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "magenta";
  
}

function draw() {
  background("silver");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
 if(IsTouching(fixedRect1,movingRect)){
  movingRect.shapeColor="red";
  fixedRect1.shapeColor="red";
 }else if(IsTouching(fixedRect,movingRect)){
   fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
 } else {
  movingRect.shapeColor="magenta";
  fixedRect.shapeColor = "olive";
  fixedRect1.shapeColor="gold";
 }
 

  drawSprites();
}


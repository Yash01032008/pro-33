var back , b1
function prelod(){
  back=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
   b1= createSprite(400, 200, 800, 400);
   b1.addImage("b1",back)
}

function draw() {
  background("snow3.jpg");  
  drawSprites();
}
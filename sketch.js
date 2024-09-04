function setup() {
  createCanvas(600, 600);
   background("white");
}
2
function draw() {
  stroke("pink");
  fill("black");
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,20,30);
  }
}

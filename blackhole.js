let circleSize;
let lineWidth;

function setup(){
  createCanvas(600,600)
  background(0);
} 

function draw(){
  circleSize = random(200, 300)
  lineWidth = random(150,250)
  
  ellipseMode(CENTER)
  strokeWeight(lineWidth)
  stroke(2, 247, 247, 20)
  fill(255, 51, 204, 25)
  circle(300, 300, circleSize)
}
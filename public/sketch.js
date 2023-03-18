window.bg_options = [
  {
    name:"Black",
    hex_code:["#000000"]
  },
  {
    name: "White",
    hex_code:["#ffffff"]
  },
  {
    name: "Random",
    hex_code: ["#66161c", "#242F1F", "#000437", "#ee11ee", "#ffff00","#00DADA"]
  }
];

window.selectedBG = window.bg_options[Math.floor(fxrand() * window.bg_options.length)];

console.log(window.selectedBG);

let circleSize;
let lineWidth;

function setup(){
  createCanvas(600,600)

  background(window.selectedBG.hex_code[Math.floor(fxrand() * window.selectedBG.hex_code.length)]);
  randomSeed(fxhash);
} 

function draw(){
  circleSize = 200 + fxrand() * 100
  lineWidth = 150 + fxrand() * 100
  ellipseMode(CENTER)
  strokeWeight(lineWidth)
  stroke(2, 247, 247, 20)
  fill(255, 51, 204, 25)
  circle(300, 300, circleSize)
}
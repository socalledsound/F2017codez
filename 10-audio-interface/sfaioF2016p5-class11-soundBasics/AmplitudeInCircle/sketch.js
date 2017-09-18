var mic;

function setup() {
  createCanvas(800, 600);
  mic = new p5.AudioIn()
  mic.start();
}
function draw(){
  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*10, 0, height), 100, 100);
}

// function draw() {
//   background(0);
//   micLevel = mic.getLevel();
//   ellipse(300, 200, 100 * micLevel, 100 * micLevel);
// }


// function draw() {
//   background(0);
//   micLevel = mic.getLevel();
//   // micLevel
//   ellipse(400, 300, 400, 1200 * micLevel);
// }
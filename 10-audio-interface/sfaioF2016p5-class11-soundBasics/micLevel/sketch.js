var mic;
function setup(){
  createCanvas(600,600);
  mic = new p5.AudioIn()
  mic.start();
}
function draw(){
  background(0);
  micLevel = mic.getLevel();
  micLevel=map(micLevel,0,1,0,100);
  ellipse(300,300, 600,10*micLevel);
}
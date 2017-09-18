var video;
var vScale=16;
var numParticles;
var particles = [];

var slider;


function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video=createCapture(VIDEO);
  video.size(width/vScale,height/vScale);
  for (var i=0;i<numParticles;i++) {
    particles[i] = new Particle(random(width),random(height));
  }
  
  slider = createSlider(0,255,127);
  
  background(51);
  
  
}

function draw() {
  
  video.loadPixels();
console.log(video.pixels);
  for (var i=0;i <particles.length;i++){
    particles[i].update();
    particles[i].show();
  }
  
}
var still;
var vScale=16;
var numParticles=100;
var particles = [];

var slider;

function preload() {
  img = loadImage("big-0.png");
}


function setup() {
  createCanvas(431,282);
  //pixelDensity(1);
  
  image(img,0,0);

  for (var i=0;i<numParticles;i++) {
    particles[i] = new Particle(random(width),random(height));
  }
  
  slider = createSlider(0,255,127);
  
  background(51);
  
  
}

function draw() {
  
  img.loadPixels();
  for (var i=0;i <particles.length;i++){
    particles[i].update();
    particles[i].show();
  }
  
}
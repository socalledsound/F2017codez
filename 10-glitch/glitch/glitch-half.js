var img;
var lastPixelGlitched = false; 


function preload(){
  img = loadImage("soundMusicImg/tmp-0.gif");  
}

function setup() {
  createCanvas(500, 400);
  noLoop();
}

function draw() {
  
  background(0);
  image(img, 0, 0, 500, 400);
  loadPixels();

  for (var i = 0; i < pixels.length; i++) {
    var chooser = random(100);


    if (chooser < 10 || (lastPixelGlitched)) {

      if(i%5) {
        pixels[i+4]=125;
      }
      else{
      pixels[i] = pixels[i]/random(2,5);
      lastPixelGlitched = true;
      }

    }
    
  }
  updatePixels();
}
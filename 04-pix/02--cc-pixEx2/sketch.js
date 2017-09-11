var vid;
function setup() {
  createCanvas(320, 240);
  vid = createVideo("ihop.mp4");
  vid.loop();
  vid.hide();
  vid.volume(0);
  noStroke();
  rectMode(CENTER);
}
function draw() {
  background(50);
  fill(255);
  vid.loadPixels();
  for (var y = 0; y < height; y += 10) {
    for (var x = 0; x < width; x += 5) {
      
      var offset = ((y*width)+x)*4;
      
      //fill(color(random(255),random(255),random(255)));
      rect(x, y, 10,
        10 * (vid.pixels[offset+1]/255));
    }
  }
}
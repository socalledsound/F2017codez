var vid;
function setup() {
  createCanvas(640, 480);
  vid = createVideo("ihop.mp4");
  vid.loop();
  vid.hide();
  vid.volume(0);
  noStroke();
  rectMode(CENTER);
}
function draw() {
  background(0);
  fill(150);
  fill(color(0,0,170));
  vid.loadPixels();
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 10) {
      
      var offset = (((y/2)*width)+(x/2))*4;
      
      //fill(color(random(255),random(255),random(255)));
      //fill(random(255));
      rect(x, y*2, 5,
        40 * (vid.pixels[offset+1]/255));
    }
  }
}
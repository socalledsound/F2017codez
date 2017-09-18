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
  background(50);
  fill(255);
  vid.loadPixels();
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 10) {
      var offset = ((y*320)+x)*4;
      //fill(color(random(255)));
      fill(200);
      rect(x, y*random(2), 20,
        30 * (vid.pixels[offset+1]/255));
    }
  }
}
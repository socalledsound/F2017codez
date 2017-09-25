var vid;
var vid2;
var playing = false;
var completion;
function setup() {
  createCanvas(400, 100);
  vid = createVideo("fuckCNN.mp4");
  vid.size(400, 300);
}
function draw() {
  background(50);
  completion = vid.time() / vid.duration();
  ellipse(completion*width, 50, 20, 20);
}
function mousePressed() {
  if (!playing) {
    vid.play();
    vid.time((mouseX/width) * vid.duration());
    playing = true;
  }
  else {
    vid.pause();
    playing = false;
  }
}
var vid;
var playing = false;
var completion;
function setup() {
  createCanvas(400, 100);
  vid = createVideo("ihop.mp4");
  vid.size(400, 300);
  vid.play();
}
function draw() {
  background(vid.volume()*255);
  if (frameCount % 120 == 0) {
    vid.time(random() * vid.duration() - 2);
    vid.volume(random());
  }
  ellipse((vid.time()/vid.duration())*width,
    50, 20, 20);
}
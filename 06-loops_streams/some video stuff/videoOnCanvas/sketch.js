var vid;
function setup() {
  createCanvas(800, 800);
  vid = createVideo("fuckCNN.mp4");
  vid.loop();
  vid.hide();
}

function draw() {
  
  image(vid,20,20);
  
   textSize(120);
   fill(color('red'));
   text("FUCK CNN",60,300);
}
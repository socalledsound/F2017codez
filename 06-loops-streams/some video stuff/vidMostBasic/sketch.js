var vid;

function setup() {
  createCanvas(600, 600);
  vid = createVideo("fuckCNN.mp4");
  vid.loop();
  //vid.hide();
  // button=createButton()

 
}

function draw() {
  image(vid,0,0);
}
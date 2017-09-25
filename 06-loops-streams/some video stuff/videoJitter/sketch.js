var vid1;
var vid2;
var x,y;
function setup() {
  
  createCanvas(1000, 1000);
  
  vid1 = createVideo("fuckCNN.mp4");
  vid1.loop();
  vid1.hide();

  vid2 = createVideo("ihop.mp4");
  vid2.loop();
  vid2.hide();
 
}

function draw() {
  background(255);
  x=x+random(-1,1);
  y=random(100,200);
  image(vid1,x,y);
  
  
  
  
}
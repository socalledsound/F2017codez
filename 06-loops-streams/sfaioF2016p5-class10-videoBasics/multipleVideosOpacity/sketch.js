var vid1;
var vid2;
var x,y;
var videos=[];
function setup() {
  
  createCanvas(1000, 1000);
  
  vid1 = createVideo("fuckCNN.mp4");
  vid1.loop();
  vid1.hide();

  vid2 = createVideo("ihop.mp4");
  vid2.loop();
  vid2.hide();
 
  
  videos=[vid1,vid2];
 
}

function draw() {
  image(vid1,0,0,600,500);
  tint(200,random(100,200));
  image(vid2,0,0,600,500);
  
  
  
}
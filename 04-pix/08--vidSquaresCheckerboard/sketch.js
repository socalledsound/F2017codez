var vid1;
var vid2;
var vids;
var scaler = 20;
function setup() {
  createCanvas(800, 800);
  vid1 = createVideo("ihop.mp4");
  vid1.loop();
  vid1.hide();
  vid1.volume(0);
  
  vid2 = createVideo("fuckCNN.mp4");
  vid2.loop();
  vid2.hide();
  vid2.volume(0);
  
  vids=[vid1,vid2];
 
  noStroke();
}

function draw() {
  background(0);


  for (var y=0; y<40;y++) {
  for ( var x=0; x<40;x++) {
    if ((x+y/2)%2) {
  image(vid1,scaler*x,scaler*y,scaler,scaler);
    }
    else {
      image(vid2,(scaler*x),scaler*y,scaler,scaler);
    }
  }
}

 
}

function isEven(n) {
  return n % 2 == 0;

}


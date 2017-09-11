var vid1;
var vid2;
var vids;
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


  for (var y=0; y<10;y++) {
  for ( var x=0; x<10;x++) {
  image(random(vids),80*x,80*y,80,80);
}
}



  
}
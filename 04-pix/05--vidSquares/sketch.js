var vid1;
var vid2;
var vids;
function setup() {
  createCanvas(300, 240);
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
  //vid.loadPixels();

//   image(vid,0,0,100,80);
//   image(vid,100,0,100,80);
//   image(vid,200,0,100,80);
  
  
//   for ( var x=0; x<3;x++) {
//   image(vid,100*x,0,100,80);
// }


//   for (var y=0; y<3;y++) {
//   for ( var x=0; x<3;x++) {
//   image(vid,100*x,80*y,100,80);
// }
// }

  for (var y=0; y<8;y++) {
  for ( var x=0; x<10;x++) {
  image(random(vids),30*x,30*y,30,30);
}
}



  
}
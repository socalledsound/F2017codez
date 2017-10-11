var vid1;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  vid1 = createVideo("ihop.mp4");
  vid1.loop();
  vid1.hide();
  vid1.volume(0);
 
  noStroke();
  fill(0);
}


function draw() {

  background(255);
  //image(vid1,0,0,400,400);
  vid1.loadPixels();
   var stepSize = round(constrain(mouseX/50, 2, 40));
  // var stepSize=round(random(6,10));
  //var stepSize = 5;
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var index = (y * width + x)*4;
      var darkness = (255 - vid1.pixels[index]) / 255;
      var radius = stepSize+10 * darkness;
      fill(vid1.pixels[index]*random(1,2),vid1.pixels[index+1]*random(1,2),vid1.pixels[index+2]*random(1,2),random(200));
      //rect(x*14+random(2*y), y*random(10,14)+random(2*x), radius*random(2,4), radius*random(2,8));
      rect(x*2, y*2, random(15,20), random(15,20));
    }
  }

}
/*
https://vimeo.com/channels/learningp5js/139013336
*/


function setup() {
  createCanvas(600, 400);
  frameRate(2);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  var x = 0;
  while (x <= width) {
    fill(0, 200, 255,random(255));
    ellipse(x*random(2), random(200), random(400), random(400));
    x = x + 50;
  }
  
  for (x = 0; x <= width; x += 50) {
    fill(random(255), 0, 200);
    ellipse(x, 300, 25, 25);
  }
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;



function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);



// drawRectangle(200,200,100,150,[30,200,80]);


for (var i=0; i <10;i++) {

  new Rectangle(random(200),random(200),random(300),random(150),[30,200,80]);
}

move();
checkEdge();
drawBall();

}


function move() {
  // Add the current speed to the position.
  x = x + xspeed;
  y = y + yspeed;
}



function checkEdge() {

  // check Edges
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
}



function drawBall() {

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, y, 48, 48);

}



function drawRectangle(rectX,rectY,rectWidth,rectHeight, color) {

  fill(color);
  rect(rectX,rectY,rectWidth,rectHeight);

}


var Rectangle = function(rectX,rectY,rectWidth,rectHeight, color) {

  fill(color);
  rect(rectX,rectY,rectWidth,rectHeight);



}
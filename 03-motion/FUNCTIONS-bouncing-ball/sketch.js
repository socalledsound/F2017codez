// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;
var numRectangles = 8;
var rectangles = [];

function setup() {
  createCanvas(640, 360);


  for (var i=0; i<numRectangles; i++) {
    rectangles[i]=new SmarterRectangle();
  }

}

function draw() {
  background(51);


for (var i=0; i<rectangles.length;i++) {
  rectangles[i].drawRectangle();
}


// rectangles.forEach(function(rectangle) {
//   rectangle.drawRectangle();
// })


// drawRectangle(200,200,100,150,[30,200,80]);


// for (var i=0; i <10;i++) {

//   new Rectangle(random(200),random(200),random(300),random(150),[30,200,80]);
// }




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

    for (var i=0; i<rectangles.length;i++) {
      rectangles[i].randomize();
    }

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



var SmarterRectangle = function() {
    this.color = [random(255),random(255),random(255)];
    this.rectX=random(200);
    this.rectY=random(200);
    this.rectWidth=random(400);
    this.rectHeight=random(600);

  this.randomize = function() {
    this.color = [random(255),random(255),random(255)];
    this.rectX=random(200);
    this.rectY=random(200);
    this.rectWidth=random(400);
    this.rectHeight=random(600);
}


  this.drawRectangle = function() {
    fill(this.color);
    rect(this.rectX,this.rectY,this.rectWidth,this.rectHeight);

  }





}
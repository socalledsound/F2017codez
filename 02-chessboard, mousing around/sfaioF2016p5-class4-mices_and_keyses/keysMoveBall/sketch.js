
var x = 300;
var y = 300;

function setup() {
  createCanvas(600,600);
}

function draw() {
  
    background(150);
  fill(255,0,0);
  noStroke();
  ellipse(x,y,50,50);
  
}

function keyPressed() {
   if (keyCode == UP_ARROW) {
    y-= 10;
  } else if (keyCode == DOWN_ARROW) {
    y+=10;
  }  else if (keyCode == RIGHT_ARROW) {
    x+=10;
  }  else if (keyCode == LEFT_ARROW) {
    x-=10;
  }
  return false; // prevent default
}
  
  
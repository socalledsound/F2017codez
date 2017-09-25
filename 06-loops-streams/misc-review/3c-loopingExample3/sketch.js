// "For loops are cool." Part 3
var s = 40; // variable for ellipse size
var inc = 30; // variable for increment amount
// var offSet=0;
              // change both these variables to see how they affect the drawing
function setup() {
  // use p5 variables that link canvas size to the window size
  // change window size and hit refresh to see your sketch change
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  // turn off fill
  noFill();
}

function draw() {
  // offSet=offSet+1;
  background(255);
  // Nested for loop structure 
  // Iterating across the screen from 50 to width minus 50
  // Use the variable inc to set the increment value
  for(var x = 50; x <= width-50; x += inc){
    // Iterating from top down to height minus 50
    for (var y = 50; y <= height-50; y += inc){
      // draw ellipses instead of lines, use s to set width/height
      ellipse(x, y, s, s);
    }
  }
}
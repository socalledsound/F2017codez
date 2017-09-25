// "For loops are cool." Part 4
var s = 20; // variable for ellipse size
var inc = 50; // variable for increment amount
              // change both these variables to see how they affect the drawing
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);
  
  var count = 0; // create a variable called count
                 // we'll use it to count our iterations
  

  // Use the variable inc to set the increment value
  for(var x = 50; x <= width-50; x += inc){
    // Iterating from top down to height minus 50
    for (var y = 50; y <= height-50; y += inc){
      // set stroke value using our count variable
      stroke(count);
      // and/or set strokeWeight value using count and
      // scale it with multiplication
      // strokeWeight(count*0.2); 
      // draw ellipses instead of lines, use s to set width/height
      ellipse(x, y, s, s);
      // increment count by 1
      count++;
    }
  }
}
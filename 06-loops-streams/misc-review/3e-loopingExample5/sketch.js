// "For loops are cool." Part 5
var inc = 50; // variable for increment amount
              // change both these variables to see how they affect the drawing
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);

  // Use the variable inc to set the increment value
  for(var x = 50; x <= width-50; x += inc){
    // Iterating from top down to height minus 50
    for (var y = 50; y <= height-50; y += inc){
      for(var i = 0; i < 16; i+=4){
        line(x + i, y, x + i, y + 12);
      }
      line(x, y, x + 12, y + 12);
    }
  }
}
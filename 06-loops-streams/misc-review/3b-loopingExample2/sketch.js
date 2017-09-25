// "For loops are cool." Part 2
function setup() {
  // use p5 variables that link canvas size to the window size
  // change window size and hit refresh to see your sketch change
  createCanvas(windowWidth, windowHeight);
  // turn off fill
  noFill();
}

function draw() {
  background(255);
  // Nested for loop structure 
  // Iterating across the screen from 50 to width minus 50
  for(var x = 50; x <= width-50; x += 50){
    // Iterating from top down to height minus 50
    for (var y = 50; y <= height-50; y +=50){
      // draw lines to center 
      line(x, y, width/2, height/2);
    }
  }
}
// "For loops are cool." Part 1
var s = 100; // don't be lazy, use variables ;)
           // try changing this value to see how it affects the drawing
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
      line(x - s, y - s, x + s, y + s);
      line(x + s, y - s, x - s, y + s);
    }
  }
}
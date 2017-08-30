var x = 0; // our first variable!

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  x = 1; // set x equal to 1
  line(x, 0, x, height); // using x and the built in height variable

  x = x + 5; // set x equal to the value of x plus 5
  line(x, 0, x, height);

  x += 5; // use increment operator to add 5 to the value of x
  line(x, 0, x, height);

  x += 5; // add 5 to the value of x
  line(x, 0, x, height);
  
  x += 5; // add 5 to the value of x
  line(x, 0, x, height);
}
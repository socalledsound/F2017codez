/*
https://vimeo.com/channels/learningp5js/138935678
*/

var fillValue=fill(0);

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  

    rect(300, 200, 100, 100);
}


function mousePressed (){
    if (mouseX > 300 && mouseX < 400 && mouseY>200 && mouseY<300) {
    fillValue=fill(255, 0, 200);
  }
}
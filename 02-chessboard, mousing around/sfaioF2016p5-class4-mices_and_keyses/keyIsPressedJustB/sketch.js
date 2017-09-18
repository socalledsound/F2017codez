function setup() {
  createCanvas(500,500);
}

function draw() {
  
    if (keyIsPressed) {
    if (key == 'b' || key == 'B') {
      fill(0);
    }
  } else {
    fill(255);
  }
  rect(25, 25, 50, 50);
  
}


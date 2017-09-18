

function setup() {
  createCanvas(500,500);
}

function draw() {
  
    if (keyIsPressed) {
    if (key == 'r' || key == 'R') {
      fill(color('red'));
    }
    else if (key == 'b' || key == 'B') {
      fill(color('blue'));
    }
    else if (key == 'g' || key == 'G') {
      fill(color('green'));
    }    
  } 
  
  else {  
    fill(255);
      }
  
  rect(25, 25, 50, 50);
  
}


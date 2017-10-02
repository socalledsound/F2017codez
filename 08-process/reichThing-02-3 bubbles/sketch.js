var bubbles=[];
var numBubbles=3;



function setup() {
  createCanvas(1000, 900);
  frameRate(1);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble((((i+1)*250)+50),300,200);
  }
  
  
}

function draw() {
  for (var j = 0; j<numBubbles;j++) {
  bubbles[j].display();
  }
}


function Bubble(x,y,radius) {
  this.x = x;
  this.y = y;
  this.radius=radius;
  this.fillColor=color('grey');

  this.display = function() {
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);
  }

}

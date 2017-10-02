var bubbles=[];
var numBubbles=3;
var color1;

function setup() {
  color1=color('blue');
  createCanvas(1000, 800);
  //frameRate(9);
  for(var i=0; i<numBubbles;i++){
  bubbles[i] = new Bubble(240*(i+1),200,200,color1);
  
  }
  
}

function draw() {
  for(var i=0; i<numBubbles;i++){
  bubbles[i].display();
  bubbles[i].changeColorFunction();
  console.log(bubbles[i].x);
}

}


function Bubble(x,y,radius,inputColor) {
  this.x = x;
  this.y = y;
  this.radius=radius;
  //this.startColor=inputColor;
  this.changeColor=color(random(255),random(255),random(255));
  this.circleColor=inputColor;
  this.display = function() {
        stroke(255);
        fill(this.circleColor);
        ellipse(this.x, this.y, this.radius);
  }
  
  this.changeColorFunction = function() {
      this.circleColor=this.changeColor;
      //this.circleColor=color(random(255),random(255),random(255));
  }
}

var bubbles=[];
var numBubbles=3;


function setup() {
  createCanvas(1000, 900);
  frameRate(20);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble((((i+1)*250)+50),300,200);
  }
  
  
}

function draw() {
  background(255);
  for (var j = 0; j<numBubbles;j++) {
  bubbles[j].display();
  bubbles[j].blink();
  bubbles[j].updateRadius();
  console.log(bubbles[0].lifespan);
  }
}


function Bubble(x,y,radius) {
  this.x = x;
  this.y = y;
  this.radius=radius;
  this.fillColor=color(color(0,0,255,255));
  this.fillGrey=true;
  this.lifespan=255;

  this.radius=this.lifespan;

  this.display = function() {
       
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);
         if (this.lifespan >= 0){
        this.lifespan=this.lifespan-1;
      }
  }

  this.updateRadius = function() {
     this.radius=random(300);
  }

  this.blink = function() {
      if(this.fillGrey===true) {
        this.fillColor=color(255,0,0,this.lifespan);
        this.fillGrey=false;
      }
      else {
        this.fillColor=color(0,0,255,this.lifespan);
        this.fillGrey=true;
      }
  }
}

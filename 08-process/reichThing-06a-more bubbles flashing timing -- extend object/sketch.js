var bubbles=[];
var numBubbles=30;
currentMillis=0;


function setup() {
  createCanvas(1000, 900);      
  // frameRate(1);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble((((i+1)*50)+20),200,40,((i+1)*(0.62)*1000),color(random(255),random(255),random(255)));
  }
  
  
}

function draw() {
  
  currentMillis=millis();

  for (var j = 0; j<numBubbles;j++) {

    bubbles[j].display();

    if(currentMillis - bubbles[j].previousMillis > bubbles[j].interval) {
      console.log("trig");
        bubbles[j].blink();
        bubbles[j].previousMillis=currentMillis;
      }
    bubbles[j].fil  
  }


}


function Bubble(x,y,radius,interval,altColor) {
  this.x = x;
  this.y = y;
  this.radius=radius;
  this.startColor=color('grey');
  this.fillColor=this.startColor;
  this.altColor=altColor;
  //this.altColor=color('red');
  this.fillGrey=true;
  this.interval=interval;
  this.previousMillis=0;

  this.display = function() {
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);
  }

  this.blink = function() {
      if(this.fillGrey===true) {
        this.fillColor=this.altColor;
        this.fillGrey=false;
      }
      else {
        this.fillColor=this.startColor;
        this.fillGrey=true;
      }
  }
}

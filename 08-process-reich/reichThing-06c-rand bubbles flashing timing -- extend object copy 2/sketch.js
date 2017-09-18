var bubbles=[];
var numBubbles=3;
//var numBubbles=6;
currentMillis=0;


function setup() {
  createCanvas(1000, 900);      
   frameRate(9);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble(random(200,600),random(200,500),random(500),((i+1)*(0.062)*1000),color(random(255),random(255),random(255)));
  
       // bubbles[i] = new Bubble(500,400,(100*(6/(i+1))),0.1,color(random(255),random(255),random(255)));
  }
  
  
}

function draw() {
  background(255);
  currentMillis=millis();

  for (var j = 0; j<numBubbles;j++) {
    bubbles[j].radius=bubbles[j].radius*random(1.01);
    if (bubbles[j].radius < 30){bubbles[j].radius=300};
    bubbles[j].display();
    //console.log(bubbles[29].radius);
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
  this.startColor=color(random(255),random(255),random(255));
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


function scaleFunc() {

  sin
}

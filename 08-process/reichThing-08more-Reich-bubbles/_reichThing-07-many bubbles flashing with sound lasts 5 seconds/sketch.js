var bubbles=[];
var numBubbles=3;
var currentMillis=0;
var previousMillis1=0;
var previousMillis2=0;
var previousMillis3=0;
var interval1=1000;
var interval2=990;
var interval3=980;
var songLength=5000;


function setup() {
  createCanvas(1000, 900);      
  // frameRate(1);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble((((i+1)*250)+50),300,200,((i+1)*(0.98)*300),color(random(255),random(255),random(255)),(i+1)*100*1.32);
  }
  
  // var osc = new Tone.Oscillator(440, "sine").toMaster().start();
  
}

function draw() {
  
  currentMillis=millis();

  if (currentMillis > songLength) {
    
        bubbles[2].splice(j,1);
    
}

  for (var j = 0; j<bubbles.length;j++) {

    bubbles[j].display();

    if(currentMillis - bubbles[j].previousMillis > bubbles[j].interval) {
      // console.log("trig");
        bubbles[j].blink();
        bubbles[j].previousMillis=currentMillis;
      }
    // bubbles[j].fil  
  }


}


function Bubble(x,y,radius,interval,altColor,freqIn) {
  this.x = x;
  this.y = y;
  this.radius=radius;
  this.startColor=color('white');
  this.fillColor=this.startColor;
  this.altColor=altColor;
  //this.altColor=color('red');
  this.fillGrey=true;
  this.interval=interval;
  this.previousMillis=0;
  this.osc = new p5.Oscillator(); 
  this.osc.setType('sine');
  this.freq=freqIn;
  //this.amp=0.1;

  this.osc.freq(this.freq);
  this.osc.amp(0);
  this.osc.start();
 

  this.display = function() {
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);
  }

  this.blink = function() {
      if(this.fillGrey===true) {
        this.fillColor=this.altColor;
        this.fillGrey=false;
         this.osc.amp(0.3,0.1);
      }
      else {
        this.fillColor=this.startColor;
        this.fillGrey=true;
         this.osc.amp(0,0.4);
      }
  }
}

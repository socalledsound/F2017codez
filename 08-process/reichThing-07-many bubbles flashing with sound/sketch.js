var bubbles=[];
var numBubbles=3;
currentMillis=0;
previousMillis1=0;
previousMillis2=0;
previousMillis3=0;
interval1=1000;
interval2=900;
interval3=800;


function setup() {
  createCanvas(1000, 900);      
  // frameRate(1);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble((((i+1)*250)+50),300,200,((i+1)*(0.9)*1000),color(random(255),random(255),random(255)),(i+1)*200*1.32);
  }
  
  // var osc = new Tone.Oscillator(440, "sine").toMaster().start();
  
}

function draw() {
  
  currentMillis=millis();

  for (var j = 0; j<numBubbles;j++) {

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
  this.startColor=color('grey');
  this.fillColor=this.startColor;
  this.altColor=altColor;
  //this.altColor=color('red');
  this.fillGrey=true;
  this.interval=interval;
  this.previousMillis=0;
  this.osc = new p5.Oscillator(); 
  this.osc.setType('sine');
  this.freq=freqIn;
  this.amp=1;

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
         this.osc.amp(0.5,0.3);
      }
      else {
        this.fillColor=this.startColor;
        this.fillGrey=true;
         this.osc.amp(0,0.7);
      }
  }
}

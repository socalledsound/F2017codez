var bubbles=[];
var numBubbles=3;
currentMills=0;
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
      bubbles[i] = new Bubble((((i+1)*250)+50),300,200);
  }
  
  
}

function draw() {
  for (var j = 0; j<numBubbles;j++) {
  bubbles[j].display();

  }

  currentMills=millis();
  // console.log(currentMills);

  if (currentMills - previousMillis1 > interval1){
      bubbles[0].blink();
      previousMillis1=currentMills;
  }

    if (currentMills - previousMillis2 > interval2){
      bubbles[1].blink();
      previousMillis2=currentMills;
  }

    if (currentMills - previousMillis3 > interval3){
      bubbles[2].blink();
      previousMillis3=currentMills;
  }

}


function Bubble(x,y,radius) {
  this.x = x;
  this.y = y;
  this.radius=radius;
  this.fillColor=color('grey');
  this.fillGrey=true;

  this.display = function() {
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);
  }

  this.blink = function() {
      if(this.fillGrey===true) {
        this.fillColor=color('red');
        this.fillGrey=false;
      }
      else {
        this.fillColor=color('grey');
        this.fillGrey=true;
      }
  }
}

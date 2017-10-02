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
  for (var j = 0; j<bubbles.length;j++) {
  bubbles[j].display();
  bubbles[j].blink();
  bubbles[j].loseLife();

  if(bubbles[j].isDead===true){
      bubbles.splice(j,1);
  
    }
  //console.log(bubbles[0]);
  //console.log(bubbles[0].lifespan);
    var choice2=random(100);
    
    if (choice2 > 95) {
      bubbles[j].makeGrey();
    }

    }
  
    var choice=random(100);
    console.log(choice);
    if (choice > 99) {
      bubbles.push(new Bubble(random(800),random(600),random(500)));
    }




}


function Bubble(x,y,radius) {
  this.x = x;
  this.y = y;
  this.radius=radius;
  this.lifespan=255;
  this.fillColor=color(color(0,0,255,this.lifespan));
  this.fillGrey=true;
  this.isGrey=false;
  this.isDead=false;

  this.display = function() {
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);

  }

  this.loseLife = function() {
        this.lifespan=this.lifespan-10;
        if (this.lifespan < 0){
          this.isDead=true;
        }
  }

  this.makeGrey = function() {
    this.isGrey=true;
    this.fillColor=color(20,20,20,this.lifespan);
  }

  this.blink = function() {
      if(this.fillGrey===true) {
        if (this.isGrey===false) {
        this.fillColor=color(255,0,0,this.lifespan);
      }
        this.fillGrey=false;
      }
      else {
        if (this.isGrey===false) {
        this.fillColor=color(0,0,255,this.lifespan);
      }
        this.fillGrey=true;
      }
  }
}

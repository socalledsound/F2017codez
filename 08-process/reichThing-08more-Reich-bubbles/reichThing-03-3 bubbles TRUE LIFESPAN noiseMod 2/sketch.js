var bubbles=[];
var numBubbles=1;


function setup() {
  createCanvas(1200, 900);
  frameRate(20);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble(width/2,height/2,60);
  }
  
  
}

function draw() {
  background(255);
  for (var j = 0; j<bubbles.length;j++) {
    bubbles[j].reSize()
    bubbles[j].display();
    bubbles[j].blink();
    bubbles[j].loseLife();

    if(bubbles[j].lifespan<120){
      bubbles[j].makeGrey();
    }

    if(bubbles[j].isDead===true){
        bubbles.splice(j,1);
    
      }
    //console.log(bubbles[0]);
    //console.log(bubbles[0].lifespan);
      //     var choice2=random(100);
      // if (choice2 > 95) {
      //   bubbles[j].makeGrey();
      // }

    }
  
    var choice=random(1000);
    // console.log(choice);
    if (choice > 995) {
      bubbles.push(new Bubble(random(300,800),random(300,600),random(20)));
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
  this.coinVal=1;
  this.sizeCoinChoice=5;
  this.sinOffset=random(1000);

    this.osc = new p5.Oscillator(); 
  this.osc.setType('square');
  this.freq=0;
  this.amp=1;

  this.oscMod=0;

  this.osc.freq(this.radius+this.sinOffset+this.oscMod);
  this.osc.amp(0.05);
  this.osc.start();

  this.delay= new p5.Delay();

  this.display = function() {
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);
        this.osc.amp(random(0.01,0.1));

  }

  this.reSize = function() {
    this.sizeCoinChoice = random(100);
    if (this.sizeCoinChoice>90) {
      this.coinVal = random([-1,1]);

    }
    else {
      this.coinVal = this.coinVal;
    }

    
    this.radius =this.radius += random(10)*this.coinVal;
    this.osc.freq(this.radius+this.sinOffset+this.oscMod);
  }

  this.loseLife = function() {
        this.lifespan=this.lifespan += random(1);
        this.lifespan=this.lifespan -= random(3);
        if (this.lifespan < 0){
          this.isDead=true;
          this.osc.stop();
          //this.osc.remove();
          //this.delay.disconnect();
          //this.osc.disconnect();
          //this.osc.dispose();
        }
  }

  this.makeGrey = function() {
    this.isGrey=true;
    this.fillColor=color(20,20,20,this.lifespan);
    this.oscMod= -200;
    this.delay.setType('pingPong');
    this.delay.process(this.osc,.12,.7,2300);
    //this.osc.setType('sine');
  }

  this.blink = function() {
      if(this.fillGrey===true) {
        if (this.isGrey===false) {
        //this.fillColor=color(255,0,0,this.lifespan);
        this.fillColor=color(220,130,150,this.lifespan);
      }
        this.fillGrey=false;
      }
      else {
        if (this.isGrey===false) {
        //this.fillColor=color(0,0,255,this.lifespan);
        this.fillColor=color(175,180,125,this.lifespan);
        this.fillColor=color(175,220,125,this.lifespan);
      }
        this.fillGrey=true;
      }
  }
}

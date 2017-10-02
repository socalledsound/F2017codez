var bubbles=[];
var numBubbles=3;
var button;
var button2;
var slider;
var threshHoldValue=99;

function setup() {
  createCanvas(1000, 1000);
  frameRate(20);
  for (var i = 0; i<numBubbles;i++) {
      bubbles[i] = new Bubble((((i+1)*250)+50),300,20);
  }
  
    //slider = createSlider(50, 100, 98);
    slider=select('#threshSlider');

    button=select('#kill');
    button.mousePressed(killRandomBubble);
    button2=select('#freeze');
    button2.mousePressed(freezeIt);
    //kill.innerHTML='changed';
   //noLoop();
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
  
    var choice=random(100);
    //console.log(choice);
    threshHoldValue=slider.value();
    //console.log(slider.value());
    if (choice > threshHoldValue) {
      bubbles.push(new Bubble(random(300,800),random(300,600),random(20)));
    }

//console.log(bubbles.length);


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

  this.display = function() {
        stroke(255);
        fill(this.fillColor);
        ellipse(this.x, this.y, this.radius);

  }

  this.reSize = function() {
    this.sizeCoinChoice = random(50);
    if (this.sizeCoinChoice>45) {
      this.coinVal = random([-1,1]);
    }
    else {
      this.coinVal = this.coinVal;
    }

    
    this.radius =this.radius += random(10)*this.coinVal;
  }

  this.loseLife = function() {
        this.lifespan=this.lifespan += random(1);
        this.lifespan=this.lifespan -= random(3);
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

function freezeIt() {
  noLoop();
  console.log("hi");
}


function killRandomBubble() {
  //console.log(bubbles.length);

   if(bubbles.length>1){
   bubbles[bubbles.length-1].isDead=true;
   }
}
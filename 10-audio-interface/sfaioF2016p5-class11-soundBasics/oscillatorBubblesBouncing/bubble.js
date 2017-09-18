function Bubble(x,y,r) {
  this.x = x;
  this.y = y;
  this.r=r;
  this.xVel=random(-2,2);
  this.yVel=random(-2,2);
  this.xDir=1;
  this.yDir=1;
  this.col = color(255, 100);
  this.pink = false;
  this.freq=random(1000);
  this.amp=random(0.01,0.5);
  this.frozen=false;

  this.osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.freq(400);
  this.osc.amp(this.amp);
  
          this.col = color(25, 180, 255,random(255));
          this.osc.start();
          
        this.pink=true;

  this.display = function() {
    //stroke(255);
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.intersects = function(other) {
    
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r/2 + other.r/2) {
      return true;
    } else {
      return false;
    }
  }


  this.move = function() {
    this.x = this.x+this.xVel;
    this.y = this.y+this.yVel;
    this.freq=map(this.x,0,1000,200,1400);
    this.osc.freq(this.freq);
    this.amp = map(this.y,0,800,0,0.5);
    this.osc.amp(this.amp);

  }

  this.dragged = function() {
    this.x = mouseX;
    this.y = mouseY;
    //osc.freq(this.x);

  }

  this.checkEdges = function() {
    if (this.x > width) {
      this.x = width;
      this.xVel *= -1;
    } else if (this.x < 0) {
      this.xVel *= -1;
      this.x = 0;
    }
    if (this.y > height) {
      this.yVel *= -1;
      this.y = height;
    }
    else if (this.y < 0) {
      this.yVel *= -1;
      this.y = 0;
    }
  };


  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 24) {
      if(!this.pink){
        this.col = color(255, 0, 200);
          this.osc.start();
          
        this.pink=true;
      } 
      else {
        this.col = color(255, 100);
        this.osc.stop();
        this.pink=false;
      }
    }
  }

}



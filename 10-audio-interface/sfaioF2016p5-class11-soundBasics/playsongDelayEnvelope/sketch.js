var song;
var delay1;
var delay2;
var envelope;
var bgCol;
var squares=[];


function preload() {
  song=loadSound("GS-Matisse.mp3")
}


function setup() {
createCanvas(1200,800);
bgCol=color(random(255),random(255),random(255),random(255));
background(bgCol);

  delay1= new p5.Delay();
   delay2= new p5.Delay();

  envelope = new p5.Env();
  envelope.setADSR(0.1, 0.1,1.0, 0.01);
  envelope.setRange(0.5,0);
  
  	 //song.play();
 
  
}

function draw() {
  bgCol=color(random(255),random(255),random(255),random(255));
  background(bgCol);
  
  // for (var i=0;i<squares.length;i++) {
  //   squares[i].update();
  //   squares.display();
  // }
  
  
  
}


function mousePressed() {
  // song.amp(0.5);
  // bgCol=color(random(255),random(255),random(255),random(255));
  // background(bgCol);
  //delay.process(song, random(3.0), random(1.0), random(4000));
    song.jump(random(10));
    song.rate(random(-1,1));
     song.amp(envelope);
    
	  envelope.play(song);
  delay1.process(song, 2.0, 0.1, 2000);
   delay2.process(song, 10.0, 0.9, 2000);
  //delay2.process(envelope, 1.0, random(1.0), 2000);
  
  
}

var osc, osc2,lowOsc;
var noise1, noise2;
var delay1;
var delay2;
var envelope1,envelope2,envelope3,envelope4;
var x=0;
var lowTones, thisProcess,delayThisProcess, anotherProcess, process3, addSquareInterval, clearSquaresInterval,aliveness;
  
  videoStart=setTimeout(trigVideo,16000);
var anotherProcess;
var process3;
var process4;
var freqs=[];

var curentTime=0;

var bgCol;
var squares=[];

var img1,img2,img3;

var numImages=8;

var imgs=[];

var lego1,lego2,legoCount=0.1;


var collapseVideo;
var vidTriggered=false;

function preload() {

// for (var z=0;z<numImages;z++){
//   imgs[z]=loadImage("squareImages/squares" + z + ".png");
// }
 
 for (var i=0;i<4;i++){
  //imgs[i]=loadImage("dominoes/d" + i + ".jpg");
   //imgs[i]=loadImage("legos/legos" + i + ".jpg");
 }
 
 lego1=loadImage("legos/legosCut3.png");
  lego2=loadImage("legos/legosCut4.png");
 
collapseVideo=createVideo("buildingCollapseVideo.mp4"); 
collapseVideo.hide();
 //collapseVideo.pause();
}



function setup() {
  createCanvas(1000,800);
  freqs=[196,247,294,349,392,440,494,587,784];
  
  noise1=new p5.Noise(); 
  noise1.amp(0);
  noise1.start();
  
  noise2=new p5.Noise(); 
    noise2.amp(0);
  noise2.start();
  
  lowOsc=new p5.Oscillator();
  lowOsc.freq(192);
  lowOsc.amp(0);
  lowOsc.start();
  
  osc=new p5.Oscillator();
  osc.freq(500);
  osc.amp(0);
  osc.start();
  
    osc2=new p5.Oscillator();
  osc2.freq(500);
  osc2.amp(0);
  osc2.start();

  delay1= new p5.Delay();
   delay2= new p5.Delay();
   
   reverb= new p5.Reverb();
   
  envelope0 = new p5.Env();
  envelope1 = new p5.Env();
  envelope2 = new p5.Env();
  envelope3 = new p5.Env();
  envelope4 = new p5.Env();

 
  lowTones=setInterval(lowTrigger,3000);
   lowStop=setTimeout(lowEnd,22000);
  
  delayThisProcess=setTimeout(trigThisProcess,16000)
  anotherProcess=setInterval(trigOtherOsc,2000);
  
  process3=setTimeout(trigNoiseSwell,12000);
  process4=setTimeout(trigNoiseBeat,36000);
  
  addSquareInterval=setInterval(addSquare,6000);
  clearSquaresInterval=setInterval(clearSquares,9000);
  aliveness=setTimeout(aliveLoop,3000);
  
  videoStart=setTimeout(trigVideo,16000);
  
}

function draw() {
  currentTime=millis();
  console.log(currentTime/1000);
    bgCol=color(random(255),random(255),random(255),random(255));
  background(bgCol);
  tint(10,random(100));

  //image(random(imgs),0,0,1000,800);
  
  for (i=0;i<squares.length;i++ ){
    
    squares[i].display();
  }
   if(vidTriggered===true) {
    console.log("where's my vid?");
    tint(120,random(100));
    image(collapseVideo,0,0,1000,800);
  }
  
  
  tint(255,random(255));
  scale(1);
  image(lego1,300,300,200,200);
  legoCount=legoCount+0.1;
  translate(375,325);
  rotate(legoCount);
  image(lego2,100,-300,200,200);
  
}

function trigThisProcess() {
   thisProcess=setInterval(trigOsc,100);
}

function lowTrigger() {
    // osc.freq(random(freqs));
     envelope0.setADSR(0.7, 0.7,0.5,3.0);
     envelope0.setRange(0.3,0);
     lowOsc.amp(envelope0);
	  envelope0.play(lowOsc);
  delay1.process(lowOsc, 2.0, 0.1, 2000);
}

function lowEnd() {
  clearInterval(lowTones);
}

function trigOsc() {
     osc.freq(random(freqs));
     envelope1.setADSR(random(0.5), random(0.5),0.1, random(1.0));
     envelope1.setRange(0.06,0);
     osc.amp(envelope1);
	  envelope1.play(osc);
  delay1.process(osc, 2.0, 0.1, 2000);
}

function trigOtherOsc() {
     osc2.freq(random(freqs));
    // osc2.start();
     envelope2.setADSR(random(0.5), random(0.5),0.1, random(1.0));
     envelope2.setRange(random(0.5),0);
     osc2.amp(envelope2);
	  envelope2.play(osc2);
  delay2.process(osc2, 2.0, 0.1, 2000);
  reverb.process(osc2,12,3);
}

function trigNoiseSwell() {
       envelope3.setADSR(10.0, 0.1,0.1, 0.1);
     envelope3.setRange(0.1,0);
     envelope3.play(noise1);
     delay2.process(noise1,3.0,0.5,2000);
     reverb.process(noise1,20,2);
}


function trigNoiseBeat() {
  setInterval(snareHit,12000);
  setInterval(snareHit,13000);
  setInterval(snareHit,14000);
  setInterval(snareHit,15000);
  setInterval(snareHit,16000);
}

function snareHit() {
         envelope4.setADSR(0.01, 0.1,0.01, 0.1);
     envelope4.setRange(random(0.5),0);
     envelope4.play(noise2);
     reverb.process(noise2,20,2);
  
}

function Square(x,y,size) {
 this.x=x;
 this.y=y;
 this.size=size;
 this.rotary=0;
 this.alive=false;
 
 this.mutate=function() {
  this.rotary=this.rotary+(PI/3.0);
 } 
 
 this.display= function(){
   rotate(this.rotary);
   if (this.alive===true) {
    // console.log('alive');
      translate(0,0,300,1000);
      scale(1.5,1.5);
    
     rotate(PI/random(3.0));
     
   }
   strokeWeight(random(30));
  stroke(color(random(255),random(255),random(255)))
   noFill();
   rect(this.x,this.y,this.size,this.size);
 }
}

function addSquare(){
  squares.push(new Square(random(600),random(600),random(100)));
}

function clearSquares() {
  squares=[];
}

function beginRotate() {
  setInterval(rotateSquares,1000);
}


function rotateSquares() {
  for(j=0;j<squares.length;j++){
    squares[j].mutate();
  }
}


function aliveLoop() {
  setInterval(makeAlive,6000);
}


function makeAlive(){
  // thisLength=random(1,squares.length);
  // for(k=0;k<thisLength;k++){
  //   squares[k].alive=true;
  // }
  
  for(l=0;l<10;l++){
    squares.push(new Square(random(width),random(height),random(600)));
  }
  
  
  // console.log("aliveTrig");
    for(k=0;k<squares.length;k++){
    squares[k].alive=true;
    // console.log("aliveTrig");
  }
  
}



function trigVideo() {
  collapseVideo.loop();
  vidTriggered=true;
  
}

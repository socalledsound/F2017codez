var osc, osc2;
var noise1, noise2;
var delay1;
var delay2;
var envelope1,envelope2,envelope3,envelope4;
var x=0;
var thisProcess;
var anotherProcess;
var process3;
var process4;
var freqs=[];

var bgCol;
var squares=[];




function setup() {
  createCanvas(1000,800);
  
  
  freqs=[196,247,294,349,392,440,494,587,784];

  
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

  envelope1 = new p5.Env();
  envelope2 = new p5.Env();
  envelope3 = new p5.Env();
  envelope4 = new p5.Env();

  
  thisProcess=setInterval(trigOsc,100);
  anotherProcess=setInterval(trigOtherOsc,2000);

  
}

function draw() {
  //   bgCol=color(random(255),random(255),random(255),random(255));
  // background(bgCol);

 
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


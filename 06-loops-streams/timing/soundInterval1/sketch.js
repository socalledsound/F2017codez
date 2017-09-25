var osc;
var delay1;
var delay2;
var envelope;
var x=0;
var thisProcess;

function setup() {
  createCanvas(600,600);
  
  osc=new p5.Oscillator();
  osc.freq(500);
  osc.amp(0);
  osc.start();

  delay1= new p5.Delay();
   delay2= new p5.Delay();

  envelope = new p5.Env();
  envelope.setADSR(0.1, 0.1,0.5, 0.01);
  envelope.setRange(0.1,0);
  
  //thisProcess=setTimeout(trigOsc,3000);
  
  //thisProcess=setTimeout(trigOscRecursive,1000);
  
  thisProcess=setInterval(trigOsc,100);
  
  setTimeout(silencio,3000);
  
}

// function draw() {
//   x=x+1;
//   console.log(x);
//   if (x > 300){
//     clearInterval(thisProcess);
    
//   }
  
// }



function trigOsc() {
    background(random(255));
     osc.freq(random(300,500));
     envelope.setADSR(random(0.5), random(0.5),0.1, random(1.0));
     osc.amp(envelope);
	  envelope.play(osc);
  delay1.process(osc, 2.0, 0.1, 2000);
}

function trigOscRecursive() {
  background(random(255));
     osc.freq(random(300,500));
     envelope.setADSR(random(0.5), random(0.5),0.1, random(1.0));
     osc.amp(envelope);
	  envelope.play(osc);
  delay1.process(osc, 2.0, 0.1, 2000);
  
  setTimeout(trigOscRecursive,1000);
}

function silencio() {
  clearInterval(thisProcess);
}

var carrier; // this is the oscillator we will hear
var modulator; // this oscillator will modulate the amplitude of the carrier
var fft; // we'll visualize the waveform
var freq=500;

function setup() {
  createCanvas(800,400);
  noFill();
  background(30); // alpha


  carrier = new p5.Oscillator(); // connects to master output by default
  carrier.freq(500);
  carrier.amp(0);
  // carrier's amp is 0 by default, giving our modulator total control

  carrier.start();

  modulator = new p5.Oscillator('triangle');
  modulator.disconnect();  // disconnect the modulator from master output
  modulator.freq(1000);
  modulator.amp(1);
  modulator.start();

  // Modulate the carrier's amplitude with the modulator
  // Optionally, we can scale the signal.
  carrier.amp(modulator.scale(-1,1,1,-1));
  //carrier.freq(modulator.scale(-1,1,1,-1));
  //carrier.freq(freq*(modulator.scale(-1,1,-1,1)));
  //carrier.freq(freq+freq);
  // create an fft to analyze the audio
  fft = new p5.FFT();
}

function draw() {
  background(30,30,30,100); // alpha

  // map mouseY to moodulator freq between 0 and 20hz
  var modFreq = map(mouseY, 0, height, 20, 0);
  modulator.freq(modFreq);

  var modAmp = map(mouseX, 0, width, 0, 1);
  modulator.amp(modAmp, 0.01); // fade time of 0.1 for smooth fading

  // analyze the waveform
  waveform = fft.waveform();

  // draw the shape of the waveform
  drawWaveform();

  drawText(modFreq, modAmp);
}

function drawWaveform() {
  stroke(240);
  strokeWeight(4);
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();
}

function drawText(modFreq, modAmp) {
  strokeWeight(1);
  text('Modulator Frequency: ' + modFreq.toFixed(3) + ' Hz', 20, 20);
  text('Modulator Amplitude: ' + modAmp.toFixed(3), 20, 40);
}
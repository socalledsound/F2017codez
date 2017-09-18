var amp;
var song;
var button;
var volHistory=[];

function preload() {
  song=loadSound("GS-Matisse.mp3")
}


function setup() {
  createCanvas(800,600);
  // button=createButton('START-STOP');
  // button.mousePressed(toggleSong)
  
   button=select('#myButton');
   button.mousePressed(toggleSong);
  
  song.play();
  amp= new p5.Amplitude();
  
}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  // noFill();
//   beginShape();
//   var vol = amp.getLevel();
//   volHistory.push(vol);
// for (var i =0; i<volHistory.length;i++){
//   var y=map(volHistory[i],0,0.3,height/1.8,0);
//   vertex(i,y);
// }
//   endShape();
  
  
    beginShape();
  var vol = amp.getLevel();
  volHistory.push(vol);
 for (var i =0; i<volHistory.length;i++){
   var y=map(volHistory[i],0,0.5,0,1000);
  // ellipse(random(500),random(500),y,y);
  point(i,y);
 }
  endShape();
  
  
  if (volHistory.length > (width-400)) {
    volHistory.splice(0,1);
  }
  
  stroke(255,0,0);
  line(volHistory.length,0,volHistory.length,height);
  
}




function toggleSong() {
  if (song.isPlaying()){
    song.pause();
    myButton.innerHTML="play";
  }
  else {
    song.play();
    myButton.innerHTML="pause";
  }
}

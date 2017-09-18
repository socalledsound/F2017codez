var amp;
var song;
var button;
var volHistory=[];

function preload() {
  song=loadSound("GS-Matisse.mp3")
}


function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  // button=createButton('START-STOP');
  // button.mousePressed(toggleSong)
  
  // button=select('#myButton');
  // button.mousePressed(toggleSong);
  
  song.play();
  amp= new p5.Amplitude();
  
}

function draw() {
  background(0);
  stroke(255);
  noFill();
 
  var vol = amp.getLevel();
  volHistory.push(vol);
  
  translate(width/2,height/2);
   beginShape();
   
 for (var i =0; i<volHistory.length;i++){
   var r=map(volHistory[i],0,0.3,100,1000);
   var x = r* cos(i);
   var y = r* sin(i);
   
   //var y=
   vertex(x,y);
 }
  endShape();
  
  if (volHistory.length > 360) {
    volHistory.splice(0,1);
  }
  
  // stroke(255,0,0);
  // line(volHistory.length,0,volHistory.length,height);
  
}




// function toggleSong() {
//   if (song.isPlaying()){
//     song.pause();
//     myButton.innerHTML="play";
//   }
//   else {
//     song.play();
//     myButton.innerHTML="pause";
//   }
// }

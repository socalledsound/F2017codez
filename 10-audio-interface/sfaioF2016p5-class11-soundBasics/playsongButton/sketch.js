var song;
var button;
function preload() {
  song=loadSound("GS-Matisse.mp3")
}


function setup() {
  // button=createButton('START-STOP');
  // button.mousePressed(toggleSong)
  
  button=select('#myButton');
  button.mousePressed(toggleSong);
  
  song.play();
  
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

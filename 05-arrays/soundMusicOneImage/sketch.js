

var img;

function preload() {
  img = loadImage('soundMusicImg/tmp-0.gif');
}

function setup() {
  createCanvas(800, 600);
  frameRate(3);

}

function draw() {
 image(img,0,0);

}

var img1,img2;

var mouseWasPressed=false;

function preload() {
  img1 =loadImage("maxresdefault.jpg"); 
  img2 =loadImage("unnamed.png"); 
}

function setup() {
  createCanvas(1000,1000);
   background(0);
  image(img1,0,0);
}

function mousePressed() {
  if (mouseWasPressed == false) {
    background(0);
    image(img2,0,0);
    addText("heads: nyan cat wins");
    mouseWasPressed=true;
  }
  else {
    background(0);
    image(img1,0,0);
    //addText("heads: nyan cat wins");
    mouseWasPressed=false;
  }
}

function addText(texty) {
  fill(color('red'));
  textSize(64);
  text(texty,0,300);
}
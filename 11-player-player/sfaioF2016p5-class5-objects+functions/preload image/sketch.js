var img;
var c;
function preload() {  // preload() runs once
  img = loadImage('imagesAlice/images-1.jpg');
}

function setup() {  // setup() waits until preload() is done
  // img.loadPixels();
  // // get color of middle pixel
  // c = img.get(img.width/2, img.height/2);
}

function draw() {
  // background(c);
  image(img, 0,0);
}
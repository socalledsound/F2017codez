var vid;
var circle;
var img;

function preload() {
   img=loadImage("iu-2.jpg");
  //vid = createVideo("ihop.mp4");
  //vid.loop();
  //vid.hide();
  circle = ellipse(100,100,100);
}

function setup() {
  createCanvas(1000, 1000);
  noStroke();


   img.mask(circle);
   image(img,0,0);
 
}

function draw() {



  // vid.mask(circle);
   //image(vid,0,0);
}
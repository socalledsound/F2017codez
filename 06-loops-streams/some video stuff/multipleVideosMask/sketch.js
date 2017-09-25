var vid1;
var vid2;
var x,y;
var videos=[];
var img;
function setup() {
  x=0;
  createCanvas(1000, 1000);
  
  img=loadImage("JsJ98.png");
  
  vid1 = createVideo("fuckCNN.mp4");
  vid1.loop();
  vid1.hide();

  vid2 = createVideo("ihop.mp4");
  vid2.loop();
  vid2.hide();
 
  
  videos=[vid1,vid2];
 
}

function draw() {
 
  // image(vid1,x,0,600,500);
  // tint(200,random(100,200));
  // image(vid2,x,0,600,500);
  // tint(200,255);
  // image(img,0,0,600,500);
  // x=x+1;
  // fill(255);
  // rect(600,0,500,1000);
   
   background(255);
  image(vid1,mouseX,mouseY,600,500);
  tint(200,random(100,200));
  image(vid2,mouseX,mouseY,600,500);
  tint(200,255);
   image(img,0,0,1000,1000);

   
  
  
  
}
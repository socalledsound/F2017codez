var img;
 
function preload()
{
  // load image
  img = loadImage("tmp-0.gif");
}
 
function setup() 
{
  // set canvas size
  createCanvas(460, 420); 
}
 
function draw() 
{
  background(255);
 
  // display image (img, x, y)
  image(img, 0, 0); 
}


var img;
 
function preload() {
  // load image
    img = loadImage("big-0.png");
}
 
function setup() {
  // set canvas size
    createCanvas(460, 420);
    image(img, 0, 0);
}
// 
//function draw() 
//{
////  background(255);
// 
//  // display image (img, x, y)
//  image(img, 0, 0); 
//}


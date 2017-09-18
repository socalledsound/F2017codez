// //  ok buddy, found some typos.  biggest thing is, you need two seperate loops with 2 seperate arrays if you want to load the images that way.  check what I did // //  /////  below.  

// /////    BUT it might be easier to just load them one by one, if you struggle to make it work and there’s not that many images.

// //////    like here:
// ///////   http://p5js.org/examples/examples/Image_Load_and_Display_Image.php


// ///  ok having said that, give it a shot with the code I have for you here!  notice the boolean in the test in mousePressed at the bottom!  

// ///  not the snazziest way to do it, I can show you an alternative in class…… cheers, ck




// var EXT = '.png';

// var PATH1 = 'smallPhotos/';
// var FILE1 = 'small-';
// var IMAGES1 = 3;
// var smallImgs = Array(IMAGES1);
// var idx = 0;

// var PATH2 = 'bigPhotos/';
// var FILE2 = 'big-';
// var IMAGES2 = 3;
// var bigImgs = Array(IMAGES2);


// var img;

// var x=0;
// var y=0;
// var bigImage=false;
 
// function preload() {
//   for (var i = 0; i != IMAGES1; smallImgs[i] = loadImage(PATH1 + FILE1 + ++i + EXT));
  
//   for (var j = 0; j != IMAGES2; bigImgs[j] = loadImage(PATH2 + FILE2 + ++j + EXT));
  
//   // console.log(imgs);
  
//   // img = loadImage("bigPhotos/big-2.png");
  
// }

// function setup() 
// {
//   // set canvas size
//   createCanvas(1000, 1000); 
//   console.log(bigImgs[1]);
//   noLoop();
// }
 
// function draw() 
// {
//   background(255);
 

//    image(smallImgs[0], 0, 0); 
//    image(smallImgs[1], 100, 0);
//    image(smallImgs[2], 200, 0);
  
// }


// function mousePressed() {
//   if(bigImage==false){
//   console.log('hello');
//   background(0);
//   image(bigImgs[1],0,0);
//   bigImage=true;
//   }
//   else {
//       background(255);
//    image(smallImgs[0], 0, 0); 
//    image(smallImgs[1], 100, 0);
//    image(smallImgs[2], 200, 0);
//    bigImage=false;
    
//   }
//   }



// On Sep 18, 2016, at 10:30 AM, Juan Matos <juancymatos0@gmail.com> wrote:

// could it be just because i'm not saving it in the right place again?

// On Sun, Sep 18, 2016 at 10:27 AM, Juan Matos <juancymatos0@gmail.com> wrote:
// still haven't figure it out : - (
// here's the code:
// thank you !

// var PATH = 'airplanes/';
// var FILE = 'plane-';
// var EXT = '.jpg';
// var IMAGES = 3;
// var imgs = Array(IMAGES);
// var idx = 0;

// var PATH2 = 'airplanesBig/';
// var FILE2 = 'planeBig-';
// var EXT = '.jpg';
// var IMAGES = 3;
// var imgs = Array(IMAGES);
// var idx = 0;


// var img;
 
// function preload() {
//   for (var i = 0; i != IMAGES; imgs[i] = loadImage(PATH + FILE + ++i + EXT));
  
//   for (var i = 0; i != IMAGES; bigImgs[i] = loadImage(PATH2 + FILE2 + ++i + EXT));
  
//   // console.log(imgs);
// }

// function setup() 
// {
//   // set canvas size
//   createCanvas(460, 420); 
  
// }
 
// function draw() 
// {
//   background(255);
 
//   // display image (img, x, y)
//   image(imgs[0], 0, 0); 
//   image(imgs[1], 200, 0);
//   image(imgs[2], 600, 0);
  
// }


// function mousePressed() {
//   if(mouseX>) {
//     image(bigImgs[0],0,0);
//   }
// }

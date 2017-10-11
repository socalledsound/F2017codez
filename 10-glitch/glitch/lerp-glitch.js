/*

Simple Image Glitching Processing
datamoshing.com | 2016

*/

// image path is relative to sketch directory
var img;
var imgFileName = "soundMusicImg/tmp-0";
var fileType = "gif";

var glitchComplete = false;
var glitchSaved = false;

function preload() {
     img = loadImage(imgFileName+"."+fileType); 
     
}


function setup() {


  // use only numbers (not variables) for the size() command, Processing 3
  createCanvas(500, 274);

  // allow resize and update surface to image dimensions
  //surface.setResizable(true);
  //surface.setSize(img.width, img.height);

  // load image onto surface
  image(img, 0, 0, img.width, img.height);
}


function draw() {
  if (!glitchComplete)
  {
    // load the image's pixels into .pixel array
   

    var previousPixelGlitched = false;

    // random color
    // 0-255, red, green, blue, alpha
   

   loadPixels();
      
      
    // for each column of pixels
    for (var x = 0; x < img.width; x++) {

      // for each row of pixels
      for (var y = 0; y < img.height; y++) {

        // 25% chance to glitch this pixels, a second 80% chance if the previous pixel was glitched
        if (random(100) < 50 || (previousPixelGlitched === true && random(100) < 40))
        {
          previousPixelGlitched = true;
          
              var index = (x + y * img.width)*4;
              console.log(index);
      
        var pixelColor = [pixels[index+0], pixels[index+1], pixels[index+2]];
        // var pixelColor=1;
            //console.log(pixelColor);
            
            
          // get the color for the pixel at coordinates x/y
          //var pixelColor = img.pixels[y + x * image.height/3];
         // var randomColor = [random(20),random(255),random(100)];
          // percentage to mix
          // var mixPercentage = .9;
             var newColor = [];
            // for (var i=0; i<pixelColor.length;i++) {
            //   newColor[i]= (pixelColor[i]+random(100))/2;
            // }

          //console.log(newColor);
          console.log(pixelColor[0]);  

          // mix colors by random percentage of new random color
//               console.log(img.pixels[y + x * img.height]);
            //var glitchcolor = 
            //console.log(pixelColor);
          // img.pixels[index] =  random(255);
          // img.pixels[index+1] = random(255);
          //   img.pixels[index+2] = pixelColor[2]/random(2);
          //   img.pixels[index+3] =  255;

          pixels[index] =  random(255);
          pixels[index+1] = random(255);
          pixels[index+2] = random(255);
          pixels[index+3] =  random(255);




        } else
        {
          // didn't glitch this pixel
          previousPixelGlitched = false;
            
          // choose a new random mix color
          // 0-255, red, green, blue, alpha
          randomColor = [random(255), random(255), random(255)];
          
        }
      }
    }

    updatePixels();
    glitchComplete = true;

    // load updated image onto surface
    image(img, 0, 0, img.width, img.height);

    // apply some filters
    // https://processing.org/reference/filter_.html

    // posterize filter
    // filter(POSTERIZE, 4);

    // dilate filter
    // filter(DILATE);
  }

  if (glitchComplete && !glitchSaved) {

    // save surface
    img.save("_glitched.png");
    glitchSaved = true;
    console.log("Glitched image saved");
    console.log("Click or press any key to exit...");
  }
}

function keyPressed() {
  if (glitchSaved)
  {
    //System.exit(0);
  }
}

function mouseClicked() {
  if (glitchSaved)
  {
    //System.exit(0);
  }
}
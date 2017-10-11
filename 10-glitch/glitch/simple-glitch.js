var img;
var lastPixelGlitched = false; 


function preload(){
  img = loadImage("soundMusicImg/tmp-0.gif");  
}

function setup() {
  createCanvas(500, 400);
  noLoop();
}

function draw() {
  
  background(0);
  image(img, 0, 0, 500, 400);
  loadPixels();

  for (var x = 0; x < 1000; x++) {
    for(var y= 0;y< 1600; y++) {
      var chooser = random(100);
      var index = (x+y*img.width)*4;

      if (chooser < 7 || (lastPixelGlitched && chooser < 90)) {
          pixels[index] = ((pixels[index]+random(200))/2);
          pixels[index+1] = ((pixels[index+1]+random(200))/2);;
          pixels[index+2] = ((pixels[index+2]+random(200))/2);;
          pixels[index+3] = 240;
           lastPixelGlitched = true;
        
        }

        else {
          // console.log("no glitch");
        pixels[index] = pixels[index+1]/random(1);
        pixels[index+1] = pixels[index+1]/random(3);
        pixels[index+2] = 0;
        pixels[index+3] = 240;
         lastPixelGlitched = false; 
        

        }


      }    

    }
    



    
  
  updatePixels();
}
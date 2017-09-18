var vid;
function setup() {
  createCanvas(1000, 1000);
  vid = createVideo("ihop.mp4");
  vid.loop();
  vid.hide();
  vid.volume(0);
  noStroke();
}
function draw() {
  background(0);
  vid.loadPixels();
    
    
//console.log(vid.pixels.length);
    
  for (var y = 0; y < 50; y += 1) {
    for (var x = 0; x < 50; x += 1) {
            
      var offset = ((y*width)+(x+10))*4;
     
      fill(vid.pixels[offset],
        vid.pixels[offset+1],
        vid.pixels[offset+2]);
        
      rect(x*5, y*5, 100,100); 
      
    }
  }
}


// function isEven(n) {
//   return n % 2 == 0;

// }
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  // Basic for loop setup. 
  //    init    ;  test  ; update
  for (var i = 0; i < 200; i+=10){
    // statements to run
    line(i, 0, i, height);
  }
  
  // Uncomment the code below to draw gradient
  // from black to white
  // for (var i = 0; i < width; i++){
  //   stroke(i/width * 255);
  //   line(i, 0, i, height);
  // }
}
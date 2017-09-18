
var intersectionSound;
var bubble;
var bubbles=[];

function preload() {
  intersectionSound=loadSound("telemetry.mp3");
}

function setup() {
  createCanvas(1000, 800);
   for (var i = 0; i < 6; i++) {
      bubbles[i] = new Bubble(random(width), random(height),random(20,120));
  }
  
  //intersectionSound.play();
  
}



function draw() {
background(0);

 for (var i = 0; i < bubbles.length; i++) {
   if(bubbles[i].frozen===false){
    bubbles[i].move();
   }
   
    bubbles[i].display();
    bubbles[i].checkEdges();
   
      for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].xVel*=-1;
        // intersectionSound.play();
        //bubbles[i].yVel*=-1;
      }
      else{
        //intersectionSound.stop();
      }
    }

  }

}

function mousePressed() {
bubbles.push(new Bubble(mouseX,mouseY,random(20,50)))
}


// function mousePressed() {
//   for (var i = 0; i < bubbles.length; i++) {
//     bubbles[i].clicked();
//   }
// }

// function mouseDragged() {
//     bubble.dragged();
// }
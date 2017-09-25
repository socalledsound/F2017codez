  var balloons=[];
var numBalloons;

//var showText=false;

function setup() {

numBalloons=30;

createCanvas(1000,800); 
 background(color(200,0,200));
 
for (var i=0;i<numBalloons; i++){
  balloons[i]=new Balloon(random(0,1000),random(100,800),100,120,color(random(255),random(255),random(255)));
} 


}


function draw() {
  background(color(200,0,200));

  for(var i=0;i<numBalloons;i++){
   balloons[i].display();
   balloons[i].move(random(3));
   balloons[i].checkTop();
    }
    
  for(var i=0;i<numBalloons;i++){
    if (balloons[i].isDead === true ) {
      //console.log(balloons[i].isDead);
      balloons.splice(i,1);
      numBalloons=numBalloons-1;
      }
    }
    
  if (numBalloons<1){
    textSize(60);
   // fill(color(0));
    fill(color(255,182,193));
    strokeWeight(30);
    //stroke(color(255,153,0));
    stroke(color(0,30,150));
      text("Celebrate Your Level!",200,500);
  }
    
}



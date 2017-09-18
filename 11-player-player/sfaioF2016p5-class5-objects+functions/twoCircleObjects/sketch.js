var circle1 = {
  x:50,
  y:200,
  diameter:50,
  redVal: 120,
  greenVal:20,
  blueVal:255,
}

var circle2 = {
  x:200,
  y:500,
  diameter:100,
    redVal: 10,
  greenVal:200,
  blueVal:0
}


function setup() {
  createCanvas(1000,1000);
}

function draw() {

 

    fill(circle1.redVal,circle1.greenVal,circle1.blueVal);
  ellipse(circle1.x,circle1.y,circle1.diameter);
  
    fill(circle2.redVal,circle2.greenVal,circle2.blueVal);
  ellipse(circle2.x,circle2.y,circle2.diameter);
  
  
  // drawCircle(50,200,50,120,20,255);
  //   drawCircle(200,500,100,10,200,0);
  
  
    // drawCircle(circle1.x,circle1.y, circle1.diameter,circle1.redVal,circle1.greenVal,circle1.blueVal);
   // drawCircle(circle2.x,circle2.y, circle2.diameter,circle2.redVal,circle2.greenVal,circle2.blueVal);
  
  
}


// function drawCircle(x,y,diameter,redVal,greenVal,blueVal) {
//     fill(redVal,greenVal,blueVal);
//   ellipse(x,y,diameter);
// }
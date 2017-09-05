var startAngle = 0;
var angleVel = 0.23;
var bgcol;
var drawCount=0;

var colors=[]



function setup() {
  createCanvas(1000, 500);
bgcol=color(random(255),random(255),random(255));

for (i=0;i<1000;i++) {
colors[i]=color(random(255),random(255),random(255));
}
}

function draw() {
  background(bgcol);
  drawCount+=1;
  startAngle += 0.01;
  var angle = startAngle;

  for (var x = 0; x <= width/2; x += 24) {
    var y = map(sin(angle), -1, 1, 0, height/2);

    var rad=cos(angle)*300;
    console.log(angle);
    console.log(rad/300);
    //rad=10;
    //var rad=cos(x/10);
    stroke(164);
    //var colChoice=int(random(90));
     fill(colors[x]);
    strokeWeight(2);
    ellipse(x+width/4, y+height/4, rad, rad);
    angle += angleVel*.5;
  }



}


function mousePressed() {
saveCanvas('myCanvas', 'png');
}
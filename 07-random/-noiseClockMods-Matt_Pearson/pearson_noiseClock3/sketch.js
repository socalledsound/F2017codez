
var _num = 10;    
var _angnoise, _radiusnoise;
var _xnoise, _ynoise;
var _angle;
var _radius = 100;
var _strokeCol = 200;
var _strokeChange = -1;

var xSize=400;
var ySize=400;

function setup() {
  createCanvas(1000, 700);
  //smooth(); 
  frameRate(30);
  background(255);
  
  _angle = (PI/2);
  //console.log(_angle);
  _angnoise = random(10);
  _radiusnoise = random(10);
  _xnoise = random(10);
  _ynoise = random(10);
}

function draw() {
  //console.log("hello");
  _radiusnoise += 0.005;
  _radius = (noise(_radiusnoise) * 550) +1;
  
  _angnoise += 0.005;
  _angle += (noise(_angnoise) * 6) - 3;
  if (_angle > 360) { _angle -= 360; }
  if (_angle < 0) { _angle += 360; }
  


  // wobble centre
  if(_xnoise > 0.3){_xNoise=0.01;}
  _xnoise += 0.01;
  _ynoise += 0.01;

  xSize -= 1;
  ySize -= 1;

  if(xSize > 500) {xSize=100;}
  if(ySize > 500) {ySize=100;}

  var centreX = width/2 + (noise(_xnoise)-150);
  var centreY = height/2 + (noise(_ynoise)-300);
  
  var rad = radians(_angle);
  var x1 = centreX + (_radius * cos(rad));
  var y1 = centreY + (_radius * sin(rad*0.618));


  
  // opposite
  var opprad = rad + PI;
  var x2 = centreX + (_radius * cos(opprad));
  var y2 = centreY + (_radius * sin(opprad)); 
  


  noFill();
  fill(color(random(255),random(255),random(255),random(255)));
  _strokeCol += _strokeChange;
  if (_strokeCol > 254) { _strokeChange *= -1; }
  if (_strokeCol < 0) { _strokeChange *= -1; }
  _strokeCol2=color(random(255),random(255),random(255),random(255));
  //stroke(_strokeCol);
  stroke(_strokeCol2);
  strokeWeight(1);
  //line(x1, y1, x2, y2);
    if(xSize > 500) {xSize=100;}
  if(ySize > 500) {ySize=100;}

  rect(x1,y1,xSize/(x2*.05),ySize/(y2*.01));

}






// //================================= 

// void keyPressed() {
//   if (keyCode == ENTER) {
//     saveFrame("waveclock-####.tif");
//   }
// }

// void mousePressed() {
//   clearBackground();
// }
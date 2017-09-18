var bigImage1;
var bigImage2;
var bigImage3;

var bigImage1Showing=false;
var bigImage2Showing=false;
var bigImage3Showing=false;

// function preload(){
//   bigImage1=loadImage("bigPhotos/big-0.png");
// }


function setup() {
  noCanvas();
  // var canvas = createCanvas(400, 400);
  // canvas.parent("canvasP");
  
var button1 = select('#button1');
  button1.mousePressed(displayImage1);


var button2 = select('#button2');
  button2.mousePressed(displayImage2);


  var button3 = select('#button3');
  button3.mousePressed(displayImage3);
}


http://nyan-cat.com/images/eat-n-grow-nyan-cat-fever-game.jpg

function displayImage1() {
  if(bigImage1Showing==false) {
  bigImage1=createImg("http://www.levelupstudios.com/lvlup-products/levelupstudios-lolcomics-nyancatsticker-750.jpg");
  bigImage1Showing=true;
}
else {
  bigImage1.hide();
  bigImage1Showing=false;

}

}


function displayImage2() {
    if(bigImage2Showing==false) {
  bigImage2=createImg("http://nyan-cat.com/images/eat-n-grow-nyan-cat-fever-game.jpg");
    bigImage2Showing=true;
}
else {
  bigImage2.hide();
  bigImage2Showing=false;

}
}


function displayImage3() {
 if(bigImage3Showing==false) {
  bigImage3=createImg("http://vignette1.wikia.nocookie.net/nyancat/images/d/d3/Nyan-cat.gif/revision/latest?cb=20120909123057");
  bigImage3Showing=true;
}
else {
  bigImage3.hide();
  bigImage3Showing=false;

}

}
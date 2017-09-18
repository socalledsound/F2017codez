// var button1, button2, button3, button4;
var button;
// var button1;
// var button2; 
// var button3; 
// var button4;
var canvas;

var img;

var x=0;

var images = {};

var alice = {
  tooBig:true,
  hasBottle:false,
  hasDrunk:false,
  isCrying:false,
  
  lookBox: function(){
  background(255);
 image(images.lookBoxImage,0,0);
 myButton.innerHTML='take the bottle';
 button.mousePressed(alice.takeBottle);
},

takeBottle: function(){
  background(255);
 image(images.takeBottleImage,0,0);
 alice.hasBottle=true;
 myButton.innerHTML='make alice drink bottle';
 button.mousePressed(alice.drinkBottle);
},

drinkBottle: function (){
  background(255);
  if (alice.hasBottle) {
image(images.getBigger,0,0);
alice.hasDrunk=true;
 myButton.innerHTML='make alice cry';
 button.mousePressed(alice.cry);
  }
    
  },



cry:function (){
  background(255);
  if ((alice.hasDrunk==true) && (alice.isCrying==false)) {
  image(images.swimImage,0,0);
  console.log('crying');
  
  }
  else if (alice.isCrying){
    background(0);
    fill(255);
    text("stop crying already!",50,200);
  }
  
    alice.isCrying=true;
  }

  
};

function preload(){
images.beforeCurtain = loadImage('imagesAlice/imgres-1.jpg'); 
images.lookBoxImage = loadImage('imagesAlice/images-6.jpg');  
images.takeBottleImage = loadImage('imagesAlice/images-1.jpg');
images.getBigger = loadImage('imagesAlice/imgres.jpg');
images.swimImage = loadImage('imagesAlice/images-2.jpg');
}

function setup() {
  canvas=createCanvas(200,300);
  // canvas.position(150,100);

  button=select('#myButton');
  button.mousePressed(alice.lookBox);

  // button2 = createButton("look box");
  // button2.label='this text';

  // button2.mousePressed(lookBox);
  
  // button1 = createButton("take bottle");
  // button1.mousePressed(takeBottle);

  // button3 = createButton("drink bottle");
  // button3.mousePressed(drinkBottle);
  
  // button4 = createButton("cry, Alice!");
  // button4.mousePressed(aliceCry);

// var b = document.createElement('button');
// b.setAttribute('content', 'test content');
// b.setAttribute('class', 'btn');
// b.innerHTML = 'test value';

// var wrapper = document.getElementById("divWrapper");
// wrapper.appendChild(b);

  
  
  noLoop();
}

function draw() {
  background(255);
  image(images.beforeCurtain,0,0);
}





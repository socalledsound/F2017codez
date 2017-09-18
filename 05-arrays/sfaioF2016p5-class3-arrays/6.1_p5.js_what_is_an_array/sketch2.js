
/* 

1. Code below is for https://vimeo.com/channels/learningp5js/141211396
2. Video reference at 0:20 seconds on Objects > https://vimeo.com/channels/learningp5js/138327558
3. This sketch is from 8:00 minute of the video covering words in arrays and the arrays.length function

*/

var words = ["rainbow", "heart", "purple", "friendship", "love"];
var numbers=[];

var index = 0;

function setup() {
  createCanvas(400, 400);
  
//     for (x=0; x<10; x++){
//     numbers[x]=random(10);
//   }
// console.log(numbers);
  
}

function draw() {

  background(0);
  // index=3;
  fill(255);
  textSize(32);
  text(words[index], 12, 200);
}

function mousePressed() {
   index = int(random(4));
   //index=Math.floor(Math.random() * words.length)

  
  // index=index+1;
  // index=1;
  
  console.log(int(index));

  // if (index == words.length) {
  //   index = 0;
  // }
  

  
}
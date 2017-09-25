
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
    background(0);  
    fill(255);
    textSize(32);
//    words.forEach((word, index)=> {
//       text(words[index], 50, 50+(50*index)); 
//    });
    
    
    
}

function mousePressed() {
//  console.log(words.length-1);
    background(0);    
    index = int(random(words.length-1));  
    console.log(index);
    console.log(words[index]);
    


  
}
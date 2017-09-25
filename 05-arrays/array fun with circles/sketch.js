/* 

1. Code below is for https://vimeo.com/channels/learningp5js/141211396
2. Video reference at 0:20 seconds on Objects > https://vimeo.com/channels/learningp5js/138327558

*/

var nums = [100, 35, 46, 72];
var color1 = [200,100,20];
var color2 = [20,200,100];
var color3 = [140,50,140];
var color4 = [120,120,20];
var colorVals = [color1,color2,color3,color4];
var num = 23;

function setup() {
  createCanvas(1000, 1000);
  background(0);  
    console.log(colorVals);
}

function draw() {
background(0);
 
    nums = nums.map((num,index) =>  num+index); 
   
    colorVals.forEach((color) => {
        color.forEach((colorProp,index) => {
            if(colorProp<200) {
            color[index]=colorProp+random(10);
            }
            else {
            color[index] = 0;
            }
        });   
    });
        
    nums.forEach((num,index) => {
       if(num > 200) {
           nums[index] = 0;
          
       }
    });

    nums.forEach((num, index) => {
        fill(colorVals[index]);
        ellipse(100*index+100,200, num,num);
    })   
    
    
}
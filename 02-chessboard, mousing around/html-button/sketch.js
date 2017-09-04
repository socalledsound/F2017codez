
var button;
var bgColor=[170,170,170];

function setup() {

createCanvas(1000,1000);
background(bgColor);
button = createButton('button');
button.position(125, 125);
button.mousePressed(changeFill); 


}



function draw() {
	background(bgColor);
}


function changeFill() {

	bgColor=[random(255),random(255),random(255)];
}

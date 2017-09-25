var bgColor=[120,120,120];
var black = [0,0,0];
var white = [255,255,255];
var redColor = [200,0,0];
var xStart = 10;
var yStart = 10;
var square_size  = 10;
var pad=10;
n;

function setup() {
	createCanvas(1000,1000);
	background(bgColor);

// button = createButton('button');


	for (var y=0;y<100;y++) {

		for(var x=0;x<108;x++) {

			if((x/2*y/6)%7) {
			fill(black);
			}
			else {
			fill(white);
			}

			rect(x*square_size+xStart,y*square_size+yStart,square_size,square_size);
		}

	}	


}
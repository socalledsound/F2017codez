function setup() {
	createCanvas(600,1400);

}


function draw() {
	background(0);
	stroke(255);
	noFill()
	drawCircle(300,600,300);

}


function drawCircle(x,y,d) {


	ellipse(x,y,d);
	if(d > 2) {
	drawCircle(x+d*0.618,y,d*0.618);
	drawCircle(x-d*0.618,y,d*0.618);
	drawCircle(x,y-d*0.618,d*0.618);
	}

}

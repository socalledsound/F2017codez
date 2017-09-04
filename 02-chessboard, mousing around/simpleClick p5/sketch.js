var reddish=false;
var ellipse_x=400;
var ellipse_y=400;
var ellipse_size=200;
var bgColor = [20,20,20];
var greyColor=[180,180,180];
var redColor=[180,0,0];

function setup() {

	createCanvas(1000,1000);
	background(bgColor);
	
	
	fill(greyColor);
	strokeWeight(5);
	ellipse(ellipse_x,ellipse_y,ellipse_size);


}








function mousePressed () {
var d = dist(mouseX,mouseY,ellipse_x,ellipse_y);



	if (d < ellipse_size/2) {
	
		if(reddish) {
			fill(greyColor)
			reddish=false;
		}
		else {
			fill(redColor);
			reddish=true;
		}
	}

	background(bgColor);
	ellipse(ellipse_x,ellipse_y,ellipse_size);

}




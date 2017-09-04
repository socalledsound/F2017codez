var squareSize=120;
var white=[255,255,255];
var black =[0,0,0];
var colors=[white,black];
var startBlack=false;

function setup() {
	createCanvas(8*(squareSize+2),8*(squareSize+2));
	background(120,120,120);
	
	
	for (var y=0; y<8; y++) { 
		
	
		for (var x=0; x<8; x++) {
				
				if ((x+y) % 2) {
					fill(black);
				}
				else {
					fill(white);
				}
			rect(x*squareSize+8,y*squareSize+8,squareSize,squareSize);	
		 }		
	}	 
		
}



function draw() {

}






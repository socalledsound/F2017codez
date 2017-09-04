var squareSize=40;
var white=[255,255,255];
var black =[0,0,0];
var colors=[white,black];
var startBlack=false;

function setup() {
	createCanvas(1000,1000);
	background(120,120,120);
	
	
	for (var y=0; y<8; y++) { 
	
		if (y%2) {
			startBlack = true;
			}
			else {
			startBlack = false;
			} 
	
	
		for (var x=0; x<8; x++) {
			
			if(!startBlack) {
				
				if (x%2) {
					fill(0,0,0);
				}
				else {
					fill(255,255,255);
				}
				
			}
			else {
				
				if (x%2) {
					fill(255,255,255);
				}
				else {
					fill(0,0,0);
				}
			}
			
			
		
			rect(x*squareSize,y*squareSize,squareSize,squareSize);	
		 }
		
		
		
		
	
	}

}



function draw() {

}
var Cell = function(x,y,cellSize) {
    this.x=x*cellSize; 
    this.y=y*cellSize; 
    this.cellSize=cellSize;
    this.nextState=((x/500) + (y/300)) * 14; 
    this.state=this.nextState;
    this.lastState = 0; 
    this.neighbours = [];

//     this.init = function(float ex, float why) {
//        this.x = this.ex * this._cellSize;
//        this.y = this.why * this._cellSize;
//        this.nextState = ((this.x/500) + (this.y/300)) * 14;  
//        this.state = this.nextState;
//        //this is weird
//         this.neighbours = new Cell[0]; 
//     } 
// 
     this.addNeighbour = function(cell) {
         this.neighbours.push(cell); 
         console.log(this.neighbours)
     }
//
     this.calcNextState = function() {

        var total = 0;				
        for (var i=0; i < this.neighbours.length; i++) {	
           total += this.neighbours[i].state;		
        }					
        var average = int(total/8);

        if (average == 255) {
          this.nextState = 0;
        } else if (average == 0) {
          this.nextState = 255;
        } else {
          this.nextState = this.state + average;
          if (this.lastState > 0) { this.nextState -= this.lastState; }	 
          if (this.nextState > 255) { this.nextState = 255; }
          else if (this.nextState < 0) { this.nextState = 0; }
        }

        this.lastState = this.state;	
     }
 
     this.drawMe = function() {
        var xShrink = random(20,200);
         
         this.state = this.nextState;
        stroke(0);
        fill(this.state,this.state*random(3),this.state*(random(5)),random(200));  
          fill(this.state/random(30),this.state/random(60),this.state*(random(20)),random(20));  
        //ellipse(this.x, this.y, this.cellSize, this.cellSize);
        // ellipse(this.x, this.y, this.cellSize*this.state/random(100)/random(40), this.cellSize*this.state/random(100)/random(40));
         rect(this.x, this.y, this.cellSize*this.state/xShrink, this.cellSize*this.state);
         // rect(this.x*3, this.y*3, this.cellSize*this.state/xShrink, this.cellSize*this.state);
     }
}

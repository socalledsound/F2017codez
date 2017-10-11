var _cellArray=[];     // two dimensional array of cells
var _cellSize = 8;      // size of each cell
var _numX=3;
var _numY=3;        // dimensions of grid

function setup() { 
  createCanvas(800, 800);
    frameRate(10);
  _numX = floor(width/(_cellSize));
  _numY = floor(height/(_cellSize));
    
_cellArray = Array(_numX);    
    
  for (var x = 0; x <_numX; x++) {
   _cellArray[x]=Array(_numY);   
  };
        
  restart();
} 

function restart() {
//  _cellArray = new Cell[_numX][_numY];
    
    
    _cellArray.forEach((item,index)=>{
            for (var y = 0; y<_numY; y++) {	 	
      item[y] = new Cell(index,y,_cellSize);	   
        }	               
    })
 console.log(_cellArray); 					
 
  for (var x = 0; x < _numX; x++) {
    for (var y = 0; y < _numY; y++) {	
      
      var above = y-1;		
      var below = y+1;		
      var left = x-1;			
      var right = x+1;			
      
      if (above < 0) { above = _numY-1; }	
      if (below == _numY) { below = 0; }	
      if (left < 0) { left = _numX-1; }	
      if (right == _numX) { right = 0; }	

     _cellArray[x][y].addNeighbour(_cellArray[left][above]);	
     _cellArray[x][y].addNeighbour(_cellArray[left][y]);		
     _cellArray[x][y].addNeighbour(_cellArray[left][below]);	
     _cellArray[x][y].addNeighbour(_cellArray[x][below]);	
     _cellArray[x][y].addNeighbour(_cellArray[right][below]);	
     _cellArray[x][y].addNeighbour(_cellArray[right][y]);	
     _cellArray[x][y].addNeighbour(_cellArray[right][above]);	
     _cellArray[x][y].addNeighbour(_cellArray[x][above]);		
    }
  }
}

function draw() {
  background(200);
  					
  for (var x = 0; x < _numX; x++) {
    for (var y = 0; y < _numY; y++) {
     _cellArray[x][y].calcNextState();
    }
  }
  						
  translate(_cellSize/2, _cellSize/2);  	
						
  for (var x = 0; x < _numX; x++) {
    for (var y = 0; y < _numY; y++) {
     _cellArray[x][y].drawMe();
    }
  }
}

function mousePressed() {
  restart();
}

//================================= object


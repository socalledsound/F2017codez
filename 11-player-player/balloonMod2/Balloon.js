function Balloon(x,y,xSize,ySize,color) {
  this.x=x;
  this.y=y;
  this.xSize=xSize;
  this.ySize=ySize;
  this.color=color;
  this.showText=false;
  this.isDead=false;
  
  
this.display = function(){  
   line(this.x,this.y,this.x,this.y+300);
 fill(this.color);
 ellipse(this.x,this.y,this.xSize,this.ySize);
}

 this.move= function(speed){
   this.speed=speed;
   this.y=this.y-=(1*this.speed);
 }
 
 this.checkTop = function() {
   if(this.y<200){
  //this.showText=true;
  //console.log("hello");
  this.isDead=true;
   }
 }
 
 this.textPrint = function() {
   if (this.showText==true) {
      
      fill(color("white"));
      text("Happy Birthday Nono!",200,500);
   }
 }
  
}
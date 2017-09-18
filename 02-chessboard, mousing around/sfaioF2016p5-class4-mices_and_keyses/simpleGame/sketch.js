var xPos;                      //Position of the ball
var speed=1;                   //How fast is it moving?
var xDir=1;                    //what direction is the ball going?
var score=0;                   //Inital score
var lives=5;                   //Number of lives you start with
var lost=false;
var ballSize=100;
                    //Have you lost yet?

function setup() {
  createCanvas (400,400);
  smooth();
  xPos=width/2;                //Centers our ball
  fill(0,255,0);               //Makes the ball and text green
  textSize(13);                //Sets the size of our text
}

function draw() {
    //println(width);
  
  background (0);                                //Black background
  ellipse(xPos, height/2,ballSize,ballSize);                 //Draw the ball
  xPos=xPos+(speed*xDir);                        //update the ball's position 
  if (xPos > width-50 || xPos<50)                //Did the ball hit the side?
  {
    xDir=-xDir;                                  //If it did reverse the direction
  }
  text("score = "+score,10,10);                  //Print the score on the screen
  text("lives = "+lives,width-80,10);            //Print remaining lives
  if (lives<=0)                                  //Check to see if you lost
  {
    textSize(20);
    text("Click to Restart", 125,100);
    noLoop();                                    //Stop looping at the end of the draw function
    lost=true;
    textSize(13);
  }
}


function mousePressed()                              //Runs whenever the mouse is pressed
{
  if (dist(mouseX, mouseY, xPos, 200)<=20)      //Did we hit the target?
  {
    score=score+speed;                           //Increase the score
    speed=speed+1; 
    ballSize=ballSize/2;
    
    //Increase the Speed
  }
  else                                           //We missed
  {
    if (speed>1)                                 //If speed is greater than 1 decrease the speed
    {
    speed=speed-1;
    }
    lives=lives-1;                               //Take away one life
  }
  if (lost==true)                                //If we lost the game, reset now and start over 
  {
    speed=1;                                     //Reset all variables to initial conditions
    lives=5;
    score=0;
    xPos=width/2;
    xDir=1;
    ballSize=100;
    lost=false;
    loop();                                     //Begin looping draw function again
  }
}
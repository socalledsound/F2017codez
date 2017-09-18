var narrator = {
  keyOnTheTableQuestion: "Ok.  You were bored, you slipped down a rabbit hole, now you're kind of lost aren't you?  There's a key on a table.  What would you like to do?",
  keyNotTakenAnswer1:"I don't know what you mean.",
  keyNottakenAnswer2:"Maybe you should 'take key'.",
  keyNottakenAnswer3:"YOU SILLY GIRL!  Until you type 'take key', you'll be stuck here.",
  keyTakenAnswer:"Great!  Now You have a key!  Too bad that door is so small.  Do you see that bottle that says 'drink me'?.  What would you like to do?",
  bottleNotPickedUpAnswer:"If you want to pick up the bottle, type 'pick up bottle'",
  bottlePickedUpAnswerOne:"In order to pick up the bottle you have to put down the key.",
  keyNotPutDown:"Please just type 'put down key' so we can move on.",
  keyPutDown:"Ok Great.  Now the key is on the table, (which is going to upset you greatly soon), and you have the bottle.  Type 'drink bottle' if you want to drink it.",
  bottleDrunkAnswer:"As I'm sure you already know, now you are tiny and alone and tripping your brains out in some weird children's story.  Would you like to 'cry'?",
  notCryingAnswer1:"Sooner or later I'll make you cry.  Do you realize that planet earth is probably dying?",
  notCryingAnswer2:"Still not crying?  Do we have to get into politics here?",
  notCryingAnswer3:"Race in america?  Enough said?  If you're not ready to cry now I think you just failed the Turing test.",
  notCryingAnswer3:"We're going to stay just like this until you type 'cry' or shut my miserable self down.",
  cryAnswer:"Kind of cool to float away on a sea of your own tears, isn't it?  Don't worry, it's all going to turn out all right!"
};


var player = {
  hasKey: false,
  hasBottle: false,
  isSmall:false,
  isCrying:false
};



var typed='';
var currentText;
var textBox;


function setup() {
  createCanvas(1200,1000);
  
  textbox = createInput('TYPE SOMETHING');
  currentText=narrator.keyOnTheTableQuestion;
  
  
 
}

function draw() {
  background(255);
  showText(currentText);

}


function showText(thisText) {
  fill(0);
  textSize(14);
  text(thisText,100,300)
}



function keyTyped() {
  typed+=key;
  
  if (typed == 'take key'){
    currentText=narrator.keyTakenAnswer;
    typed='';
    player.hasKey=true;
  }
  
    if (typed == 'pick up bottle' && player.hasKey==false){
    currentText=narrator.bottlePickedUpAnswerOne;
    typed='';
  }
  
  else {
    currentText=narrator.bottleNotPickedUpAnswer;
    typed='';
  }
  
}


function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed='';
  }
}



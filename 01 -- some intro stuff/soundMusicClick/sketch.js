
const PATH = 'soundMusicImg/',
  FILE = 'tmp-',
  EXT = '.gif';
const IMAGES = 10,
  imgs = Array(IMAGES);
var idx = 0;

 
function preload() {
  for (var i = 0; i != IMAGES; 
    imgs[i] = loadImage(PATH + FILE + ++i + EXT));
}
 
function setup() {
  createCanvas(800, 600);
  noLoop();
}
 
function draw() {
  background(imgs[idx]);
}
 
function mousePressed() {
  idx = ~~random(IMAGES);
  redraw();
}
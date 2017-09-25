

const PATH = 'soundMusicImg/',
  FILE = 'tmp-',
  EXT = '.gif';
const IMAGES = 10,
  imgs = Array(IMAGES);
var idx = 0;

function preload() {
  for (var i = 0; i != IMAGES; imgs[i] = loadImage(PATH + FILE + ++i + EXT));
}

function setup() {
  createCanvas(800, 600);
  frameRate(3);

  console.log(imgs);
}

function draw() {

 idx = int(random(0, 10));
 image(imgs[idx],0,0);

}

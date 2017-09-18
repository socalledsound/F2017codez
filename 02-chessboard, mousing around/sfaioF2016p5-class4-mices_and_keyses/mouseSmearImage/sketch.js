var ellipseRadius = 100;
var img;
var lastX = 0;

function preload() {
    img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ascanius_Shooting_the_Stag_of_Sylvia_1682_Claude_Lorrain.jpg/966px-Ascanius_Shooting_the_Stag_of_Sylvia_1682_Claude_Lorrain.jpg");
}

function setup() {
    createCanvas(800, 600);
    smooth();
    noStroke();
    image(img, 0, 0);
}

function draw() {
    var pxl = img.get(mouseX, mouseY);
  println(img.get(100, 100));
  fill(pxl);
    radius = min(ellipseRadius, abs(mouseX - lastX));
    radius=300;
    ellipse(mouseX, mouseY, radius, radius);
    lastX = mouseX;
}
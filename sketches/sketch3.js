//Funcion noise

function setup() {
    createCanvas(1366, 768);
    background(0);
}

var xoff = 0.00;
var xoff1 = 0.00;
var xoff2 = 0.00;

function draw() {
    xoff += .001;
    xoff1 += .01;
    xoff2 += .1;
    var n = noise(xoff) * width;
    noStroke();
    fill(noise(xoff) * 255, noise(xoff1) * 255, noise(xoff2) * 255);
    ellipse(n, 180, 16, 16);
}
// Funcion ruido

var tamMove = 3;
var tamRect = 50;
var medioWidth = 683;
var medioHeight = 384;

var walker = {
	x: medioWidth,
	y: medioHeight,
    tx: 0,
	ty: 10000,
    xoff: 0.0,
    xoff1: 0.0,
	xoff2: 0.0,
	display: function() {
        this.xoff += .001;
        this.xoff1 += .01;
        this.xoff2 += .1;
		noStroke();
        fill(noise(this.xoff) * 255, noise(this.xoff1) * 255, noise(this.xoff2) * 255, 100);
        ellipse(this.x, this.y, tamMove, tamMove);
	},
    walk: function() {
		this.x = map(noise(this.tx), 0, 1, 0, 1366);
        this.y = map(noise(this.ty), 0, 1, 0, 768);
        this.tx += 0.005;
        this.ty += 0.005;
	}
};

function setup() {
    createCanvas(1366, 768);
    background(0);
}

function draw() {
	walker.walk();
    walker.display();
}
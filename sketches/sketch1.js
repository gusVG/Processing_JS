// Movimiento Gaussiano1

var tamMove = 20;
var medioWidth = 683;
var medioHeight = 384;
var m;

var sd = 10;
var mean = 0;

var walker = {
	x: medioWidth,
	y: medioHeight,
    colorR: 0,
    colorG: 0,
    colorB: 0,
	display: function() {
		noStroke();
		fill(this.colorR, this.colorG, this.colorB, 100);
        ellipse(this.x, this.y, tamMove, tamMove);
	},
    walk: function() {
		var numX = randomGaussian(mean,sd);
        var numY = randomGaussian(mean,sd);
        var numR = randomGaussian(mean,sd);
        var numG = randomGaussian(mean,sd);
        var numB = randomGaussian(mean,sd);
        
        var xStepSize = sd * numX + mean;
        var yStepSize = sd * numY + mean;
        
        var r = random(1);
        this.colorR = 255 * numR;
        this.colorG = 255 * numG;
        this.colorB = 255 * numB;
        
        if (r < 0.1) {
            this.x = xStepSize;
            this.y = yStepSize;
        } else if (r < 0.2) {
            this.x = xStepSize + 1366;
            this.y = yStepSize;
        } else if (r < 0.3) {
            this.x = xStepSize;
            this.y = yStepSize + 768;
        } else if (r < 0.4) {
            this.x = xStepSize + 1366;
            this.y = yStepSize + 768;
        } else {
            this.x = xStepSize + medioWidth;
            this.y = yStepSize + medioHeight;
        }
    }
};

function setup() {
    createCanvas(1366, 768);
	m = new Mitad();
    background(0);
}

function draw() {
	walker.walk();
    walker.display();
}

function Mitad() {
	this.mx = width/2;
	this.my = height/2;
}
// Ejemplo de caminante aleatorio

var tamMove = 3;
var tamRect = 50;
var medioWidth = 683;
var medioHeight = 384;
var m;

var walker = {
	x: medioWidth,
	y: medioHeight,
	display: function() {
		noStroke();
		fill(random(0,255), random(0,255), random(0,255), 100);
        ellipse(this.x, this.y, tamMove, tamMove);
	},
    walk: function() {
		var stepx = floor(random(3))-1;
		var stepy = floor(random(3))-1;
        
        this.y += (stepy * tamMove);
        this.x += (stepx * tamMove);
        
        if (this.y >= ((medioHeight) + (tamRect*tamMove)))
            this.y -= tamMove;
        if (this.y < ((medioHeight) - (tamRect*tamMove)))
            this.y += tamMove;        
        if (this.x >= ((medioWidth) + (tamRect*tamMove)))
            this.x -= tamMove;        
        if (this.x < ((medioWidth) - (tamRect*tamMove)))
            this.x += tamMove;
		
		/*4 Movimientos posibles
		var choice = floor(random(4));
		if (choice === 0) {
			//move right
			this.x+=tamMove;
		} else if (choice === 1) {
			//move left
			this.x-=tamMove;
		} else if (choice === 2) {
			//move down
			this.y+=tamMove;
		} else {
			//move up
			this.y-=tamMove;
		}*/
		
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
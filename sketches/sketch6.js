// Principio de Pong

var position = new p5.Vector(100, 100);
var velocity = new p5.Vector(5, 12);

function setup() {
    createCanvas(1366, 768);
}

function draw() {
    background(0, 0, 0, 100);
    position.add(velocity);
    
    if ((position.x > width) || (position.x < 0)) {
        velocity.x = velocity.x * -1;
    }
    if ((position.y > height) || (position.y < 0)) {
        velocity.y = velocity.y * -1;
    }
    noStroke();
    fill(255, 255, 255);
    ellipse(position.x, position.y, 64, 64);
}
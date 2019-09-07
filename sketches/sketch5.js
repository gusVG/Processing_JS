//Paisaje random con funcion noise

function sky() {
    noStroke();
    fill(25, 77, 135);
    rect(0, 0, width, height);
}

function sea() {
    noStroke();
    fill(130, 168, 212);
    rect(0, height-49, width, 50);
}

function cloud() {
    var xoff = 0.0;
    for (var x = 0; x < width; x++) {
        var yoff = 0.0;
        for (var y = 0; y < height; y++) {
            var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
            stroke(bright, bright, bright, 123);
            point(x, y);
            yoff += 0.01;
        }
        xoff += 0.01;
    }
}

function drawRange() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        stroke(0, 0, 0);
        fill(0, 0, 0);
        rect(t*100, height-y, 1, y-50);
    }
}

function setup() {
    createCanvas(1366, 768);
    sky();
    cloud();
    drawRange();
    sea();
}

function draw() {
}
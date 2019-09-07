// Funcion noise en plano

var cambioZ = 0.0;

function setup() {
    createCanvas(1366, 768);
}

function draw() {
    var xOff = 0.0;
    for (var x = 500; x < 600; x++) {
        var yOff = 0.0;
        for (var y = 200; y < 300; y++) {
            var bright = map(noise(xOff, yOff, cambioZ), 0, 1, 0, 255);
            stroke(bright, bright, 200);
            point(x, y);
            yOff += 0.01;
        }
        xOff += 0.01;
    }
    cambioZ += 0.01;
}
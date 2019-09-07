// Ordenamiento por seleccion hecho para actividad de Khan Academy

var displayArray = function(a, y, fila, columna) {
    fill(32, 58, 227);
    for (var i = 0; i < a.length; i++) {
        text(a[i], 5+(i*20)+fila*200, 15+(y*20)+columna*200);
    }
};
var displayLine = function(laI, iMinimo, fila, columna) {
    stroke(5, 230, 20);
    line(8+(iMinimo*20)+fila*200, 17+(laI*20)+columna*200, 7+(laI*20)+fila*200, 8+((laI+1)*20)+columna*200);
};
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 
var selectionSort = function(array, f, c) {
    var indiceMin = 0;
    for(var i = 0; i < array.length; i++) {
        displayArray(array, i, f, c);
        indiceMin = indexOfMinimum(array, i);
        swap(array, i, indiceMin);
        if(i < array.length - 1) {
            displayLine(i, indiceMin, f, c);
        }
    }
};


function setup() {
    createCanvas(450, 450);
}

function draw() {
	//arreglo inicial con algunos de los valores de ejemplo
	var arreglo1 = [22, 11, -99, 88, 9, 7, 42, -3, -1];
	selectionSort(arreglo1, 0, 0);
	
	//arreglo con valores ordenados al revés
	var arreglo2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
	selectionSort(arreglo2, 1, 0);

	//arreglo donde algunos valores sean los mismos
	var arreglo3 = [7, 7, 7, 7, 7, 7, 7, 7, 7];
	selectionSort(arreglo3, 0, 1);

	//arreglo donde solo un valor esté fuera de orden
	var arreglo4 = [1, 2, 3, 4, 5, 6, 7, 8, -9];
	selectionSort(arreglo4, 1, 1);
}
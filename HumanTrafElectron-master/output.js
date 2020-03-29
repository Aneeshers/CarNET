var count = 1;
var max = 2;
var accuracy = 1;
var model = "nissan";
var make = "CRV";
var year = 2020;
var color = "Brown";
var licensePlate = "00000A";

function nextVideo() {


    if (count != max) {
        count++;
        document.getElementById('mp4Source').setAttribute('src', 'video' + count + '.mp4');
        document.getElementById('video').load();
        document.getElementById('video').play();
    }

}
function previousVideo() {

    if (count != 1) {
        count--;
        document.getElementById('mp4Source').setAttribute('src', 'video' + count + '.mp4');
        document.getElementById('video').load();
        document.getElementById('video').play();
    }

}
console.log("123");
window.onload = function what() { 
    document.getElementById('accuracy').innerHTML = 'Accuracy: ' + this.accuracy + "%";
    document.getElementById('model').innerHTML = 'Model: ' + this.model;
    document.getElementById('make').innerHTML = 'Make: ' + this.make;
    document.getElementById('year').innerHTML = 'Year: ' + this.year;
    document.getElementById('color').innerHTML = 'Color: ' + this.color;
    document.getElementById('license_number').innerHTML = 'License Plate: ' + this.licensePlate;
};

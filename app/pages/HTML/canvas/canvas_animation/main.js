var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasBee = document.getElementById('canvasBee');
var ctxBee = canvasBee.getContext('2d');

var position = -10;
var size = 0;
setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    // ctx.fillRect(position, 0, 20, 20);
    ctx.fillRect(0, 0, size, size);
    size++;
    // position++;
    // if (position > 200) {
    //     position = -10;
    // }
    if (size > 200) {
    size = 0;
    }
}, 30);


var circle = function (x, y, radius, fillCircle) {
    ctxBee.beginPath();
    ctxBee.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctxBee.fill();
    } else {
        ctxBee.stroke();
    }
};

var drawBee = function (x, y) {
    ctxBee.lineWidth = 2;
    ctxBee.strokeStyle = 'Black';
    ctxBee.fillStyle = 'Gold';

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
};

var update = function (coordinate) {
    var offset = Math.random() * 4 - 2;
    coordinate += offset;
    if (coordinate > 200) {
        coordinate = 200;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
};

var x = 100;
var y = 100;

setInterval(function () {
    ctxBee.clearRect(0, 0, 200, 200);

    drawBee(x, y);
    x = update(x);
    y = update(y);

    ctxBee.strokeRect(0, 0, 200, 200);
}, 30);
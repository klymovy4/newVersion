var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var drawPoints = function (points) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();
};

var myMysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];



drawPoints(myMysteryPoints);

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');


var drawCircle = function (x, y, radius, fillCircle) {
    ctx2.beginPath();
    ctx2.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx2.fill();
    } else {
        ctx2.stroke();
    }
};




$('#canvas2').mousemove(function (event) {
    drawCircle(event.offsetX, event.offsetY, 3, true);
   
});



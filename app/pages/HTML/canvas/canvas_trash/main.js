var canvas = document.getElementById('myCanvas');
var canvas2 = document.getElementById('myCanvas2');
var canvas3 = document.getElementById('myCanvas3');
var canvas4 = document.getElementById('myCanvas4');
var canvas5 = document.getElementById('myCanvas5');
var canvas6 = document.getElementById('myCanvas6');
var ctx = canvas.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var ctx4 = canvas4.getContext('2d');
var ctx5 = canvas5.getContext('2d');
var ctx6 = canvas6.getContext('2d');

ctx.fillRect(0, 0, 10, 10);
ctx.fillRect(110, 0, 20, 100);

for (var i = 0; i < 20; i++) {
    ctx.fillRect(i * 10, i * 10, 10, 10);
}
ctx.fillRect(10, 10, 10, 10);

ctx2.fillRect(75, 0, 50, 50); // head
ctx2.fillRect(95, 50, 10, 30);  // neckw    
ctx2.fillRect(20, 80, 150, 10); // heands
ctx2.fillRect(50, 90, 100, 60); //body
ctx2.fillStyle = 'PaleGreen ';
ctx2.fillRect(50, 150, 10, 60); // 0ne leg
ctx2.fillRect(140, 150, 10, 60); // secong leg

ctx2.strokeStyle = 'Green';
ctx2.lineWidth = 2;
ctx2.strokeRect(1, 1, 10, 200);


ctx3.lineWidth = 4;
// ctx3.beginPath();  
ctx3.strokeStyle = "Turquoise";
ctx3.moveTo(10, 10);
ctx3.lineTo(60, 60);
ctx3.moveTo(60, 10);
ctx3.lineTo(10, 60);
// ctx3.stroke();

//  heppy man
// ctx3.beginPath(); 
ctx3.lineWidth = 4;
ctx3.strokeStyle = 'red';
ctx3.strokeRect(90, 50, 20, 20);
ctx3.moveTo(100, 70);
ctx3.lineTo(100, 120);
ctx3.moveTo(75, 75);
ctx3.lineTo(100, 85);
ctx3.moveTo(100, 85);
ctx3.lineTo(125, 75);
ctx3.moveTo(100, 120);
ctx3.lineTo(80, 160);
ctx3.moveTo(100, 120);
ctx3.lineTo(120, 160);

ctx3.stroke();


ctx4.strokeStyle = 'blue';
ctx4.fillStyle = 'blue';
ctx4.beginPath();
ctx4.moveTo(100, 100);
ctx4.lineTo(100, 60);
ctx4.lineTo(130, 30);
ctx4.lineTo(160, 60);
ctx4.lineTo(160, 100);
ctx4.lineTo(100, 100);
ctx4.fill();
ctx4.stroke();

ctx5.lineWidth = 2;
ctx5.strokeStyle = 'green';

ctx5.beginPath();
ctx5.arc(50, 50, 20, 0, Math.PI / 2, false);
ctx5.stroke();

ctx5.beginPath();
ctx5.arc(100, 50, 20, 0, Math.PI, true);
ctx5.stroke();

ctx5.beginPath();
ctx5.arc(150, 50, 20, 0, Math.PI * 2, false);
ctx5.stroke();

var circle = function (x, y, radius, fillCircle) {
    ctx5.beginPath();
    ctx5.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx5.fill();
    } else {
        ctx5.stroke();
    }
};

ctx5.lineWidth = 4;
ctx5.strokeStyle = "Red";
circle(100, 100, 10, true);
ctx5.strokeStyle = "Orange";
circle(100, 100, 20, false);
ctx5.strokeStyle = "Yellow";
circle(100, 100, 30);
ctx5.strokeStyle = "Green";
circle(100, 100, 40);
ctx5.strokeStyle = "Blue";
circle(100, 100, 50);
ctx5.strokeStyle = "Purple";
circle(100, 100, 60);


//-------------------drawSnowman------------------

var snowMan = function (x, y, radius, fillCircle) {
    ctx6.beginPath();
    ctx6.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx6.fill()
    } else {
        ctx6.stroke();
    };
};
var drawSnowMan = function (x, y) {
    ctx6.fillStyle = "Black";
    ctx6.lineWidth = 4;

    snowMan(x + 50, y + 110, 40, false);
    snowMan(x + 50, y + 40, 30, false);
    snowMan(x + 40, y + 35, 5, true);
    snowMan(x + 60, y + 35, 5, true);

    snowMan(x + 50, y + 90, 5, true);
    snowMan(x + 50, y + 110, 5, true);
    snowMan(x + 50, y + 130, 5, true);

    ctx6.fillStyle = "Orange";
    snowMan(x + 50, y + 45, 5, true);
}

drawSnowMan(0, 0);
drawSnowMan(320, 100);
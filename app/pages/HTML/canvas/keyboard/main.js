var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 2;
    this.size = 10;
    this.xSpeed = 1;
    this.ySpeed = 0;
};

Ball.prototype.move = function () {
    this.x += this.xSpeed * this.speed;
    this.y += this.ySpeed * this.speed;

    // if (this.x < 0) {
    //     this.x = width;
    // } else if (this.x > width) {
    //     this.x = 0;
    // } else if (this.y < 0) {
    //     this.y = height;
    // } else if (this.y > height) {
    //     this.y = 0;
    // }
    // отскок от стены.. .
    if (this.x > width || this.x < 0) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y > height || this.y < 0) {
        this.ySpeed = -this.ySpeed;
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, this.size, true);
};

Ball.prototype.doAction = function (action) {
    if (action === 'up') {
        this.xSpeed = 0;
        this.ySpeed = -5;
    } else if (action === 'down') {
        this.xSpeed = 0;
        this.ySpeed = 5;
    } else if (action === 'right') {
        this.xSpeed = 5;
        this.ySpeed = 0;
    } else if (action === 'left') {
        this.xSpeed = -5;
        this.ySpeed = 0;
    } else if (action === 'stop') {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (action === 'lower') {
        if (this.size > 0) {
            this.size--;
        }
    } else if (action === 'bigger') {
        this.size++;
    } else if (action === 'faster') {
        this.speed++;
    } else if (action === 'slowley') {
        if (this.speed > 0)
            this.speed--;
    }
};

var ball = new Ball();

var keyAction = {
    32: 'stop',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    67: 'lower',
    86: 'bigger',
    90: 'faster',
    88: 'slowley'

};



$('body').keydown(function (event) {
    var action = keyAction[event.keyCode];
    // var speed = speeds[event.keyCode];
    ball.doAction(action);
    // ball.setSpeed(speed);
});

setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 30);


var keyNames;

$('body').keydown(function (event) {
    // console.log(event.keyCode);

});
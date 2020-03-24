var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Получаем ширину и высоту элемента canvas 
var width = canvas.width;
var height = canvas.height;

// Вычисляем ширину и высоту в ячейках
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;

// Устанавливаем счет 0
var score = 0;

// Рисуем рамку 
var drawBorder = function () {
    ctx.fillStyle = 'Grey';
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};

// drawBorder();

// Выводим счет игры в левом верхнем углу
var drawScore = function () {
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Счет: " + score, blockSize, blockSize);
};
// drawScore();

// Отменяем действие setInterval и печатаем сообщение «Конец игры» 
var gameOver = function () {
    // clearInterval(intervalId);
    playing = false;
    ctx.font = '60px Courier';
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры", width / 2, height / 2);
};
// gameOver();

// Рисуем окружность 
var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

// Задаем конструктор Block (ячейка) 
var Block = function (col, row) {
    this.col = col;
    this.row = row;
};

// Рисуем квадрат в позиции ячейки
Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
};

// Рисуем круг в позиции ячейки
Block.prototype.drawCircle = function (color) {
    var centerX = this.col * blockSize + blockSize / 2;
    var centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
};

// Проверяем, находится ли эта ячейка в той же позиции, что и ячейка otherBlock
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

// Задаем конструктор Snake (змейка)
var Snake = function () {
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];

    this.direction = 'right';
    this.nextDirection = 'right';
};

// Рисуем квадратик для каждого сегмента тела змейки
Snake.prototype.draw = function () {
    this.segments[0].drawSquare('LimeGreen');
    var isEventSegment = false;

    for (var i = 1; i < this.segments.length; i++) {
        if (isEventSegment) {

            this.segments[i].drawSquare('Yellow');
        } else {
            this.segments[i].drawSquare('Blue');
        }
        isEventSegment = !isEventSegment;
    }
};


// Создаем новую голову и добавляем ее к началу змейки, чтобы передвинуть змейку в текущем направлении
Snake.prototype.move = function () {
    var head = this.segments[0];
    var newHead;

    this.direction = this.nextDirection;

    if (this.direction === 'right') {
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === 'down') {
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === 'left') {
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === 'up') {
        newHead = new Block(head.col, head.row - 1);
    }

    if (this.checkCollision(newHead)) {
        gameOver();
        return;
    }

    this.segments.unshift(newHead);
    // this.segments.pop();
    if (newHead.equal(apple.position)) {
        score++;
        animationTime -= 5;
        apple.move();
    } else {
        this.segments.pop();
    }
};

// Проверяем, не столкнулась ли змейка со стеной или собственным телом
Snake.prototype.checkCollision = function (head) {
    var leftCollision = (head.col === 0);
    var topCollision = (head.row === 0);
    var rightCollision = (head.col === widthInBlocks - 1);
    var bottomCollision = (head.row === heightInBlocks - 1);

    var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

    var selfCollision = false;

    for (var i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }
    return wallCollision || selfCollision;
};



// Задаем следующее направление движения змейки на основе нажатой клавиши
Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === 'up' && newDirection === 'down') {
        return;
    } else if (this.direction === 'right' && newDirection === 'left') {
        return;
    } else if (this.direction === 'left' && newDirection === 'right') {
        return;
    } else if (this.direction === 'down' && newDirection === 'up') {
        return;
    }
    this.nextDirection = newDirection;
};

// Задаем конструктор Apple (яблоко)
var Apple = function () {
    this.position = new Block(10, 10);
};

// Рисуем кружок в позиции яблок
Apple.prototype.draw = function () {
    this.position.drawCircle('LimeGreen');
};

// Перемещаем яблоко в случайную позицию
Apple.prototype.move = function (occupiedBlocks) {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1);
    var randomRow = Math.floor(Math.random() * (heightInBlocks - 2) + 1);
    this.position = new Block(randomCol, randomRow);

    // Проверяем не передвинули лы мы яблоко в ячейку занятую сейчас телом змейки
    // for (var i = 0; i < occupiedBlocks.length; i++) {
    //     if (this.position.equal(occupiedBlocks[i])) {
    //       this.move(occupiedBlocks); 
    //       return;
    //     }
    // }

    //или

    // var index = occupiedBlocks.length - 1;
    // while ( index >= 0 ) {
    //   if (this.position.equal(occupiedBlocks[index])) {
    //     this.move(occupiedBlocks); // Вызываем метод move повторно
    //     return;
    //   }
    //   index--;
    // }
};


var apple = new Apple();
var snake = new Snake();
var time = 100;

// Запускаем функцию анимации через setInterval
// var intervalId = setInterval(function () {
//     ctx.clearRect(0, 0, width, height);
//     drawScore();
//     snake.move();
//     snake.draw();
//     apple.draw();
//     drawBorder();
// }, time);

// Запускаем функцию анимации через setInterval
var playing = true;
var animationTime = 100;
// Создаем функцию игрового цикла, вызывающую саму себя используя setTimeout
var gameLoop = function () {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();

    // Создаем функцию игрового цикла, вызывающую саму себя используя setTimeout
    if (playing) {
        setTimeout(gameLoop, animationTime)
    }
};
gameLoop();
// Преобразуем коды клавиш в направления
var directions = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

// Задаем обработчик события keydown (клавиши-стрелки)
$('body').keydown(function (event) {
    var newDirection = directions[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});

console.log(apple.direction);



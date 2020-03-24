var words = ['fail', 'true', 'null', 'function'];
var word = document.getElementById('word');
var answerAray = [];
var remainingLetters;
var guess;
var txt = document.getElementById('text');
var form = document.gallows;
var button = document.gallows.button;
var flip = document.getElementById('flip-box-inner');
var noLetter = document.getElementById('modalWindow');
var exit = document.getElementById('exit');
var again = document.getElementById('again');
var randomWord;
var sixTimes = 6;

function init() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    answerAray = [];
    for (var i = 0; i < randomWord.length; i++) {
        answerAray[i] = '_';
    }
    word.innerHTML = answerAray.join(' ');
    remainingLetters = randomWord.length;
    guess = '';
}
init();


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var drawSegment = function () {
    ctx.lineWidth = 4;

    if (sixTimes === 5) {
        ctx.strokeRect(90, 50, 20, 20);

    } else if (sixTimes === 4) {
        ctx.beginPath();
        ctx.moveTo(100, 70);
        ctx.lineTo(100, 120);
        ctx.stroke();

    } else if (sixTimes === 3) {
        ctx.moveTo(75, 75);
        ctx.lineTo(100, 85);
        ctx.stroke();

    } else if (sixTimes === 2) {
        ctx.moveTo(100, 85);
        ctx.lineTo(125, 75);
        ctx.stroke();
    } else if (sixTimes === 1) {
        ctx.moveTo(100, 120);
        ctx.lineTo(80, 160);
        ctx.stroke();
    } else if (sixTimes === 0) {
        ctx.moveTo(100, 120);
        ctx.lineTo(120, 160);
        ctx.stroke();
    };
};


function btnClick() {

    guess = txt.value;
    var isSameLetter = answerAray.indexOf(guess) > -1;
    if (guess == '') {
        alert('Введите хотя бы одну букву');
        form.reset();
    } else if (isSameLetter) {
        alert('Такая буква уже есть!');
        form.reset();
    } else if (guess.length !== 1) {
        alert('Введите только одну букву');
        form.reset();
    } else {
        var isRightLetter = randomWord.indexOf(guess) > -1;
        if (isRightLetter) {
            for (var j = 0; j < randomWord.length; j++) {
                if (randomWord[j] == guess) {
                    answerAray[j] = guess;
                    word.innerHTML = answerAray.join(' ');
                    remainingLetters--;
                    form.reset();
                }
            }
            if (remainingLetters === 0) {
                flip.classList.add('flip-box-hover');

            }
        } else {
            form.reset();
            noLetter.classList.add('hide');
            sixTimes--;
            drawSegment();
            setTimeout(function () {
                noLetter.classList.remove('hide');
            }, 2000);
        }

    }

};

exit.addEventListener('click', function () {
    document.write();
});
again.addEventListener('click', function () {
    flip.classList.remove('flip-box-hover');
    form.reset();
    init();
});
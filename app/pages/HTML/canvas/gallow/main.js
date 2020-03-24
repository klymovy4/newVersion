
var words = ['красота', 'улыбка', 'любовь', 'ночь', 'ночь', 'нос', 'арарат'];
var randomWord, remainingLetters, answerArray, guess;
var form = document.gallows;
var word = document.getElementById('here');
var btn = document.getElementById('btn');
var txt = document.getElementById('text');
var noLetter = document.getElementById('modalWindow');
var flip = document.getElementById('flip-box-inner');
var rightWord = document.getElementById('rightWord');
var again = document.getElementById('again');

// again.addEventListener('click', function(){
//     flip.classList.remove('flip-box-hover');
// });

function reload() {
    document.write();
}

function init() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log('randomWord', randomWord);

    answerArray = [];
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = '_ ';
    }
    console.log(answerArray);

    word.innerHTML = answerArray.join('');


    remainingLetters = randomWord.length;
    guess = '';

}

init();



function btnClick() {

    guess = txt.value;
    var IsSameLetter = answerArray.indexOf(guess) > -1;
    if (guess == '') {
        alert('Введите хотя бы одну букву!');

    } else if (guess.length !== 1) {
        alert('Введите только одну букву!');
        form.reset();
    } else if (IsSameLetter) {
        alert('Такая буква уже есть!');
        form.reset();

    } else {
        var isRightLetter = randomWord.indexOf(guess) > -1;
        if (isRightLetter) {
            for (var j = 0; j < randomWord.length; j++) {
                if (randomWord[j] == guess) {
                    answerArray[j] = guess;
                    word.innerHTML = answerArray.join('');
                    remainingLetters--;
                    form.reset();
                    console.log(randomWord[j]);
                    // return;

                }
            }
            if (remainingLetters === 0) {
                flip.classList.add('flip-box-hover');
                rightWord.innerHTML = '"' + randomWord + '"';
                // setTimeout(function () {
                //     сongratulations.classList.remove('сongratulations-hide');
                // }, 3000);

                init();
            }
        } else {
            form.reset();
            noLetter.classList.add('hide');
            setTimeout(function () {
                noLetter.classList.remove('hide');
            }, 3000);

        }
    }
};



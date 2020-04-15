
function randomInsult() {


    var randomBodyParts = ['изумительные 2 глаза', 'скулые скулы', 'прическа', 'шея', 'жопа', 'спина'];
    var randomAdjectiveWords = ['прекрасная', 'привлекательна', 'теплая', 'не могу подобрать слов', 'сочная'];
    var randomPartOfAnimals = ['брюхо кабана', 'лапа тигра', 'хобот слона', 'глаз шимпанзе', 'пиписка лямура'];
    var animals = ['кабана', 'кота', 'выдры', 'шимпанзе', 'бегемота', 'сутулой собаки'];

    var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
    var randomAdjectiveWord = randomAdjectiveWords[Math.floor(Math.random() * randomAdjectiveWords.length)];
    var randomPartOfAnimal = randomPartOfAnimals[Math.floor(Math.random() * randomPartOfAnimals.length)];
    var animal = animals[Math.floor(Math.random() * animals.length)];

    return 'Твоя ' + randomBodyPart + ' такая же ' + randomAdjectiveWord + ' как ' + randomPartOfAnimal + ' y ' + animal + '!!!';
}



// console.log(randomInsult);

// alert(randomInsult);
var btn = document.getElementById('btn');
// console.log(btn);
btn.addEventListener('click', showInsult);


function showInsult() {
    var txt = document.getElementById('txt');
    txt.innerHTML = randomInsult();
    // console.log(randomInsult);

};
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let endCorontine = new Date(2020, 4, 11)
const weekdayShort = { weekday: 'long', month: 'short' };
const options = { weekday: 'long', year: 'numeric', month: 'long' };

//  Time Main page===================================================


function addNull(n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n
    }
}
function getTime() {
    const date = new Date()
    return date.getHours() + ':' + addNull(date.getMinutes()) + ':' + addNull(date.getSeconds())
}

// склонение месяцев в зависимости от цифр
const declOfNum = (n, t) => t[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]]

const showResult = d => {
    const day = ["день", "дня", "дней"]
    return d + ' ' + declOfNum(d, day)
}
const finishCor = () => ((endCorontine - date) / 1000 / 60 / 60 / 24).toFixed(0)
const listenMusic = () => `<a target='_blank' style='color: #a6a7aa; text-decoration: underline' href='http://online-red.com/radio/record-chillout.html'> Послушай музыку</a>`

let showTime = setInterval(() => {
    // document.querySelector('#timeMain').innerHTML = getTime()
    document.querySelector('#timeMain').innerHTML = 'Сегодня ' + day + ' ' +
        date.toLocaleDateString("ru-RU", weekdayShort) +
        '. Самоизолируйся и просто жди. До конца карантина осталось ' + showResult(finishCor()) + '. ' + listenMusic();
}, 1000)


//  Time todo page===================================================

const timeTodo = document.getElementById('time_todo')
const time_covid = document.getElementById('time_covid')
timeTodo.innerHTML = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
time_covid.innerHTML = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

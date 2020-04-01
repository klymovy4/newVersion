let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
const weekday = { weekday: 'long' };
const weekdayShort = { weekday: 'short' };
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//  Time Main page===================================================

function getTime() {
    const date = new Date()
    return date.getHours() + ':' + addNull(date.getMinutes()) + ':' + addNull(date.getSeconds())
}

let showTime = setInterval(() => {
    document.querySelector('#timeMain').innerHTML = getTime()
}, 1000)


function addNull(n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n
    }
}

//  Time todo page===================================================

const timeTodo = document.getElementById('time_todo')
timeTodo.innerHTML = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

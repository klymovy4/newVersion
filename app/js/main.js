const cards = document.querySelectorAll('.cardRotate');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}



function startRotate(event) {
    const cardItem = this.querySelector('.myImg');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;

    cardItem.style.transform = 'rotateX(' + -
        (event.offsetY - halfHeight) / 20 + 'deg) rotateY(' +
        (event.offsetX - halfWidth) / 20 + 'deg)'
}

function stopRotate() {
    const cardItem = this.querySelector('.myImg');
    cardItem.style.transform = 'rotate(0)';
}
var download = document.getElementById('download');

//  Time ===================================================

function getTime() {
    const date = new Date()
    return date.getHours() + ':' + addNull(date.getMinutes()) + ':' + addNull(date.getSeconds())
}

let showTime = setInterval(() => {
    document.querySelector('#time').innerHTML = getTime()
}, 1000)


function addNull(n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n
    }
}
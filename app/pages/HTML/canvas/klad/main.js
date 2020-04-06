var width = 400,
    height = 400,
    // clicks = 0,
    clicksLimit = 20;

var getRandomPlace = function (size) {
    return Math.floor(Math.random() * size);
}

var target, clicks;
//  {
//     x: getRandomPlace(width),
//     y: getRandomPlace(height)
// };
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}



function init() {
    clicks = 0;
    target = {
        x: getRandomPlace(width),
        y: getRandomPlace(height)
    };
    console.log(target);
}
init();  




$('#map').click(function () {
    clicks++;
    if (clicks > clicksLimit) {
        alert('game over!!!!!!');
        // location.reload();
        init();
        return;
    }
    var distance = getDistance(event, target);
    var distanceHint = getDistanseHint(distance);
    $('#distance').text(distanceHint);
});

var getDistanseHint = function (distance) {
    var message;
    if (distance < 10) {
        alert('поздраввляем кликов было ' + (clicks - clicksLimit));
        init();
    } else {
        if (distance < 20) {
            message = 'hot осталось ходов ';
        } else if (distance < 30) {
            message = 'even not hot осталось ходов ';
        } else if (distance < 50) {
            message = 'cold осталось ходов ';
        } else if (distance < 100) {
            message = 'very cold осталось ходов ';
        } else if (distance < 200) {
            message = 'very very cold осталось ходов ';
        } else {
            message = 'freezzzz осталось ходов ';
        };
        return message + (clicks - clicksLimit);
    }

};

console.log(target);
// var distanceHint = getDistanseHint(distance);

// for (var r = 0; r < 3; r++) {
//     var hobby = prompt('Назови одно из своих хобби!');
//     $('.ttt').append('<p>' + hobby + '</p>');
// }

// for (var j = 0; j < 5; j++) {
//     $(".hell").fadeOut(1000);
// }

// var hell = $('.hell')
// $("h1").fadeOut(3000).fadeIn(2000);
// var txt = $("h2").slideUp(1000).slideDown(3000);

// var friends = ['Гоча', 'Ромчик', 'Арчи', 'Харжевская', 'Еще ктото'];
// for (var i = 0; i < friends.length; i++) {
//     $('body').append('<p>Лучшиий  ' + friends[i] + $(txt).append(' получается') + '</p>');
// }



// $('.hell').text('My friends!');
// var friends = ["Федя", "Хабиб", "Андрей", "Федя", "Хабиб", "Андрей", "Федя", "Хабиб", "Андрей"];
// for (var i = 0; i < friends.length; i++) {
//     fadeTime = (i + 1) * 1000;
//     $('.myFriends').append('<p>' + friends[i] + '</p>');
//     $('p').last().hide().fadeIn(fadeTime);
// }
// $('.myFriends p').prepend(' Best ');


// $("li").last().hide().fadeIn((i + 1) * 1000).css("background-color", "red");


var fadeTime;
for (var f = 0; f < 5; f++) {
    fadeTime = (f + 1) * 1000;
    $('h4').fadeOut(fadeTime / 2).fadeIn(fadeTime / 2);
}

// $(".hell").fadeTo(2000);

// for (var f = 0; f < 12; f++) {
//     fadeTime = (f + 1) * 1000;
//     $('#hakerMova1').fadeOut(fadeTime / 5).fadeIn(fadeTime / 3);
// }
//---------------------------------------offset--------

var topoffset = 0,
    rightofset = 0,
    intervalLength = 30,
    clicks = 0,
    direction = 'right';
// $(".ffff").offset({ left: rightofset, top: topoffset });
var moveHeading = function () {
    if (direction === 'right') {
        $('.ffff').offset({
            left: rightofset,
        });
        rightofset++;
        $('.ffff').text(' ➽');

        if (rightofset > 200) {
            rightofset = 200;  //  вот єто мне не понятно!!!!!!
            direction = 'down';
        }
    } else if (direction === 'down') {
        $('.ffff').offset({
            top: topoffset
        });
        topoffset++;
        $('.ffff').removeClass('rotateFfff');
        $('.ffff').text(' ▼');
        if (topoffset > 200) {
            topoffset = 200;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $('.ffff').offset({
            left: rightofset
        });
        rightofset--;
        $('.ffff').text('  ☚');
        if (rightofset < 0) {
            rightofset = 200;
            direction = 'top';
        }
    } else if (direction === 'top') {
        $('.ffff').offset({
            top: topoffset
        });
        topoffset--;
        $('.ffff').text('   ヅ ');
        $('.ffff').addClass('rotateFfff');
        if (topoffset < 0) {
            rightofset = 0;
            direction = 'right';
        }
    }
}
var intervalId = setInterval(moveHeading, intervalLength);
$('#btn').click(function () {
    clearInterval(intervalId);
    $(".ffff").offset({ left: 0, top: 0 });
});
//----------------------advansed offset---------------------
// var rotateFfff = function () {
//     $('.ffff').css('transform', 'rotate(180deg)');
// };


$('.ffff').click(function () {
    clearInterval(intervalId);
    intervalLength /= 5;
    clicks++;

    if (clicks > 4) {
        console.log(clicks);
        $('.ffff').text('Good');
        $('.ffff').removeClass('rotateFfff');
    } else {
        intervalId = setInterval(moveHeading, intervalLength);
    }
});






//-----------------------event------------------------

// var clickHandler = function (event) {
//     console.log('Click' + event.pageX + ' ' + event.pageY)
// };

// $('.tryEvent').click(clickHandler);

// //----------------------mouseMove---------------------

$('html').mousemove(function (event) {
    $('.mouseMove').offset({
        left: event.pageX,
        top: event.pageY

    });
});

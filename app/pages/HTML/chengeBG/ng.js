$('document').ready(function(){
  $('#main').click(function(){
    $('.sidenav').toggle();
    $('.sidenav').animate({right: '200px'});
  });
  $('.closebtn').click(function(){
    $('.sidenav').hide();
  })
});
// меняем фон сайта  надо сделать это с помощью джейквери
var colorArray = ['#31489c', '#ff365d','#01c1c1','#3a9c1b','#31a7e2','#e0e0e0'];
var i = 0;
function changeColor() {
  document.body.style.background = colorArray[i];
  i++;
  if(i>colorArray.length-1){
    i = 0;
  }
}
// alert(2+2);

function myFunction() {
  var 
      link = prompt('введите адрес сайта','http://facebook.com');
      if (link == null) return;
      text = prompt('введите текст ссылки');
      if (text == null) return;
      result = 'Ваша ссылка: <a href ="http://'+ link + '">'+ text + '</a>',
      paragr = document.getElementsByTagName('p')[0];
      // console.log(paragr);
      paragr.innerHTML = (result);
}
function foo() {
  // return;
  var rub = ' руб.';
      var number = prompt('введи сумму');
      if (number == null) return;
      var present = prompt('Введите процент который надо узнать от' + ' '+ number +' ' + rub);
      if (present == null) return;
      result = number * present / 100;

  number += rub;
  present += '%';
  result = 'от ' + number + ' ' + present +' ' + 'составляет = '+ result + rub;
  alert(result);
}


$(document).ready(function(){


$('#ezednevnik').click(function(){
  $('.home11').toggle(2000);
})
})
$(document).ready(function(){


var country = ['aus', 'de','rus', 'ua','us'],
    asossiation = ['jamiroqui','arbite','vyazemsk', 'lost virgine', 'very want'];


var x = document.getElementsByClassName('assosiation')[0],
  br = ' был.<br>',
  at = country[0]+' - '+asossiation[0]+br,
  de = country[1]+' - '+asossiation[1]+br,
  rus = country[2]+' - '+asossiation[2]+br,
  ua = country[3]+' - '+asossiation[3]+br,
  us = country[4]+' - '+asossiation[4]+br,
  
  result = at+de+rus+ua+us;
   x.innerHTML = (result);
})
  //  slide show ------------------------------------------------------------------

// var slid = document.getElementById('box');
// var image = [ 'bg1','bg2','bg3','bg4','bg5','bg6','bg7'];
// var i = image.lenght;
// // function for next slider
// function next(){
//   if(i<image.lenght){
//     i = i+1;
//   }else{
//     i=1;
//   }
//   slid.innerHTML = '<img src='+image[i-1]+'.jpg>';
// }


  // })
//     alert (result);


// var kvartira = ['tv', 'dvd','divan','pc','podokonnik','okno','tualet',
//             'vanna', 
//             'zercalo', 
//             'duhovka', 
//     kuhnya = ['stol',
//             'stul',
//             'kastruli',
//             'cherpak'
//           ],
//     zal = ['tumba',
  //           'kolonki',
  //           'kreslo'
  //         ],
         
  //   komnata = ['pk',
  //   'guitara',
  //   'kombik',
  //   'pulesos',
  //   'ventilator'
  // ], 
  // 'balcon', 
  // tualet = ['vanna','tolchok']];
  //    var i = kvartira.length;
  //   //  kvartira[i] = 'flovers';
  //   //     car[i] = 'тарпеда';

  //       var zzz = kvartira.push('flowers'); 
      // //  add last 
      //       cartype.unshift('еще 2 педали');
      //       color.unshift('black','orange');
      //       // add first
      // var zzz2 = color.pop();
      // // remove last
      // var zzz3 = cartype.shift();
      // // remove fist element
      // var zzz3 = cartype.splice(3,1);
      // // любой елемент можно редактировать 
      // car.splice(3,0,'ggg','fff');
      // car.splice(4,1,'filtr');
      // car.splice(3,1,'nasos');
      // var masiv = cartype[2];
      // cartype[2] = ['da','net']; 
      // var v = cartype[4];


//     console.log(myNewArry);
//     console.log(car);
//     console.log(car); 
// console.log(cartype.length - 2);
// console.log(car.length - 1);
// console.log('this is ' + zzz);
// console.log(zzz2);
// console.log(zzz3);
// console.log(v); 
// console.log(car.toString()); 
// // делает строку
// console.log(car.join('+++'));
// // разделяет елементы масива
// console.log(car.reverse());
// // переварачивает елементы
// console.log(car.sort()); 
// // сортирует 
// console.log(car.sort(function(a,b){return a>b}));
// console.log(car[4]);

// console.log(kvartira);
// var balcon = ['musor', 'instrument', 'gvozdi', 'pepelnica'],
//     koridor = ['veshalka','holodilnic','zerclo'];
//     kvartira = kvartira.concat(balcon, koridor);

//     // var myNewArry = kvartira.slice(2,6);
//     // console.log(myNewArry);
// // console.log(myNewArry);
// console.log(kvartira);

// var newKar = kvartira.slice(17,21);
// console.log(kvartira);
// console.log(newKar);
// console.log(kvartira);



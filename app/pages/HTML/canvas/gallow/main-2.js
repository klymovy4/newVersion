var simpleText = document.getElementById('simple-text');
var sayHello = function(howManyTimes, name){
        for(var i=0; i<howManyTimes; i++){
            // simpleText.innerHTML = i + name;
            document.write(i + name);
          
            console.log(i + 'asd');
        }
     
    };

    sayHello(4, '.');

var double  = function(number){
   return number * 2;
   
}
// console.log(double(3) + double(12));
// console.log(double(double(4)));


var pickUpRandomWordds = function(wordd){
    return wordd[Math.floor(Math.random() * wordd.length)];
};
var randomWordds = ['цветок','планета','компьютер','червяк','куськина мать'];
pickUpRandomWordds(['fff','ddd','sss','aaa']);


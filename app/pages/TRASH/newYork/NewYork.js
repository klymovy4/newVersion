// ---------------------------кнопка-signUp-вызывает--firstRegistrForm--------------------------------------------------------
$('#SignUp').click(function(){
    $('.firstRegistrForm').addClass('firstRegistrFormSlide');
    $('.fourthRegistrForm').removeClass('fourthRegistrFormSlide');
    })
// ------------------Если первая форма заполнена кнопка меняет цвет на чёрный и активируется--------------------------------------------------------------------
function check(){
    // var all1 = ($('#name').val() || $('#email').val() || $('#ageDate').val() || $('#ageMonth').val() || $('#ageYear').val() || $("input[name='gender']").is(':checked'));
   if($('#name').val() && $('#email').val()){
      $('#vernoForm1').removeAttr('disabled', false);
      $('#vernoForm1').css('color', 'black');
    };  
    }; 
 // ------------------эта функция жатия на кнопку первой формы, которая скрывает первую показывая вторрую----------------
 $('#vernoForm1').click(hideLoginForm);
// -----------------------функция скрывает первую форму и показывает вторую----------------------------------------------
function hideLoginForm() {
    $('.firstRegistrForm').removeClass('firstRegistrFormSlide');
    $('.secondRegistrForm').addClass('secondRegistrFormSlide');
    };
// ------------функции-для второй регистационной формы-------------------------------------------------------------
// ------------------Если вторая форма заполнена кнопка меняет цвет на чёрный и активируется-------------
function change2Form(){
    if($("input[name='gender']").is(':checked') && $('#myDate').val()){
         $('#vernoForm2').removeAttr('disabled', false);
        $('#vernoForm2').css('color', 'black');  
    }
};
// ------------------эта функция жатия на кнопку второй формы, которая скрывает вторую показывая третью-------------
$('#vernoForm2').click(hideSecondLoginForm);
// -----------------------функция скрывает вторую форму и показывает третью-----------------------------------------
function hideSecondLoginForm() {
    $('.secondRegistrForm').removeClass('secondRegistrFormSlide');
    $('.thirdRegistrForm').addClass('thirdRegistrFormSlide');
    };
// ------------функции-для-третьей-регистационной-формы-------------------------------------------------------------
// ------------------Если третья форма заполнена кнопка меняет цвет на чёрный и активируется------------------------
function change3Form(){
   if($('#phone').val()){
      $('#vernoForm3').removeAttr('disabled', false);
      $('#vernoForm3').css('color', 'black');
    };  
    }; 
// ------------------эта функция жатия на кнопку третьей формы, которая скрывает третью показывая четвёртую---------
$('#vernoForm3').click(hideThirdLoginForm);
// -----------------------функция скрывает третью форму и показывает четвёртую-----------------------------------------
function hideThirdLoginForm() {
    $('.thirdRegistrForm').removeClass('thirdRegistrFormSlide');
    $('.fourthRegistrForm').addClass('fourthRegistrFormSlide');
    };
// ------------функции-для-четвёртой-регистационной-формы----------------------------------------------------------
// ------------------Если четвёртая форма заполнена кнопка меняет цвет на чёрный и активируется------------------------
function change4Form(){
   if($('#nickname').val() && $('#password').val()){
      $('#vernoForm4').removeAttr('disabled', false);
      $('#vernoForm4').css('color', 'black');
    };  
    }; 
// -----эта функция жатия на кнопку четвёртой формы, которая скрывает четвёртую переходя на другую страницу или форму---------
$('#vernoForm4').click(hideFourthLoginForm);

// -----------------------функция скрывает четвёртую форму и показывает следующий кадр-----------------------------------------
function hideFourthLoginForm() {
    $('.fourthRegistrForm').removeClass('fourthRegistrFormSlide');
    $('#SignUp').hide();
    $('#LogIn').hide();
    $('.slider').animate({left: '0'});
    };
//------------------Если-нажать-logIn-откроется только четвертая форма----------------------------

    $('#LogIn').click(function(){
        $('.fourthRegistrForm').addClass('fourthRegistrFormSlide');
        $('.firstRegistrForm').removeClass('firstRegistrFormSlide');

    });










// ---------------------------эта функция преподносит текст над инпутом----------------------
$('.userinput').focus(function(){
    $(this).parent().addClass('focus');  //не понял почему this...
}).blur(function(){
    if($(this).val()==''){
        $(this).parent().removeClass('focus');
    }
})
// ---------------------------эта функция делает время----------------------
function startTime()
{
var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML="Time: "+h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}


$(document).ready(function(){


$('#btn').click(function(){
    // alert(123);
     $('.slider').animate({left: '0'});
});
})

// if('firstRegistrFormSlide' || 'fourthRegistrFormSlide'){

// }
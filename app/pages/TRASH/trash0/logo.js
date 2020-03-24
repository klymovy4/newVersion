$(document).ready(function () {
    // alert(234);
    $('.val').keyup(function () {
        var val = Number($('#val1').val());
        var val1 = Number($('#val2').val());
        // val = number(val); //  эта строчка делает из строчки число и по ходу наоборот.
        // val1 = number(val1);
        // $('#check2').html(val);
        // $('#check3').html(val1);
        var res = val + val1;
        $('#res1').html(res);

    })
    // alert(234);
});
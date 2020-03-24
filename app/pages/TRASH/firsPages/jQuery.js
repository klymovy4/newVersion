  jQuery('document').ready(function(){
 
    jQuery('input').on('keyup',function() {

      var value1, value2, value3;
    value1 = jQuery('#val1').val();
    value2 = jQuery('#val2').val();

    
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);
    value3 = value1 + value2; 
    value4 = value1 * value2;
    value5 = value1 - value2; 
    value6 = value1 / value2;
jQuery('#resultat12').html(value3);
jQuery('#resultat34').html(value4);
jQuery('#resultat56').html(value5);
jQuery('#resultat78').html(value6);
     }); 
	   $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
	$("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
	  
$("#show").click(function(){
        $('show').show();
    });
     var pogoda = 'гавно';
     var time = 'день';

	 if (false) {
		 if ((pogoda == 'солнечно' || pogoda =='облачно') && time == 'день'){
			 alert('Отлично идём (:');
			}else if(pogoda == 'влажно' && time == 'день'){
				alert('бери зонт, намочишь киску. На улице же ' + pogoda+ '.');
			}
			else{
				if (time == 'день'){
					alert('Ни куда не идём'+'\n' + 'Дома посижу.'+'\n' +'на улице же '+ pogoda +'.');
				}else {
					var message = 'Какой гулять, ночь!';
					if (pogoda != 'дождь') {
						message = message + 'да еще и дождь ' + pogoda + '.';
					}
					alert(message);
				}
				
			}
	 }

	   var stalin;
	 if (stalin == 'джугашвили'){
		   alert('good');
	   }
	   
	   $('#fuck').click(function(){
		   window.location = 'pag2.html';
	   });
	
		$('.hui').css('background','red');
		setTimeout(function() {
			$('#fuck').css('background','green');
		}, 5000);
  
$('#answer1').click(function(){
		   $(block).hide();
		   $(block1).show();
});	
$('#answer2').click(function(){
	$(block).hide();
	$(blockfake2).show();



});

	   
	$('#answer2').click(function(){
		   //window.location = 'Q2.html';   
	});
	$('#answerq22').click(function(){
		window.location = 'q22.html';
	});
	
	
		$('#answer4').click(function(){
			$(block).hide();
			$(block1).show();
		});
		$('#answerq24').click(function(){
			$(blockfake2).hide(1000);
			$(blockfake3).show();
		});
		$('#answerq11').click(function(){
			$(block1).hide();
			$(block3).show();
		});
		$('#answerq333').click(function(){
			$(svoy).fadeIn();
		});
		$('#dzuga').click(function(){
			$(block3).hide();
			$(block4).show();
		});
	//var access = parseInt("11000", 2); // получаем число из строки
//alert( access ); // 24, число с таким 2-ным представлением
//var access2 = access.toString(2); // обратно двоичную строку из числа
//alert( access2 ); // 11000


    $("#asd").click(function(){
        //$("#test").hide();
		$(asd).hide();
    });
  $("#answer3").click(function(){
		$(answer3).hide(1000);
  });
  $("p").dblclick(function(){
        $(as).hide();
    });
	/*$("#p1").mouseenter(function(){
        alert("Сказано же. Не наводи сюда мышкой!");*/
    
	 $("button").click(function(){
		$(answer).hide();
		});
		$("#flip1").click(function(){
			$("#panel1").slideToggle("slow");
		});
		 $('#kill').click(function(){
			$(test).hide();
			});
			
				
				$("#proverka").click(function(){
					$("#proverochra").slideToggle("slow");
				});
				;
			
				$("#answerq23").click(function(){
					$(answerq23).hide();
				});
				
			
			
					
});


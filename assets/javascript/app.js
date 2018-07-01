var wincount = 0;
var loscount = 0;
var test0;
var test1;
var test2;
var test3;
//START BUTTON
$('#secondpage').hide();
$('.well').hide();
$('#butt').on('click', function(){
   $('#butt').hide();
   $('#secondpage').show();
   

});
//Radio Buttons
$('.buttonOne').on('click', function(){
    // test1 = $('input:radio[name=qOne]:checked').val();   
    test0 = $('input:radio[name=qOne]:checked').val();      
});
//NEXT QUESTION
$('.buttonTwo').on('click', function(){
    // test2 = $('input:radio[name=qTwo]:checked').val();
    test1= $('input:radio[name=qTwo]:checked').val();
});
//NEXT QUESTION
$('.buttonThree').on('click', function(){
    test2 = $('input:radio[name=qThree]:checked').val();
});
function checkfalse(){
    if(test0 == 'false' && test1 == 'false' && test2 =='false'){
        loscount = loscount + 3;
    }else if(test0 == 'false' && test1 =='false' || test0=='false' && test2=='false' || test1 =='false' && test2=='false'){
        loscount = loscount + 2;
    }else if(test0=='false' || test1=='false' || test2=='false'){
        loscount = loscount + 1;
    }

}
$('#done').on('click',function(){
        if(test0 == 'true' && test1 == 'true' && test2 =='true'){
            wincount= wincount + 3;
        }else if(test0 == 'true' && test1 =='true' || test0=='true' && test2=='true' || test1 =='true' && test2=='true'){
            wincount = wincount + 2;
        }else if(test0=='true' || test1=='true' || test2=='true'){
            wincount= wincount + 1;
        }
        checkfalse()
        showfinalpage();
        console.log(wincount);
        console.log(loscount);
        
        
    
    
 
});
function showfinalpage(){
    $('#secondpage').hide();
    $('.well').show();
    $('#correctAns').text("Correct Answers:" + wincount);
    $('#incorrectAns').text("Inorrect Answers:" + loscount);
}

//TIMER

var timeLeft = 33;
//var elem = document.getElementById('timerdiv');
var timediv = $('#timerdiv');
var timerId = setInterval(countdown, 1000);

function countdown() {
  if ((timeLeft-3) == 0) {
    clearTimeout(timerId);
    timediv.text(0 + ' Out of time');
    showfinalpage();
   
  } else {
    timediv.text((timeLeft-3) + ' seconds Left');
    timeLeft--;
  }
}



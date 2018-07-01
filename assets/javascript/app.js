var wincount = 0;
var test0;
var test1;
var test2;
var test3;
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
$('#done').on('click',function(){
        if(test0 == 'true' && test1 == 'true' && test2 =='true'){
            wincount= wincount + 3;
        }else if(test0 == 'true' && test1 =='true' || test0=='true' && test2=='true' || test1 =='true' && test2=='true'){
            wincount = wincount + 2;
        }else if(test0=='true' || test1=='true' || test2=='true'){
            wincount= wincount + 1;
        }
        console.log(wincount);
        
        
    
    
    // if(test1){
    //     wincount++;
    //     console.log(wincount);
    // }

});

console.log(wincount);

//TIMER
$('#secondpage').hide();
$('#butt').on('click', function(){
   $('#butt').hide();
   $('#secondpage').show();
   

});



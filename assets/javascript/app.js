var wincount = 0;
var test = [test1,test2,test3];
var test1;
var test2;
var test3;
$('.buttonOne').on('click', function(){
    // test1 = $('input:radio[name=qOne]:checked').val();   
    test[0] = $('input:radio[name=qOne]:checked').val();   
    
});

//NEXT QUESTION

$('.buttonTwo').on('click', function(){
    // test2 = $('input:radio[name=qTwo]:checked').val();
    test[1]= $('input:radio[name=qTwo]:checked').val();
});

//NEXT QUESTION

$('.buttonThree').on('click', function(){
    test[2] = $('input:radio[name=qThree]:checked').val();
});

$('#done').on('click',function(){
    
    for(var i = 1 ; i < 4; i++){;
        if(test[i]){
            wincount++;
        }
    }
    
    // if(test1){
    //     wincount++;
    //     console.log(wincount);
    // }

})




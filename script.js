// variables
var count= 0;
var time = 60;
var marks = 0;
var answer = [];
var timer;
// start game function
$(document).ready(function(){
    $('#finish').hide();
    $('#result').hide();
    $('#options').hide();
})
buttonsOpt();
function buttonsOpt(){
if(count > 0){
    $('prev').show();
    if(count == 4){
        $('#next').hide();
        $('#prev').show();
    }else{
        $('#next').show();
    }
}else{
    $('#prev').hide();
}};

function questionAdd(data,i){
$('#question').text(data[i.Quiz])
$('#options1').text(data[i.option1])
$('#options2').text(data[i.option2])
$('#options3').text(data[i.option3])
$('#options4').text(data[i.option4])
$('#number').text(Number(i+1));
}






// 
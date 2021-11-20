
function scrollUp(){
    const pageheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / pageheight)-1) * pageheight)
    }, 900);
};

function scrollDown(){
    const pageheight = $('.test').height();
    console.log('aaaaa');
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / pageheight)+1) * pageheight)
    }, 900);
    console.log('ccccc');
};

$(function(){
    $('.next').click(function(event){
        const divs = $(this).parent().prev().children();
        console.log('11111');
        const inputs = divs.find('input:checked');
        console.log('22222');
        if(inputs.length < 1) {
            console.log('33333');
            alert('문항이 선택되지 않았습니다.');
            return false;
            
        }
        console.log('44444');
        event.preventDefault();
        console.log('55555');
        scrollDown();
    });

    $('.prev').click(function(event){
        event.preventDefault();
        scrollUp();
    });

    $("#form").submit(function() {
        const radios = $('input[type=radio]:checked');
        if(radios.length < 3) {
            alert("문항이 선택되지 않았습니다.");
            return false;
        }
        alert('설문제출완료 ! ')
        return true;
    });

    $("html, body").animate({
        scrollTop: 0});
});
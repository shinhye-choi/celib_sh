
function scrollUp(){
    const pageheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / pageheight)-1) * pageheight)
    }, 900);
};

function scrollDown(){
    const pageheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / pageheight)+1) * pageheight)
    }, 900);
};

$(function(){
    $('.next').click(function(event){
        const divs = $(this).parent().prev().children();
        const inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
            
        }
        event.preventDefault();
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
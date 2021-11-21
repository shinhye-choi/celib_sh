function scrollUp(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 10);
    $('html, body').animate({
        scrollTop: top - vheight - margin_top
    }, 500);
};

function scrollDown(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 10);
    $('html, body').animate({
        scrollTop: vheight + top - margin_top
    }, 500);
}

$(function(){
    $('.next').click(function(e){
        let divs = $(this).parent().prev().children();
        let present_top = $(this).parent().parent()[0].offsetTop;
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown(present_top);
    });

    $('.prev').click(function(e){
        let present_top = $(this).parent().parent()[0].offsetTop;
        e.preventDefault();
        scrollUp(present_top);
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
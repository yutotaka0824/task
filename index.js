'use strict';
function sampleImg01() {
    document.area01.src = 'pug/inc/sec05_works_02.png';
}

function sampleImg01() {
    document.area02.src = 'pug/inc/sec05_bg_works01.png';
}

function sampleImg01() {
    document.area03.src = 'pug/inc/sec05_works_02.png';
}

function sampleImg01() {
    document.area04.src = 'pug/inc/sec05_works_02.png';
}


$(function() {
    const topBtn = $('.sec02__btn__consul');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});

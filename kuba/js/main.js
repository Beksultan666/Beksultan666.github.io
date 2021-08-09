new WOW().init();
wow = new WOW({
    boxClass: 'wow',
    animate: 'animated',
    offset: 0,
    mobile: false,
})
wow.init();

$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-rigth.svg" alt=""></button>',
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});
jQuery(document).ready(function($) {

	//menu action
    $('.hamburger').click(function(e) {
        e.stopPropagation();
        $(this) .toggleClass('is-active');
        $('.mobile-menu') .slideToggle();
    });
    $('.close_menubtn').click(function(e) {
        e.stopPropagation()
        $('#menu') .removeClass('is-active');
    });
    // dropdown menu
    $('ul.nav li.has-children').hover(function() {
        $(this).find('.sub').stop(true, true).delay(100).fadeIn(200);
    }, function() {
        $(this).find('.sub').stop(true, true).delay(100).fadeOut(200);
    });

    // Anchor Scroll
	$(document).on('click','.general_nav .navigation .nav-item a.my-link[href^="#"]',function(e) {
        $('.hamburger').removeClass('is-active');
        $('.general_nav').removeClass('is-active');
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    //SLICK SLIDER
    $('#mySlider-1 .slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinete: false,
        appendArrows: $('#mySlider-1 .slider-nav')
    });

    //
    $('.group label').click(function (e) {
        $(this).next('.form-control').trigger('focus');
        $(this).hide();
    });

    $('.group .form-control').blur(function (e) {
        if ($(this).val().length <= 0){
            $(this).prev('label').show();
        }
    });

    $('.group .form-control').focus(function (e) {
        $(this).prev('label').hide();
    });

    $('.phone-input').mask('+38 (999) 999 99 99');


});

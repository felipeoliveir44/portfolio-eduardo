// Script menu // 
$(document).ready(function () {
    $('.button').click(function () {
        if ($(this).hasClass('expand')) {
            $('.ul-navbar').slideUp(function () {
                $('.button').removeClass('expand');
                $('.xis-menu').removeClass('expand')
            });
        } else {
            $(this).addClass('expand');
            setTimeout(function () {
                $('.xis-menu').addClass('expand');
                $('.ul-navbar').stop().slideDown();
            }, 200);
        }
    });
});



window.sr = ScrollReveal({
    reset: true
});
sr.reveal('.textoimg', {
    duration: 2000
});

sr.reveal('.sobre-mim', {
    duration: 2000
});

sr.reveal('h2', {
    duration: 2000
});

sr.reveal('h4', {
    duration: 2000
});
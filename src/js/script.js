$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-nav').toggleClass('_active');
        $('body').toggleClass('lock');
    });
    $('.catalog-burger').click(function(event) {
        $('.catalog-burger, .saitbar').toggleClass('_active');
    });
    $('.catalog-text').click(function(event) {
        $('.catalog-burger, .saitbar').toggleClass('_active');
    });
    $('.production-block').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1161,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 591,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});
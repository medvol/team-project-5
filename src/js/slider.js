$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots:false,
        speed: 1250,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        touchTreshold: 10,
        asNavFor: '.slider-small',
        infinite:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
        
    });
    $('.slider-small').slick({
        arrows: false,
        slidesToShow: 7,
        asNavFor: '.slider',
        speed: 1250,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        touchTreshold: 10,
        infinite:true,
        variableWidth: true,
        
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    infinite:true,
                    
                }
            }
        ]
    
    });
}); 
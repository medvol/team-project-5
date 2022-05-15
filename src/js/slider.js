$(document).ready(function () {
    $('.slider').slick({
        dots:true,
        speed: 1250,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        touchTreshold: 10,
        
    });
}); 
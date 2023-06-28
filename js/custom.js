$(document).ready(function () {
    $('.mob-sub-menu').hide()

    $('.toggle').click(function () {
        $('.mob-menu').toggleClass('open close')
        $('.toggle > i').toggleClass('fa-bars fa-xmark')
    })
    $('.mob-menu-bar li a').click(function () {
        $(this).next('.mob-sub-menu').slideToggle()
    })

    $('.option').hide()
    $('.toggle-1').click(function () {
        $(this).next('.option').toggle()
        $(this).find('i').toggleClass('fa-angle-down fa-angle-up')
    })


})


$('#slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']

})
$('#slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    nav: false,
    dotsEach:true,
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }

    }
})
$('#slider3').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 5
        }

    }

})

$('#slider4').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#slider5').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        767: {
            items: 3
        },
        1025: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
})
$('#slider6').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
})

$('#slider7').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    nav: false,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']

})
$('#slider8').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']

})
$(window).scroll(function () {
    h = $(window).scrollTop();
    if (h > 100) {
        $('header').addClass('sticky');
        $('.footer-icon').fadeIn(500);
    }
    else {
        $('header').removeClass('sticky');
        $('.footer-icon').fadeOut(100);
    }
})
$('.footer-icon').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500);
})



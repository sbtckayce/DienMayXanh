$('.product-tivi-main-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 5,
           
        }
    }
})
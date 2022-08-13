let slider = document.querySelector('.swiper');
let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper (slider, {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        
            slidesPerView: 1.25,
            });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 600) {
        slider.dataset.mobile = 'false';

        mySwiper.destroy();
    }
}

mobileSlider();


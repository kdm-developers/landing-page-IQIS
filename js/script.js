document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".carousel-swiper", {
        loop: true,
        autoHeight: true,
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
    });
});

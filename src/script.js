var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

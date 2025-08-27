const swiper = new Swiper(".swiper", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

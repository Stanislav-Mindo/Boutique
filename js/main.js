"use strict"

const swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centerSlide: 'true',
    grabCursor: 'true',
    fade: 'true',
    loop: true,  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },    
      968: {
        slidesPerView: 4,
      },
    },
  });

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    }
}
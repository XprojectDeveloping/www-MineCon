const html = document.querySelector("html");
html.classList.add("hidden");
window.addEventListener("load", () => {
  const preLoader = document.querySelector(".pre-loader");
  if (preLoader) {
    setTimeout(() => {
      html.classList.remove("hidden");
      preLoader.classList.add("hidden");
    }, 2000);
  } else {
    console.error("Pre-loader element not found");
  }
});

let burgerMenuButton = document.querySelector(".burger-button");
let burgerMenuNavOpen = document.querySelector(".burger-menu-nav");
let burgerMenuNavClosed = document.querySelector(".burger-closed");
let mobileOverlay = document.querySelector(".mobile-overlay");
let htmlDoc = document.querySelector("html");

burgerMenuButton.addEventListener("click", () => {
  burgerMenuNavOpen.classList.add("open");
  mobileOverlay.classList.add("active");
  htmlDoc.classList.add("overflowing");
});

burgerMenuNavClosed.addEventListener("click", () => {
  burgerMenuNavOpen.classList.remove("open");
  mobileOverlay.classList.remove("active");
  htmlDoc.classList.remove("overflowing");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,

  breakpoints: {
    380: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    560: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1299: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

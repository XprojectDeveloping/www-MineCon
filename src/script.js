// Получаем элемент html и добавляем класс "hidden" для скрытия содержимого до загрузки страницы
const html = document.querySelector("html");
html.classList.add("hidden");

// Ждем загрузки страницы
window.addEventListener("load", () => {
  // Получаем элемент pre-loader
  const preLoader = document.querySelector(".pre-loader");
  if (preLoader) {
    // Убираем pre-loader через 2 секунды после загрузки страницы
    setTimeout(() => {
      html.classList.remove("hidden");
      preLoader.classList.add("hidden");
    }, 2000);
  } else {
    // Выводим ошибку, если элемент pre-loader не найден
    console.error("Pre-loader element not found");
  }
});

// Получаем элементы для управления бургер-меню
let burgerMenuButton = document.querySelector(".burger-button");
let burgerMenuNavOpen = document.querySelector(".burger-menu-nav");
let burgerMenuNavClosed = document.querySelector(".burger-closed");
let mobileOverlay = document.querySelector(".mobile-overlay");
let htmlDoc = document.querySelector("html");

// Открытие бургер-меню
burgerMenuButton.addEventListener("click", () => {
  burgerMenuNavOpen.classList.add("open"); // Добавляем класс для отображения меню
  mobileOverlay.classList.add("active"); // Активируем затемнение фона
  htmlDoc.classList.add("overflowing"); // Блокируем прокрутку страницы
});

// Закрытие бургер-меню
burgerMenuNavClosed.addEventListener("click", () => {
  burgerMenuNavOpen.classList.remove("open"); // Убираем класс для скрытия меню
  mobileOverlay.classList.remove("active"); // Деактивируем затемнение фона
  htmlDoc.classList.remove("overflowing"); // Разблокируем прокрутку страницы
});

// Инициализация Swiper для слайдера
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Количество видимых слайдов
  spaceBetween: 1, // Расстояние между слайдами
  loop: true, // Зацикливание слайдов
  autoplay: {
    delay: 2500, // Задержка между автопрокруткой
    disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии
  },
  breakpoints: {
    // Настройки для разных размеров экрана
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

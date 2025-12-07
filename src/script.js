const html = document.querySelector("html");
html.classList.add("hidden");
window.addEventListener("load", () => {
  const preLoader = document.querySelector(".pre-loader");
  if (preLoader) {
    setTimeout(() => {
      html.classList.remove("hidden");
      preLoader.classList.add("hidden");
    }, 5000);
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

class MultiCarousel {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector(".multi-carousel__track");
    this.slides = Array.from(this.track.children);

    this.currentIndex = 0;
    this.slidesToShow = this.getSlidesToShow();
    this.totalSlides = this.slides.length;
    this.autoplayDelay = 5000;
    this.autoplayId = null;

    this.startAutoplay();

    window.addEventListener("resize", () => {
      const newSlidesToShow = this.getSlidesToShow();
      if (newSlidesToShow !== this.slidesToShow) {
        this.slidesToShow = newSlidesToShow;
        this.moveToIndex(this.currentIndex);
      }
    });

    this.setupSwipe();
  }

  getSlidesToShow() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  getMaxIndex() {
    return Math.max(0, this.totalSlides - this.slidesToShow);
  }

  moveToIndex(index) {
    this.currentIndex = Math.max(0, Math.min(index, this.getMaxIndex()));
    const percent =
      this.totalSlides <= this.slidesToShow
        ? 0
        : (this.currentIndex / (this.totalSlides - this.slidesToShow)) * 100;

    this.track.style.transform = `translateX(-${percent}%)`;
  }

  next() {
    if (this.currentIndex < this.getMaxIndex()) {
      this.moveToIndex(this.currentIndex + 1);
    } else {
      this.moveToIndex(0); // зацикливаем
    }
  }

  startAutoplay() {
    this.autoplayId = setInterval(() => this.next(), this.autoplayDelay);
  }

  restartAutoplay() {
    clearInterval(this.autoplayId);
    this.startAutoplay();
  }

  setupSwipe() {
    let startX = 0;
    let isDragging = false;

    const handleStart = (x) => {
      startX = x;
      isDragging = true;
      clearInterval(this.autoplayId);
    };

    const handleEnd = (x) => {
      if (!isDragging) return;
      isDragging = false;

      const diff = startX - x;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else if (this.currentIndex > 0) {
          this.moveToIndex(this.currentIndex - 1);
        }
      }
      this.startAutoplay();
    };

    this.track.addEventListener(
      "touchstart",
      (e) => handleStart(e.touches[0].clientX),
      { passive: true }
    );
    this.track.addEventListener("touchend", (e) =>
      handleEnd(e.changedTouches[0].clientX)
    );

    this.track.addEventListener("mousedown", (e) => {
      handleStart(e.clientX);
      e.preventDefault();
    });

    window.addEventListener("mouseup", (e) => handleEnd(e.clientX));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".multi-carousel");
  if (carousel) new MultiCarousel(carousel);
});

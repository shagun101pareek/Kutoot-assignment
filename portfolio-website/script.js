window.history.scrollRestoration = "manual";

window.onload = function () {
  window.scrollTo(0, 0);
};
const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel) => {

  const slides = carousel.querySelectorAll(".carousel-slide");

  const prevBtn = carousel.querySelector(".carousel-nav-prev");
  const nextBtn = carousel.querySelector(".carousel-nav-next");

  let current = Number(carousel.dataset.carouselInitial) || 0;

  function updateSlides() {

    slides.forEach((slide, index) => {

      slide.classList.remove(
        "is-active",
        "is-prev",
        "is-next",
        "is-hidden"
      );

      if (index === current) {

        slide.classList.add("is-active");

      }

      else if (
        index === (current - 1 + slides.length) % slides.length
      ) {

        slide.classList.add("is-prev");

      }

      else if (
        index === (current + 1) % slides.length
      ) {

        slide.classList.add("is-next");

      }

      else {

        slide.classList.add("is-hidden");

      }

    });

  }

  function nextSlide() {

    current = (current + 1) % slides.length;

    updateSlides();

  }

  function prevSlide() {

    current = (current - 1 + slides.length) % slides.length;

    updateSlides();

  }

  nextBtn.addEventListener("click", nextSlide);

  prevBtn.addEventListener("click", prevSlide);

  /* Auto slide */

  setInterval(() => {

    nextSlide();

  }, 7000);

  updateSlides();

});
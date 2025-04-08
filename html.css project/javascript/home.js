document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");

    function moveSlide(step) {
        currentIndex = (currentIndex + step + slides.length) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener("click", () => moveSlide(-1));
    nextButton.addEventListener("click", () => moveSlide(1));

    setInterval(() => moveSlide(1), 3000);
});

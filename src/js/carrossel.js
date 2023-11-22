const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }
    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? "block" : "none";
    });
}

prevButton.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
});

showSlide(currentIndex);

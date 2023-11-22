let currentIndex = 0;
const items = document.querySelectorAll('.product');
const totalItems = items.length;

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const newTransformValue = - currentIndex * 100 + '%';
    document.querySelector('.carousel').style.transform = 'translateX(' + newTransformValue + ')';
}
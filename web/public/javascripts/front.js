const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
    index++;
    if (index >= slide.length) {
        index = 0;
    }
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}


setInterval(showNextSlide, 3000);
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    const offset = -index * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
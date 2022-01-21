const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const dots = document.getElementsByClassName("dot");
let dotPosition = 0;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}
function hideAllDots() {
    for (let dot of dots) {
        dot.classList.remove("active-dot")
    }
}

function moveToNextSlide() {
    hideAllSlides();
    hideAllDots();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
        
    } else {
        slidePosition++;
    }

    dotPosition = slidePosition;
    dots[dotPosition].classList.add("active-dot")
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    hideAllDots();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    dotPosition = slidePosition;
    dots[dotPosition].classList.add("active-dot")
    
    slides[slidePosition].classList.add("carousel-item-visible");
}
function moveToNextDot() {
    
}
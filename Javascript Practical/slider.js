let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slider div').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 120}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// // Optional: Auto-slide every 3 seconds
// setInterval(nextSlide, 3000);

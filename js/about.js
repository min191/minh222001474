
var currentIndex = 0;
var totalSlides = document.querySelectorAll('.carousel-item').length;
var carouselWrapper = document.querySelector('.carousel-wrapper');
var intervalId;

function startCarousel() {
  intervalId = setInterval(function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
}

function stopCarousel() {
  clearInterval(intervalId);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  var translateValue = -currentIndex * 100 + '%';
  carouselWrapper.style.transform = 'translateX(' + translateValue + ')';
}

// Start the carousel when the page loads
window.addEventListener('load', startCarousel);

// Optionally, you can stop the carousel on mouseover
document.querySelector('.carousel-container').addEventListener('mouseover', stopCarousel);
document.querySelector('.carousel-container').addEventListener('mouseout', startCarousel);
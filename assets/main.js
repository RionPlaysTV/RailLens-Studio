document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  // Select only slide images
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  let current = 0;
  slides.forEach((img, i) => {
    img.style.opacity = (i === 0 ? '1' : '0');
    img.style.transition = 'opacity 1s ease-in-out';
  img.style.position = 'absolute';
  // CSS will set top/left and centering via transform
  // sizing now handled via CSS (.carousel-slide max-width/max-height and object-fit)
  });
  // Auto-rotate with control
  let slideInterval;
  function showSlide(index) {
    slides.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0';
    });
    current = index;
  }
  function nextSlide() {
    showSlide((current + 1) % slides.length);
    resetInterval();
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
    resetInterval();
  }
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 15000);
  }
  // Start auto-rotation
  slideInterval = setInterval(nextSlide, 15000);
  // Add button controls
  const nextBtn = carousel.querySelector('.carousel-control.next');
  const prevBtn = carousel.querySelector('.carousel-control.prev');
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
});

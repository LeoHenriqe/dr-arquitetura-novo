const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlides() {
  const length = slides.length;
  const newIndex = currentIndex + 1 < length ? currentIndex + 1 : 0;
  carousel.style.transform = `translateX(-${(100 / length) * newIndex}%)`;
  currentIndex = newIndex;
}

function prevSlide() {
  currentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1;
  showSlides();
}

function nextSlide() {
  currentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : 0;
  showSlides();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

const interval = setInterval(nextSlide, 3000); // Altere o valor para ajustar o tempo de mudança de slide (em milissegundos)

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

showSlides();

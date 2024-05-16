const projects = [
    ["imagens/farmácia bom preço/1.JPG", "imagens/farmácia bom preço/2.JPEG", "imagens/farmácia bom preço/3.JPEG", "imagens/farmácia bom preço/4.JPG"],
    ["imagens/PROJETO HABITAÇÃO SERIADA/1.png", "imagens/PROJETO HABITAÇÃO SERIADA/2.png"],
    ["imagens/studiok/1.jpeg", "imagens/studiok/2.jpeg", "imagens/studiok/3.jpeg"],
    ["imagens/j231/1.jpg", "imagens/j231/2.png", "imagens/j231/3.png", "imagens/j231/4.png", "imagens/j231/5.png"],
    ["/imagens/1303/1.png", "/imagens/1303/2.png", "/imagens/1303/3.png", "/imagens/1303/4.png", "/imagens/1303/5.png"],
    ["/imagens/d&a/1.png", "/imagens/d&a/2.png", "/imagens/d&a/3.jpg", "/imagens/d&a/4.jpg", "/imagens/d&a/6.png"],
    ["/imagens/jopm/1.png", "/imagens/jopm/2.jpg", "/imagens/jopm/3.jpg", "/imagens/jopm/4.png", "/imagens/jopm/5.png"],
    ["/imagens/dani/1.jpg", "/imagens/dani/2.jpg", "/imagens/dani/3.jpg", "/imagens/dani/4.png"]
];

let currentProject = [];
let currentIndex = 0;
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

function openProjectGallery(index) {
    currentProject = projects[index];
    currentIndex = 0;
    modal.style.display = "block";
    modalImg.src = currentProject[currentIndex];
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = currentProject.length - 1;
    } else if (currentIndex >= currentProject.length) {
        currentIndex = 0;
    }
    modalImg.src = currentProject[currentIndex];
}

document.addEventListener('keydown', function (event) {
    if (modal.style.display === "block") {
        if (event.key === "ArrowLeft") {
            changeImage(-1);
        } else if (event.key === "ArrowRight") {
            changeImage(1);
        } else if (event.key === "Escape") {
            closeModal();
        }
    }
});



const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-1');
const nextBtn = document.querySelector('.next-1');

let currentIndex1 = 0;

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

const interval1 = setInterval(nextSlide, 3000); // Altere o valor para ajustar o tempo de mudança de slide (em milissegundos)

function resetInterval() {
    clearInterval(interval1);
    interval = setInterval(nextSlide, 3000);
}

showSlides();

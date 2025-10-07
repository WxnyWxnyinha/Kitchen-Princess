const carouselWrapper = document.querySelector('.carousel-slide-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showSlide(index) {
    // Calcula a distância para mover o carrossel. Cada slide tem 100% de largura.
    const offset = -index * 100;
    // Move o contêiner dos slides para a esquerda, criando o efeito de slide.
    carouselWrapper.style.transform = `translateX(${offset}%)`;

    // Atualiza a classe 'active' para os indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === index) {
            indicator.classList.add('active');
        }
    });
}

// Botões de navegação
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

// Indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Inicializa a exibição do primeiro slide e seu indicador
showSlide(currentIndex);

// Slide automático
const carouselInterval = 3000;

function autoSlide() {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

let slideTimer = setInterval(autoSlide, carouselInterval);

const carouselContainer = document.querySelector('.carousel-container');

// Pausa o slide automático ao passar o mouse
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
});

// Reinicia o slide automático ao tirar o mouse
carouselContainer.addEventListener('mouseleave', () => {
    slideTimer = setInterval(autoSlide, carouselInterval);
});
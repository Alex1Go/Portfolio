document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.fon-box').classList.add('animate');
});

const swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
});

// Функция для проверки, виден ли элемент
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Анимация для элементов
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.hidden');
  elements.forEach((element, index) => {
    if (isInViewport(element)) {
      // Добавляем класс с небольшой задержкой
      setTimeout(() => {
        element.classList.add('show');
      }, index * 200); // Задержка между элементами: 200ms
    }
  });
}

// Запуск анимации при загрузке и скролле
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Запуск функции при загрузке и скролле
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

window.addEventListener('scroll', () => {
  const parallaxImages = document.querySelectorAll('.parallax');
  parallaxImages.forEach(image => {
    const speed = 0.5;
    const yOffset = window.scrollY * speed;
    image.style.transform = `translateY(${yOffset}px)`;
  });
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.5)';
  } else {
    header.style.boxShadow = 'none';
  }
});

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

// document.querySelectorAll('nav a').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault(); // Отключаем стандартное поведение ссылки
//     const targetId = this.getAttribute('href').slice(1); // Убираем символ #
//     const targetElement = document.getElementById(targetId); // Находим элемент с нужным ID

//     if (targetElement) {
//       // Плавная прокрутка с использованием ScrollIntoView
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   });
// });

//   Анимация при Scroll
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleScrollAnimation() {
  const elements = document.querySelectorAll('.hidden');
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Тень Header
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.5)';
  } else {
    header.style.boxShadow = 'none';
  }
});

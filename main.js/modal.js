const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.modal-button');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.classList.add('active'); // Показываем модалку
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active'); // Скрываем модалку
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active'); // Закрытие при клике вне модалки
  }
});

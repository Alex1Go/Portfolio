document.getElementById('email-icon').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});

// отправкa формы

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs
    .sendForm('service_id', 'template_id', this, 'user_id')
    .then(() => {
      alert('Сообщение отправлено!');
      document.getElementById('modal').style.display = 'none';
    })
    .catch(() => alert('Ошибка отправки.'));
});

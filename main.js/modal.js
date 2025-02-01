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

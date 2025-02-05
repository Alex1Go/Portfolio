emailjs.init('dQmmS8z9yyRz7icJ_');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs
    .sendForm('service_uot8wkk', 'template_2diarit', this)
    .then(() => {
      alert(' Message sent!');
      this.reset();
      document.getElementById('modal').style.display = 'none';
    })
    .catch(error => {
      console.error('Sending error:', error);
      alert('Failed to send.');
    });
});

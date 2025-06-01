const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && message) {
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:zamilismail313@gmail.com?subject=${subject}&body=${body}`;
  }
});

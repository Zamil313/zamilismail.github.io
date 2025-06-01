const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const message = form.message.value.trim();

  if (!name || !message) {
    status.textContent = 'Please fill in both fields.';
    return;
  }

  // Create mailto link with subject and body
  const subject = encodeURIComponent(`Contact Form Message from ${name}`);
  const body = encodeURIComponent(message);

  // Open default mail client
  window.location.href = `mailto:zamilismail313

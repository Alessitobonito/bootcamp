document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    
    if (!emailInput.validity.valid) {
      emailInput.classList.add('error');
      errorMessage.style.display = 'block';
      event.preventDefault();
    } else {
      emailInput.classList.remove('error');
      errorMessage.style.display = 'none';
    }
  });
  
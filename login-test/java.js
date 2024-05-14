const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');
  const emailError = document.getElementById('email-error');

  if (!username) {
    event.preventDefault(); 
    usernameError.classList.remove('hidden'); 
  } else {
    usernameError.classList.add('hidden');
  }
  if (!password) {
    event.preventDefault();
    passwordError.classList.remove('hidden');
  } else {
    passwordError.classList.add('hidden');
  }
  if (!email) {
    event.preventDefault(); 
    emailError.classList.remove('hidden'); 
  } else {
    emailError.classList.add('hidden');
  }
});

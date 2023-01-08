const throttle = require('lodash.throttle');
const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

let storagedInput;
form.addEventListener('input', throttle(() => {
  storagedInput = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(storagedInput));
  sessionStorage.setItem('reload', true);
}, 500));

form.addEventListener('submit', () => {
  console.log({ email: emailInput.value, message: messageInput.value });
  localStorage.removeItem('feedback-form-state');
  sessionStorage.removeItem('reload');
  form.reset();
});

const siteReset = () => {
  let currentStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (currentStorage.email || currentStorage.message) {
    emailInput.setAttribute('value', currentStorage.email);
    messageInput.setAttribute('placeholder', currentStorage.message);
  }
};

if (sessionStorage.length === 1) {
  siteReset();
}

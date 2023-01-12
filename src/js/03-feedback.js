const throttle = require('lodash.throttle');
const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

let storagedInput;
form.addEventListener(
  'input',
  throttle(() => {
    storagedInput = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(storagedInput));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ email: emailInput.value, message: messageInput.value });
  localStorage.removeItem('feedback-form-state');
  form.reset();
});

const siteReset = () => {
  let currentStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (currentStorage.email || currentStorage.message) {
    emailInput.value = currentStorage.email;
    messageInput.value = currentStorage.message;
  }
};

if (localStorage.getItem('feedback-form-state')) {
  siteReset();
}

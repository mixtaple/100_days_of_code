let value = 0;
const buttonPlus = document.querySelector('.button__plus');
const buttonMinus = document.querySelector('.button__minus');
const buttonReset = document.querySelector('.button__reset');
const counterValue = document.querySelector('.counter__value');

counterValue.textContent = value;
buttonPlus.addEventListener('click', () => {
  value += 1;
  counterValue.textContent = value;
});

buttonMinus.addEventListener('click', () => {
  value -= 1;
  counterValue.textContent = value;
});

buttonReset.addEventListener('click', () => {
  value = 0;
  counterValue.textContent = value;
});

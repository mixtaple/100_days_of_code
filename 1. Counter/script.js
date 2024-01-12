let value = document.querySelector('.counter__value').textContent
  ? document.querySelector('.counter__value').textContent
  : 0;
const counterValue = document.querySelector('.counter__value');
const counterButtons = document.querySelector('.counter__buttons');
counterValue.textContent = value;

counterButtons.addEventListener('click', event => {
  // event.preventDefault();
  if (event.target.classList.contains('button__plus')) {
    value += 1;
  } else if (event.target.classList.contains('button__minus')) {
    value -= 1;
  } else if (event.target.classList.contains('button__reset')) {
    value = 0;
  }
  setValue(value);
});
const setValue = () => {
  if (value < 0) {
    counterValue.style.color = 'red';
  } else if (value > 0) {
    counterValue.style.color = 'green';
  } else {
    counterValue.style.color = 'white';
  }
  counterValue.textContent = value;
};

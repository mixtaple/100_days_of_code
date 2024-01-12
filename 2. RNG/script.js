const rngButton = document.querySelector('.randomizer__button');
let value = document.querySelector('.randomizer__value');

rngButton.addEventListener('click', () => {
  value.textContent = Math.round(Math.random(0, 100) * 100);
  value.classList.remove('randomizer__value_blink');
  setTimeout(() => {
    value.classList.add('randomizer__value_blink');
  }, 5000);
});

const checkerResult = document.querySelector('.checker__result');
const checkerInput = document.querySelector('.checker__input');
const checkerButton = document.querySelector('.checker__button');

checkerButton.addEventListener('click', (e) => {
  e.preventDefault();
  const value = checkerInput.value;
  console.log(value);
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < value.length; i++) {
    if (vowels.includes(value[i].toLowerCase())) {
      counter++;
    }
  }
  checkerResult.textContent = `Text "${value}" has ${counter} vowels`;

  checkerResult.classList.remove('checker__result_faded');
});

checkerInput.addEventListener('input', () => {
  if (checkerInput.value === '') {
    checkerResult.classList.add('checker__result_faded');
    checkerResult.textContent = 'Waiting for input';
  } else {
    checkerResult.classList.remove('checker__result_faded');
    checkerResult.textContent = 'Press "Check" button to count vowels';
  }
});

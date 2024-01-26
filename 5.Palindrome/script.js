const checkerResult = document.querySelector('.checker__result');
const checkerInput = document.querySelector('.checker__input');
const checkerButton = document.querySelector('.checker__button');

const checkPalindrome = (str) => {
  str = str.toLowerCase().replace(/\s/g, '');
  const strReverse = str.split('').reverse().join('');
  return str === strReverse;
};

checkerButton.addEventListener('click', (e) => {
  e.preventDefault();
  const value = checkerInput.value;
  if (checkPalindrome(value)) {
    checkerResult.textContent = `String "${value}" is palindrome`;
  } else {
    checkerResult.textContent = `String "${value}" is not palindrome`;
  }
  checkerResult.classList.remove('checker__result_faded');
});

checkerInput.addEventListener('input', () => {
  if (checkerInput.value === '') {
    checkerResult.classList.add('checker__result_faded');
    checkerResult.textContent = 'Waiting for input';
  } else {
    checkerResult.classList.remove('checker__result_faded');
    checkerResult.textContent = 'Press "Check" button to check palindrome';
  }
});

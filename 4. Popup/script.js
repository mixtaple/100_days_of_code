const modalButton = document.querySelector('.menu__button');
(modalContent = document.querySelector('.popup__content')),
  (menu = document.querySelector('.menu')),
  (popupClose = document.querySelector('.popup__close')),
  (modal = document.querySelector('.popup'));
modalButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

popupClose.addEventListener('click', () => {
  modal.classList.add('slide-up');
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('slide-up');
  }, 500);
});

const copierResult = document.querySelector('.copier__text');
const copierButton = document.querySelector('.copier__button');
const controls = document.querySelector('.copier__controls');
const action = document.querySelectorAll('.copier__action');

const randomCoupon = () => {
  let coupon = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 10; i++) {
    coupon += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return coupon;
};

copierResult.textContent = randomCoupon();
action.forEach((item) => {
  const actionText = action[0];
  const actionButton = action[1];
  item.addEventListener('mouseover', () => {
    actionText.style.boxShadow = '0 0 30px var(--color-sec)';
    actionText.style.backgroundColor = 'var(--light-orange)';
    actionButton.style.backgroundColor = 'var(--light-orange)';
    actionButton.style.border = 'none';
  });

  item.addEventListener('mouseout', () => {
    action.forEach((item) => {
      actionText.style.boxShadow = 'none';
      actionText.style.backgroundColor = 'var(--grey)';
      actionButton.style.backgroundColor = 'var(--white)';
      actionButton.style.border = '2.5px solid var(--blue)';
    });
  });

  item.addEventListener('click', (e) => {
    e.preventDefault();

    const couponCode = copierResult.textContent;
    navigator.clipboard
      .writeText(couponCode)
      .then(() => {
        actionButton.textContent = 'Copied!';
        setTimeout(() => {
          actionButton.textContent = 'Copy';
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to copy coupon code:', error);
      });
  });
});

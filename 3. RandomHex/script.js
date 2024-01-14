let hexValue = "000000";
const generateButton = document.querySelector(".generator__button");
const textValue = document.querySelector(".generator__value");
textValue.textContent = `#${hexValue}`;
generateButton.addEventListener("click", (e) => {
  hexValue = Math.random().toString(16).substring(3, 9);
  textValue.textContent = `#${hexValue}`;
  textValue.style.color = `#${hexValue}`;
});

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Para cambiar el texto al hacer click
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yo también jijiji 😘";
  gif.src = "https://i.pinimg.com/originals/73/0d/75/730d75ed729397068c7a89fa7476e305.gif";
});

// Hace que el botón se mueva
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculala máxima posicion por donde se mueve el botón
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

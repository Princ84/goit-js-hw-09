function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timeID = null;

startBtn.addEventListener('click', () => {
  timeID = setInterval(() => {
    bodyColor.style.background = getRandomHexColor();
    startBtn.disabled = true;
  }, 1000);
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timeID);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

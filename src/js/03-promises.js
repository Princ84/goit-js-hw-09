import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  let delayTime = Number(delay.value);

  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, delayTime)
      .then(res => {
        Notiflix.Notify.success(res);
      })
      .catch(res => {
        Notiflix.Notify.failure(res);
      });

    delayTime += Number(step.value);
  }
}

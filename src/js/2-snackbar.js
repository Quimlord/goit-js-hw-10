// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

//=======================================

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(e) {
  e.preventDefault();
  const state = e.target.state.value;
  const delay = Number(e.target.delay.value);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(del =>
      iziToast.success({
        title: 'Resolve',
        message: `✅ Fulfilled promise in ${del}ms`,
        position: 'topRight',
      })
    )
    .catch(del =>
      iziToast.error({
        title: 'Reject',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      })
    );
}

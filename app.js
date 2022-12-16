const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// event listner on show modal button
for (let button of btnOpenModal) {
  button.addEventListener('click', openModal);
}

// event listner on cross button
btnCloseModal.addEventListener('click', closeModal);

// event listner on overlay
overlay.addEventListener('click', closeModal);

// event listner on esc key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

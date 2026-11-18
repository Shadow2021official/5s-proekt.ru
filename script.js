function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  modal = document.getElementById('callbackModal');
  const openBtn = document.querySelector('.button-header2');

  if (!modal || !openBtn) {
    console.warn('Модалка или кнопка не найдены');
    return;
  }

  openBtn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal || event.target.closest('.modal-close')) {
      closeModal();
    }
  });
});
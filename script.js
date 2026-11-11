document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');

  toggle.addEventListener('click', function(event) {
    event.stopPropagation(); 
    menu.classList.toggle('show');
  });
  
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
});

const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');

// Функция для переключения текста и состояния модалки
function toggleModal() {
  const isOpen = modal.classList.toggle('show'); 
  // Меняем текст в зависимости от того, открыта модалка или нет
  if (isOpen) {
    btn.textContent = btn.dataset.textClose; // "Закрыть окно"
  } else {
    btn.textContent = btn.dataset.textOpen;  // "Открыть окно"
  }
}

btn.addEventListener('click', toggleModal);

// Закрытие по крестику
modal.querySelector('.close').addEventListener('click', function() {
  modal.classList.remove('show');
  btn.textContent = btn.dataset.textOpen; // возвращаем исходный текст
});

// Закрытие по клику вне окна (по фону)
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
    btn.textContent = btn.dataset.textOpen;
  }
});
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

document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burgerBtn'); // Ваша кнопка
  const mobileMenu = document.getElementById('mobileMenu');
  
  const mainPanel = document.getElementById('mainPanel');
  const subPanel = document.getElementById('subPanel');

  const closeBtns = [document.getElementById('closeMenuBtn'), document.getElementById('closeMenuBtn2')];
  const openSubMenuBtn = document.getElementById('openSubMenuBtn');
  const backToMainBtn = document.getElementById('backToMainBtn');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('active');
      burgerBtn.classList.toggle('active'); 
      
      if (isOpen) {
        mainPanel.classList.add('active');
        subPanel.classList.remove('active');
        document.body.style.overflow = 'hidden'; 
      } else {
        document.body.style.overflow = ''; 
      }
    });
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.style.overflow = '';
    
    mainPanel.classList.add('active');
    subPanel.classList.remove('active');
  }

  closeBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', closeMenu);
  });

  if (openSubMenuBtn) {
    openSubMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      mainPanel.classList.remove('active');
      subPanel.classList.add('active');
    });
  }

  if (backToMainBtn) {
    backToMainBtn.addEventListener('click', function(e) {
      e.preventDefault();
      subPanel.classList.remove('active');
      mainPanel.classList.add('active');
    });
  }
});